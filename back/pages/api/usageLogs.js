import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function userHandler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // 조회수 1 추가
      await supabase.from('usage_logs').insert([{ type: 1, url: req.url }]);

      let { data, error, count, status, statusText } = await supabase
        .from('usage_logs')
        .select(
          `
        type
        `
        )
        .neq('type', 0);

      if (error) {
        console.log(error);
        res.status(status).json(statusText);
        break;
      }

      let hit = data.filter((data) => data.type === 1).length;
      let share = data.filter((data) => data.type === 2).length;

      console.log(data);
      res.status(status).json({ hit, share });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}