import React from "react";
import { Heading, Button } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { RoundedBox } from "../components/Box";
import { useParams } from "react-router-dom";

const docs = [
  { id: "552510f8-f157-4c5a-8d8d-5ad616da15c6", name: "Document 1" },
  { id: "063d0213-e314-484a-8360-12cd51fd4e78", name: "Document 2" },
];

export const Editor: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  console.log({ params });
  return (
    <Layout>
      <RoundedBox>
        <Heading as="h1">Editor</Heading>
        <nav>
          <ul>
            {docs.map((dx, i) => {
              return (
                <li>
                  <Link to={`/editor/${dx.id}`}>{dx.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button
          my="3"
          colorScheme="green"
          onClick={() => navigate("/editor/1234")}
        >
          New
        </Button>
      </RoundedBox>
    </Layout>
  );
};
