import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  switch (_req.method) {
    case 'POST':
      const { data, status, error, statusText } = await supabase.from('usage_logs').insert([{ type: 2, url: _req.url }]);

      if (error) {
        res.status(status).json(statusText);
        break;
      }

      res.status(status).json({ message: 'Ok' });
      break;
    // handle other HTTP methods
    default:
      res.status(404).json({ message: 'Not found' });
      break;
  }
}
