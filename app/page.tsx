"use client";

import { Container, Notification, Space, Textarea, Title } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { compressString } from "./compression/compression";

export default function HomePage() {
  const [value, setValue] = useState("");
  const [compressed, setCompressed] = useState("");

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
    <Container ta="center">
      <Space h={20} />

      <Title order={1} style={{ fontSize: "5rem", fontWeight: 700 }}>
        mindmap util
      </Title>

      <Space h={20} />

      {compressed && (
        <Link href={`/map/${compressed}`} style={{ textDecoration: "none" }}>
          <Notification title="Compressed URL">
            {window.location.href + "map/" + compressed}
          </Notification>
        </Link>
      )}

      <Space h={20} />

      <Textarea
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder="Write your markdown here"
        autosize
        style={{ width: "100%" }}
      />

      <Space h={20} />
    </Container>
  );
}
