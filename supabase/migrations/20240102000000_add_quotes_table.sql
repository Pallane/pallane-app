-- Create quotes table
CREATE TABLE quotes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company_name TEXT,
    phone TEXT,
    message TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'rejected')),
    total_amount DECIMAL(10,2),
    items JSONB NOT NULL, -- Stocke les formations sélectionnées avec leurs détails
    valid_until DATE, -- Date de validité du devis
    accepted_at TIMESTAMP WITH TIME ZONE,
    rejected_at TIMESTAMP WITH TIME ZONE,
    rejection_reason TEXT
);

-- Enable RLS
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

-- Policies for quotes table
CREATE POLICY "Users can view their own quotes"
ON quotes FOR SELECT
TO authenticated
USING (
    user_id = auth.uid() OR
    EXISTS (
        SELECT 1 FROM profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

CREATE POLICY "Users can create quotes"
ON quotes FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Only admins can update quotes"
ON quotes FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

-- Create quotes_history table for tracking changes
CREATE TABLE quotes_history (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    quote_id UUID REFERENCES quotes(id) ON DELETE CASCADE,
    changed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    changed_by UUID REFERENCES profiles(id),
    old_status TEXT,
    new_status TEXT,
    comment TEXT
);

-- Enable RLS for quotes_history
ALTER TABLE quotes_history ENABLE ROW LEVEL SECURITY;

-- Policies for quotes_history
CREATE POLICY "Users can view history of their own quotes"
ON quotes_history FOR SELECT
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM quotes
        WHERE quotes.id = quote_id
        AND (quotes.user_id = auth.uid() OR
             EXISTS (
                SELECT 1 FROM profiles
                WHERE id = auth.uid()
                AND role = 'admin'
             ))
    )
);

CREATE POLICY "Only admins can insert history"
ON quotes_history FOR INSERT
TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

-- Function to track quote status changes
CREATE OR REPLACE FUNCTION track_quote_status_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.status IS DISTINCT FROM NEW.status THEN
        INSERT INTO quotes_history (
            quote_id,
            changed_by,
            old_status,
            new_status
        ) VALUES (
            NEW.id,
            auth.uid(),
            OLD.status,
            NEW.status
        );
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for tracking quote status changes
CREATE TRIGGER on_quote_status_change
    AFTER UPDATE ON quotes
    FOR EACH ROW
    WHEN (OLD.status IS DISTINCT FROM NEW.status)
    EXECUTE FUNCTION track_quote_status_changes();