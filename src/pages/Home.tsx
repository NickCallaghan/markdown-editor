import React from "react";
import { Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { RoundedBox } from "../components/Box";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <RoundedBox>
        <Heading as="h1">Welcome to the Markdown Editor</Heading>
        <Button my="3" colorScheme="green" onClick={() => navigate("/editor")}>
          Sign In
        </Button>
      </RoundedBox>
    </Layout>
  );
};
