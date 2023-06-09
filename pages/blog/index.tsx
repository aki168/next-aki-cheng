import { NextPage } from "next";
import { Post } from "../../interfaces/post";
import Layout from "../../components/Layout";
import { Container } from "@chakra-ui/react";

type Props = {
  allPosts: Post[];
};

const Blog: NextPage<Props> = ({ allPosts }) => {
  return (
    <Layout>
      <Container>
        -INTRO
        -HERO POST
        -MORE POSTS
      </Container>
    </Layout>
  );
};

export default Blog;
