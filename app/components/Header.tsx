"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 60, 1);
  const opacity = 1 - progress;
  const scale = 1 - progress * 0.2;

  return (
    <Box
      as="header"
      bg="white"
      transition="background 0.2s"
    >
      <Flex
        direction="column"
        align="center"
        py="4"
        px="4"
        style={{
          opacity,
          transform: `scale(${scale})`,
          transition: "opacity 0.2s linear, transform 0.2s linear",
        }}
      >
        {/* Chakra Image → ネイティブimg に変更 */}
        <img
          src="/images/ui/logo.svg"
          alt="Almond Logo"
          style={{ width: "320px", height: "auto" }}
        />

        <Text fontSize="xs" color="#FC8FAC" mt="1">
          無料でエロゲができるサイト
        </Text>
      </Flex>
    </Box>
  );
}
