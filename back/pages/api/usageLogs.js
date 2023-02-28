import supabase from '@/plugins/supabase';

export default async function userHandler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // 조회수 1 추가
      await supabase.from('usage_logs').insert([{ type: 1, url: req.url }]);

      const hitCountResult = await supabase.from('usage_logs').select('*', { count: 'exact', head: true }).eq('type', 1);

      if (hitCountResult.error) {
        console.log(hitCountResult.error);
        res.status(hitCountResult.status).json(hitCountResult.statusText);
        break;
      }

      const hit = hitCountResult.count;

      const shareCountResult = await supabase.from('usage_logs').select('*', { count: 'exact', head: true }).eq('type', 2);

      if (shareCountResult.error) {
        console.log(shareCountResult.error);
        res.status(shareCountResult.status).json(shareCountResult.statusText);
        break;
      }

      let share = shareCountResult.count;
      res.status(shareCountResult.status).json({ hit, share });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
