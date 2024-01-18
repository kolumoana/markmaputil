"use client";

import { useEffect, useState, useRef } from "react";
import { decompressString } from "../../compression/compression";

import { MarkmapView } from "../../components/Markmap/Markmap";

interface Props {
  params: {
    data: string;
  };
}

export default function Page({ params }: Props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const set = async () => {
      const decompressed = await decompressString(params.data);
      setValue(decompressed);
    };
    set();
  }, []);

  return <>{value && <MarkmapView markdown={value} />}</>;
}
