import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(_req, res) {
  switch (_req.method) {
    case 'POST':
      const { query, method, body } = _req;

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
      const { data, status, error, statusText } = await supabase.from('users').insert([{ name: body.name, key, mbti: body.mbti }]);

      if (error) {
        res.status(status).json(statusText);
        break;
      }

      res.status(200).json({ key });
      break;
    // handle other HTTP methods
    default:
      res.status(404).json({ message: 'Not Found' });
      break;
  }
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  const randomIndex = Array.from({ length }, () => Math.floor(Math.random() * characters.length));
  result = randomIndex.map((index) => characters.charAt(index)).join('');

  return result;
}
