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
  const { method } = req;

  switch (method) {
    case "GET":
      let { data, error, count, status, statusText } = await supabase
        .from("usage_logs")
        .select(
          `
        type
        `
        );

      if (error) {
        console.log(error);
        res.status(status).json(statusText);
        break;
      }

      let hit = data.filter((data: Logs) => data.type === 1).length;
      let share = data.filter((data: Logs) => data.type === 2).length;

      console.log(data);
      res.status(status).json({ hit, share });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
