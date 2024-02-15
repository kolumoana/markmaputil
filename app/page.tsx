"use client";

import {
  AppShell,
  Container,
  Notification,
  Space,
  Textarea,
  Title,
  em,
  Box,
  Center,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { compressString, decompressString } from "./compression/compression";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const [value, setValue] = useState("");
  const [compressed, setCompressed] = useState("");

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  const searchParams = useSearchParams();

  useEffect(() => {
    const defaultValue = searchParams.get("default") || "";
    if (defaultValue === "") {
      return;
    }

    const set = async () => {
      const raw = await decompressString(defaultValue);
      setValue(raw);
    };
    set();
  }, [searchParams]);

  useEffect(() => {
    if (value === "") {
      setCompressed("");
      return;
    }
    const set = async () => {
      const compressed = await compressString(value);
      setCompressed(compressed);
    };
    set();
  }, [value]);

  return (
    <AppShell header={{ height: 250 }} padding="md">
      <AppShell.Header withBorder={false}>
        <Container ta="center">
          <Space h={20} />

          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100px", // Boxの高さを100pxに設定
            }}>
            <Title
              order={1}
              style={{ fontSize: isMobile ? "2rem" : "5rem", fontWeight: 700 }}>
              mindmap util
            </Title>
          </Box>
          <Space h={20} />

          {compressed && (
            <Link
              href={`/map/${compressed}`}
              style={{ textDecoration: "none" }}>
              <Notification title="Compressed URL" withCloseButton={false}>
                {window.location.origin + "/map/" + compressed}
              </Notification>
            </Link>
          )}
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container bg="var(--mantine-color-blue-light)" p="md">
          <Textarea
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            placeholder="Write your markdown here"
            autosize
            minRows={2}
            maxRows={15}
          />
        </Container>
        <Space h={20} />
        <Center>
          <a
            href="https://github.com/kolumoana/mindmaputil"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontSize: "2rem",
            }}>
            😺
          </a>
          <Space w={20} />
          <a
            href="https://www.kolumoana.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontSize: "2rem",
            }}>
            🌐
          </a>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}
