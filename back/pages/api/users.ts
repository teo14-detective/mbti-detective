import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../interfaces';
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Fake users data
const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default async function handler(_req: NextApiRequest, res: NextApiResponse<User[]>) {
  switch (_req.method) {
    case 'POST':
      res.status(200).json({ message: `You submitted the following data: ${_req.body}` });
      break;
    // handle other HTTP methods
    default:
      res.status(404).json({ message: '' });
      break;
  }
}
