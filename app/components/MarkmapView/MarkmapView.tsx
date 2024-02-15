"use client";

import React, { useRef, useEffect } from "react";
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";
import matter from "gray-matter";
import { Button } from "@mantine/core";
import Link from "next/link";

const transformer = new Transformer();

interface Props {
  markdown: string;
  compressed: string;
}

export const MarkmapView = ({ markdown, compressed }: Props) => {
  const refSvg = useRef<SVGSVGElement>(null);

  const parsedFrontMatter = matter(markdown);

  console.log("parsedFrontMatter.data.default", parsedFrontMatter.data.default);

  const homeButtonHref =
    parsedFrontMatter.data.default == true ? `/?default=${compressed}` : "/";

  useEffect(() => {
    if (refSvg.current) {
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
  }, [markdown, parsedFrontMatter]);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Link href={homeButtonHref}>
        <Button
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 100,
          }}>
          Home
        </Button>
      </Link>
      <svg
        ref={refSvg}
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      />
    </div>
  );
};
