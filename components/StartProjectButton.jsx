import { Button, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
function StartProjectButton() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const lang = `tr`;
  return (
    <>
      <Button
        onClick={() => {
          router.push(lang + "/get-a-quote");
        }}
        w={["full", , "auto"]}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        px={10}
        py={7}
        fontWeight="bold"
        rounded="lg"
        borderRadius={"20px"}
        shadow="md"
        rightIcon={<BiChevronRight />}
        variant={"outline"}
        colorScheme="black"
      >
        Proje Başlat
      </Button>
    </>
  );
}

export default StartProjectButton;
