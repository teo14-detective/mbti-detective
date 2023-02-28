import supabase from '@/plugins/supabase';

export default async function userHandler(req, res) {
  switch (req.method) {
    case 'POST':
      const { method, body } = req;

      if (!body.name || !body.mbti || !body.user_key) {
        let message = 'Bad Request';
        if (body.name.length > 10) {
          message += '| Name is too long';
        }

        if (body.mbti.length > 4) {
          message += '| MBTI is invalid';
        }

        if (body.mbti.key > 10) {
          message += '| User key is invalid';
        }

        res.status(400).json({ message });
        break;
      }

      let getUser = await supabase
        .from('users')
        .select(
          `
                uid,
                key
            `
        )
        .eq('key', body.user_key)
        .range(0, 1);

      if (getUser.count === 0) {
        res.status(404).json({ message: 'User not found' });
        break;
      }

      const { status, error, statusText } = await supabase
        .from('participants')
        .insert([{ name: body.name, user_uid: getUser.data[0].uid, user_key: body.user_key, user_mbti: body.mbti }]);

      if (error) {
        console.log(error);
        res.status(status).json(statusText);
        break;
      }

      res.status(status).json('OK');
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
