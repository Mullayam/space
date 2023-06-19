import type { Readable } from "node:stream";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function BufferChunks(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}
