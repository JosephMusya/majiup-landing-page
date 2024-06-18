import React from "react";
import Markdown from "react-markdown";
import resources from "./md/index.md";

export default function Resources() {
  return (
    <div style={{ minHeight: "65dvh", padding: "2rem" }}>
      <Markdown>{resources}</Markdown>
    </div>
  );
}
