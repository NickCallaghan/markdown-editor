import { Heading, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { EditorPane } from "../components/EditorPane";
import { PreviewPane } from "../components/PreviewPane";
import { snarkdownEnhanced } from "../until";

export const Editing = () => {
  const params = useParams();
  const [markdownData, setMarkdownData] = useState("");
  const [htmlData, setHtmlData] = useState("");

  const handleChange = (e: any) => {
    setMarkdownData(e.target.value);
    let html = snarkdownEnhanced(markdownData);
    setHtmlData(html);
  };

  if (!params.id) return null;
  return (
    <Layout>
      <EditorPane id={params.id} data={markdownData} setData={handleChange} />
      <PreviewPane data={htmlData} />
    </Layout>
  );
};
