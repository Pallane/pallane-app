-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table
CREATE TABLE profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    first_name TEXT,
    last_name TEXT,
    company_name TEXT,
    role TEXT DEFAULT 'client' CHECK (role IN ('client', 'trainer', 'admin')),
    avatar_url TEXT,
    PRIMARY KEY (id)
);

-- Create trainings table
CREATE TABLE trainings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    objectives TEXT[],
    prerequisites TEXT[],
    syllabus TEXT[],
    duration TEXT NOT NULL,
    language TEXT NOT NULL,
    price DECIMAL(10,2),
    level TEXT CHECK (level IN ('beginner', 'intermediate', 'advanced', 'specialized')),
    certificate BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    trainer_id UUID REFERENCES profiles(id),
    materials_included BOOLEAN DEFAULT true,
    max_students INTEGER DEFAULT 10
);

-- Create training_sessions table
CREATE TABLE training_sessions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    training_id UUID REFERENCES trainings(id) ON DELETE CASCADE,
    trainer_id UUID REFERENCES profiles(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    type TEXT CHECK (type IN ('remote', 'onsite')),
    location TEXT,
    available_seats INTEGER NOT NULL,
    total_seats INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    language TEXT NOT NULL,
    status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'confirmed', 'cancelled'))
);

-- Create bookings table
CREATE TABLE bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    session_id UUID REFERENCES training_sessions(id) ON DELETE CASCADE,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
    payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
    amount DECIMAL(10,2) NOT NULL
);

-- Create trainer_profiles table
CREATE TABLE trainer_profiles (
    id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    bio TEXT,
    certifications TEXT[],
    specialties TEXT[],
    languages TEXT[],
    hourly_rate DECIMAL(10,2),
    availability TEXT[] -- Array of available time slots
);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE trainings ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE trainer_profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
ON profiles FOR SELECT
TO public
USING (true);

CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id);

-- Trainings policies
CREATE POLICY "Trainings are viewable by everyone"
ON trainings FOR SELECT
TO public
USING (is_active = true);

CREATE POLICY "Trainers can create trainings"
ON trainings FOR INSERT
TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM profiles
        WHERE id = auth.uid()
        AND role IN ('trainer', 'admin')
    )
);

CREATE POLICY "Trainers can update own trainings"
ON trainings FOR UPDATE
TO authenticated
USING (
    trainer_id = auth.uid() OR
    EXISTS (
        SELECT 1 FROM profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

-- Training sessions policies
CREATE POLICY "Sessions are viewable by everyone"
ON training_sessions FOR SELECT
TO public
USING (true);

CREATE POLICY "Trainers can manage their sessions"
ON training_sessions FOR ALL
TO authenticated
USING (
    trainer_id = auth.uid() OR
    EXISTS (
        SELECT 1 FROM profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

-- Bookings policies
CREATE POLICY "Users can view their own bookings"
ON bookings FOR SELECT
TO authenticated
USING (
    user_id = auth.uid() OR
    EXISTS (
        SELECT 1 FROM training_sessions
        WHERE training_sessions.id = session_id
        AND training_sessions.trainer_id = auth.uid()
    ) OR
    EXISTS (
        SELECT 1 FROM profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

CREATE POLICY "Users can create bookings"
ON bookings FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings"
ON bookings FOR UPDATE
TO authenticated
USING (
    user_id = auth.uid() OR
    EXISTS (
        SELECT 1 FROM training_sessions
        WHERE training_sessions.id = session_id
        AND training_sessions.trainer_id = auth.uid()
    ) OR
    EXISTS (
        SELECT 1 FROM profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

-- Trainer profiles policies
CREATE POLICY "Trainer profiles are viewable by everyone"
ON trainer_profiles FOR SELECT
TO public
USING (true);

CREATE POLICY "Trainers can update own profile"
ON trainer_profiles FOR UPDATE
TO authenticated
USING (id = auth.uid());

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
    INSERT INTO public.profiles (id, email, role)
    VALUES (new.id, new.email, 'client');
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();