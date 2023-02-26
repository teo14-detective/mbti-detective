const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function userHandler(req, res) {
  const { query, method } = req;
  const key = query.key;

  switch (method) {
    case 'GET':
      let { data, error, count, status, statusText } = await supabase
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
        .range(0, 1);

      if (error) {
        console.log(error);
        res.status(status).json(statusText);
        break;
      }

      if (count === 0) {
        res.status(404).json({ message: 'User not found' });
        break;
      }

      const user = data[0];

      res.status(status).json(user);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
