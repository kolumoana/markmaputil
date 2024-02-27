import pako from "pako";

export const compressString = async (raw: string): Promise<string> => {
  const buffer = Buffer.from(raw, "utf-8");
  const uint8Array = new Uint8Array(buffer);
  const compressed = pako.gzip(uint8Array);
  const compressedBase64 = Buffer.from(compressed).toString("base64");

  return encodeURIComponent(compressedBase64);
};

export const decompressString = async (uriEncoded: string): Promise<string> => {
  const compressedBase64 = decodeURIComponent(uriEncoded);
  const compressed = Buffer.from(compressedBase64, "base64");
  const uint8Array = new Uint8Array(compressed);
  const decompressed = pako.ungzip(uint8Array, { to: "string" });

  return decompressed;
};
