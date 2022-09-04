import React from "react";
import { Heading } from "@chakra-ui/react";
import { RoundedBox } from "./Box";

interface PreviewPaneProps {
  data: string;
}

export const PreviewPane: React.FC<PreviewPaneProps> = ({ data }) => {
  return (
    <RoundedBox>
      <Heading>Preview</Heading>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </RoundedBox>
  );
};
