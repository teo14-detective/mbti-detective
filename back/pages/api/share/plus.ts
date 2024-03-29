import { NextApiRequest, NextApiResponse } from 'next';
import supabase from 'plugins/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const { status, error, statusText } = await supabase.from('usage_logs').insert([{ type: 2, url: req.url }]);

      if (error) {
        res.status(status).json(statusText);
        break;
      }

      res.status(status).json({ message: 'Ok' });
      break;
    // handle other HTTP methods
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
