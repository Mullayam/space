// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type ResponseData = {
  Success: boolean;
  Message: string;
  ErrorCode: string;
  Content?: any;
  API_KEY?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    Success: false,
    Message: "Undefined API Key",
    ErrorCode: "0405x89",
    API_KEY: "Invalid",
  });
}
