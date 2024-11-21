export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          created_at: string;
          email: string;
          first_name: string | null;
          last_name: string | null;
          company_name: string | null;
          role: 'client' | 'partner' | 'admin';
          avatar_url: string | null;
        };
        Insert: {
          id: string;
          created_at?: string;
          email: string;
          first_name?: string | null;
          last_name?: string | null;
          company_name?: string | null;
          role?: 'client' | 'partner' | 'admin';
          avatar_url?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          email?: string;
          first_name?: string | null;
          last_name?: string | null;
          company_name?: string | null;
          role?: 'client' | 'partner' | 'admin';
          avatar_url?: string | null;
        };
      };
      products: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          description: string | null;
          type: 'hardware' | 'license' | 'training' | 'expert';
          price: number | null;
          logo_url: string | null;
          features: any | null;
          specifications: any | null;
          is_active: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          description?: string | null;
          type: 'hardware' | 'license' | 'training' | 'expert';
          price?: number | null;
          logo_url?: string | null;
          features?: any | null;
          specifications?: any | null;
          is_active?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          description?: string | null;
          type?: 'hardware' | 'license' | 'training' | 'expert';
          price?: number | null;
          logo_url?: string | null;
          features?: any | null;
          specifications?: any | null;
          is_active?: boolean;
        };
      };
      quote_requests: {
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
          products: Array<{
            id: string;
            name: string;
            quantity: number;
            type: string;
          }>;
        };
        Insert: {
          id?: string;
          created_at?: string;
          user_id?: string;
          first_name: string;
          last_name: string;
          email: string;
          company_name?: string | null;
          phone?: string | null;
          message?: string | null;
          status?: 'pending' | 'processing' | 'completed' | 'rejected';
          products: Array<{
            id: string;
            name: string;
            quantity: number;
            type: string;
          }>;
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
          products?: Array<{
            id: string;
            name: string;
            quantity: number;
            type: string;
          }>;
        };
      };
      orders: {
        Row: {
          id: string;
          created_at: string;
          user_id: string;
          status: 'pending' | 'processing' | 'completed' | 'cancelled';
          total_amount: number;
          items: any;
          billing_address: any | null;
          payment_status: 'pending' | 'paid' | 'failed';
        };
        Insert: {
          id?: string;
          created_at?: string;
          user_id: string;
          status?: 'pending' | 'processing' | 'completed' | 'cancelled';
          total_amount: number;
          items: any;
          billing_address?: any | null;
          payment_status?: 'pending' | 'paid' | 'failed';
        };
        Update: {
          id?: string;
          created_at?: string;
          user_id?: string;
          status?: 'pending' | 'processing' | 'completed' | 'cancelled';
          total_amount?: number;
          items?: any;
          billing_address?: any | null;
          payment_status?: 'pending' | 'paid' | 'failed';
        };
      };
    };
  };
}