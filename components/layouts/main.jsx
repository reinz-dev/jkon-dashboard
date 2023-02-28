import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="rdwnslmn homepage" />
        <meta name="author" content="Ridwan Sulaeman" />
        <meta name="author" content="rdwnslmn" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <title>Finance</title>
      </Head>

      <Container maxW="100%">{children}</Container>
    </Box>
  );
};

export default Main;
