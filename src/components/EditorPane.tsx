import React from "react";
import { Heading, Textarea } from "@chakra-ui/react";
import { RoundedBox } from "../components/Box";

interface EditorPaneProps {
  data: string;
  setData: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  id: string;
}

export const EditorPane: React.FC<EditorPaneProps> = ({
  id,
  data,
  setData,
}) => {
  return (
    <RoundedBox>
      <Heading as="h1" my="6">
        Editing{`: ${id}`}
      </Heading>
      <Textarea
        bgColor="gray.700"
        color="white"
        value={data}
        minH="50vh"
        onChange={setData}
      />
    </RoundedBox>
  );
};
