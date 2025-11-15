"use client";

import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={8}>
      <Heading mb={4}>Welcome to Chakra UI + Next.js</Heading>

      <Text mb={6}>
        これは Chakra UI が Next.js (App Router) 上でちゃんと動いてるサンプルページです。
      </Text>

      <Button colorScheme="teal" size="lg">
        Click Me
      </Button>
    </Box>
  );
}
