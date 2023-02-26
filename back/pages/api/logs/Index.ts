import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      let { data, error, count, status, statusText } = await supabase
        .from("users")
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
        .range(0, 1);

      if (error) {
        console.log(error);
        res.status(status).json(statusText);
        break;
      }

      if (count === 0) {
        res.status(404).json({ message: "User not found" });
        break;
      }

      const user = data[0];
      console.log(data);
      res.status(status).json(user);
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
