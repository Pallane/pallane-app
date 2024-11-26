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
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    type: string;
    price: string;
  }>;
}

export const createQuoteRequest = async (quoteData: QuoteRequestData) => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session?.user) {
      throw new Error('User must be authenticated');
    }

    // Calculer le montant total
    const totalAmount = quoteData.items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return total + (price * item.quantity);
    }, 0);

    // Définir la date de validité (par exemple, 30 jours)
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 30);

    const { data, error } = await supabase
      .from('quotes')
      .insert([
        {
          user_id: session.user.id,
          first_name: quoteData.firstName,
          last_name: quoteData.lastName,
          email: quoteData.email,
          company_name: quoteData.companyName,
          phone: quoteData.phone,
          message: quoteData.message,
          items: quoteData.items,
          status: 'pending',
          total_amount: totalAmount,
          valid_until: validUntil.toISOString()
        }
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating quote request:', error);
    throw error;
  }
};

export const getQuoteRequests = async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session?.user) throw new Error('No user logged in');

    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    throw error;
  }
};
