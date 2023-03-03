import { NextApiRequest, NextApiResponse } from 'next';
import supabase from 'plugins/supabase';

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const { query, method } = req;
  const key = query.key as string;

  switch (method) {
    case 'GET':
      const { data, error, status, statusText } = await supabase
        .from('users')
        .select(
          `
          uid,
          key,
          name,
          mbti,
          create_timestamp,
          participants (
            uid,
            user_mbti,
            user_key,
            name
          )
        `
        )
        .eq('key', key)
        .limit(1)
        .single();

      if (error) {
        console.log(error);
        res.status(status).json(statusText);
        break;
      }

      if (!data) {
        res.status(404).json({ message: 'User not found' });
        break;
      }

      res.status(status).json(data);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
