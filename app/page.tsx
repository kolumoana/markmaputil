"use client";

import {
  AppShell,
  Container,
  Notification,
  Space,
  Textarea,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { compressString, decompressString } from "./compression/compression";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const [value, setValue] = useState("");
  const [compressed, setCompressed] = useState("");

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

          <Title order={1} style={{ fontSize: "5rem", fontWeight: 700 }}>
            mindmap util
          </Title>

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
      </AppShell.Main>
    </AppShell>
  );
}
