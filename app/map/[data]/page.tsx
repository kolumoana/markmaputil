import { decompressString } from "../../compression/compression";

import { MarkmapView } from "../../components/MarkmapView/MarkmapView";

import { convertToTitle, convertToDescription } from "./description";
import type { Metadata } from "next";

interface Props {
  params: {
    data: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const markdown = await decompressString(params.data);

  return {
    title: `${convertToTitle(markdown)} | mindmap util`,
    description: convertToDescription(markdown),
  };
};

export default async function Page({ params }: Props) {
  const markdown = await decompressString(params.data);

  return <MarkmapView markdown={markdown} compressed={params.data} />;
}
