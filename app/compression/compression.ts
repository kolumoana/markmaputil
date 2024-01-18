import { promisify } from "util";
import { gzip, gunzip } from "zlib";

const gzipPromise = promisify(gzip);
const gunzipPromise = promisify(gunzip);

export const compressString = async (raw: string): Promise<string> => {
  const buffer = Buffer.from(raw, "utf-8");
  const compressed = await gzipPromise(buffer);
  const compressedBase64 = compressed.toString("base64");
  return encodeURIComponent(compressedBase64);
};

export const decompressString = async (uriEncoded: string): Promise<string> => {
  const compressedBase64 = decodeURIComponent(uriEncoded);
  const compressed = Buffer.from(compressedBase64, "base64");
  const buffer = await gunzipPromise(compressed);
  return buffer.toString("utf-8");
};
