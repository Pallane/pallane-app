import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  }
});

interface QuoteRequestData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  phone: string;
  message: string;
  products: Array<{
    id: string;
    name: string;
    quantity: number;
    type: string;
  }>;
}

export const createQuoteRequest = async (quoteData: QuoteRequestData) => {
  try {
    const { data: quote, error } = await supabase
      .from('quote_requests')
      .insert([
        {
          first_name: quoteData.firstName,
          last_name: quoteData.lastName,
          email: quoteData.email,
          company_name: quoteData.companyName,
          phone: quoteData.phone,
          message: quoteData.message,
          products: quoteData.products,
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (error) throw error;
    return quote;
  } catch (error) {
    console.error('Error creating quote request:', error);
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session?.user) throw new Error('No user logged in');

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export const updateProfile = async (updates: Partial<Database['public']['Tables']['profiles']['Update']>) => {
  try {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session?.user) throw new Error('No user logged in');

    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', session.user.id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getQuoteRequests = async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session?.user) throw new Error('No user logged in');

    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching quote requests:', error);
    throw error;
  }
};