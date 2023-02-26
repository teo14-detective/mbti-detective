import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { Logs } from "../../interfaces";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  const { user_key, name, mbti } = body;

  switch (method) {
    case "POST":
      let { data, error, count, status, statusText } = await supabase
        .from("participants")
        .insert({ name, user_key, user_mbti: mbti })
        .eq("key", user_key);

      if (error) {
        console.log(error);
        res.status(status).json(statusText);
        break;
      }

      res.status(status).json(data);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
