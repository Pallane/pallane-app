import { Env } from './types'

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // CORS headers
    const headers = {
      'Access-Control-Allow-Origin': 'https://your-domain.com',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers })
    }

    try {
      // Vérification de l'API key
      const apiKey = request.headers.get('X-API-Key')
      if (!env.API_KEYS.includes(apiKey)) {
        return new Response('Unauthorized', { status: 401 })
      }

      // Route handling logic here
      const url = new URL(request.url)
      
      // Example route
      if (url.pathname === '/api/data' && request.method === 'GET') {
        // Supabase client with service key for backend operations
        const supabaseAdmin = createClient(
          env.SUPABASE_URL,
          env.SUPABASE_SERVICE_KEY
        )
        
        const { data, error } = await supabaseAdmin
          .from('your_table')
          .select('*')
        
        if (error) throw error
        
        return new Response(JSON.stringify(data), {
          headers: {
            ...headers,
            'Content-Type': 'application/json',
          },
        })
      }

      return new Response('Not Found', { status: 404 })
    } catch (err) {
      return new Response('Internal Server Error', { status: 500 })
    }
  },
}