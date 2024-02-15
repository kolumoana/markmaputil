import matter from "gray-matter";

export const convertToTitle = (markdown: string): string => {
  const { content } = matter(markdown);
  const trimmedContent = content.trim();

  if (!trimmedContent) return "";

  const firstLine = trimmedContent.split("\n")[0];
  return firstLine.startsWith("#")
    ? firstLine.replace(/^#+\s*/, "").trim()
    : firstLine.trim();
};

export const convertToDescription = (markdown: string): string => {
  const { content } = matter(markdown);
  const trimmedContent = content.trim();

  if (!trimmedContent) return "";

  const description = trimmedContent
    .split("\n")
    .slice(1)
    .filter((line) => !line.trim().includes("["))
    .map((line) => line.replace(/^- /, "").replace(/#/g, "").replace(/-/g, ""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return description.length > 197
    ? `${description.slice(0, 197)}...`
    : description;
};
