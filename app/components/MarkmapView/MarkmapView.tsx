import React, { useRef, useEffect } from "react";
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";
import matter from "gray-matter";
import { IMarkmapOptions, INode } from "markmap-common";

const transformer = new Transformer();

interface Props {
  markdown: string;
}

export const MarkmapView = ({ markdown }: Props) => {
  const refSvg = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (refSvg.current) {
      const parsedFrontMatter = matter(markdown);
      const markmap = Markmap.create(refSvg.current);
      const { root } = transformer.transform(markdown);

      const options = {
        initialExpandLevel: 0,
        ...parsedFrontMatter.data.markmap,
      };

      markmap.setData(root, options);
      markmap.fit();

      return () => {
        markmap.destroy();
      };
    }
  }, [markdown]);

  return (
    <svg
      ref={refSvg}
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    />
  );
};
