import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from 'plugins/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const { body } = req;

      if (!body.name || !body.mbti) {
        let message = 'Bad Request';
        if (body.name.length > 10) {
          message += '| Name is too long';
        }

        if (body.mbti.length > 4) {
          message += '| MBTI is invalid';
        }

        res.status(400).json({ message });
        break;
      }
      const key = generateRandomString(10);
      const { status, error, statusText } = await supabase.from('users').insert([{ name: body.name, key, mbti: body.mbti }]);

      if (error) {
        res.status(status).json(statusText);
        break;
      }

      res.status(200).json({ key });
      break;
    // handle other HTTP methods
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}

function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  const randomIndex = Array.from({ length }, () => Math.floor(Math.random() * characters.length));
  result = randomIndex.map((index) => characters.charAt(index)).join('');

  return result;
}
