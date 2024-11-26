export interface Database {
  public: {
    Tables: {
      profiles: {
        // ... reste du code pour profiles ...
      };
      quotes: {
        Row: {
          id: string;
          created_at: string;
          user_id: string;
          first_name: string;
          last_name: string;
          email: string;
          company_name: string | null;
          phone: string | null;
          message: string | null;
          status: 'pending' | 'processing' | 'completed' | 'rejected';
          total_amount: number | null;
          items: Array<{
            id: string;
            name: string;
            quantity: number;
            type: string;
            price: string;
          }>;
          valid_until: string | null;
          accepted_at: string | null;
          rejected_at: string | null;
          rejection_reason: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          user_id: string;
          first_name: string;
          last_name: string;
          email: string;
          company_name?: string | null;
          phone?: string | null;
          message?: string | null;
          status?: 'pending' | 'processing' | 'completed' | 'rejected';
          total_amount?: number | null;
          items: Array<{
            id: string;
            name: string;
            quantity: number;
            type: string;
            price: string;
          }>;
          valid_until?: string | null;
          accepted_at?: string | null;
          rejected_at?: string | null;
          rejection_reason?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          user_id?: string;
          first_name?: string;
          last_name?: string;
          email?: string;
          company_name?: string | null;
          phone?: string | null;
          message?: string | null;
          status?: 'pending' | 'processing' | 'completed' | 'rejected';
          total_amount?: number | null;
          items?: Array<{
            id: string;
            name: string;
            quantity: number;
            type: string;
            price: string;
          }>;
          valid_until?: string | null;
          accepted_at?: string | null;
          rejected_at?: string | null;
          rejection_reason?: string | null;
        };
      };
      // ... reste des tables ...
    };
  };
}