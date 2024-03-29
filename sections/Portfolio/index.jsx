import {
  chakra,
  Flex,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "../../constants/projects";
import Link from "next/link";
const defaultWidth = 675; //1000
const defaultHeight = 386; //667
const baseImagePath = "https://appizsoft-static-api.vercel.app";


import "swiper/css";
import "swiper/css/autoplay";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <Container p={{ base: 9, md: 10 }} maxW="7xl">
      <chakra.h3
        fontSize={{ base: 19, md: 27 }}
        fontWeight="bold"
        mb={20}
        textAlign="center"
        color={useColorModeValue("blackAlpha.800", "blackAlpha.700")}
        fontFamily={'roboto'}
      >
        Portfolyo
      </chakra.h3>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        alignSelf="start"
        placeItems={"center"}
        spacing={10}
        mb={4}
      >
        {projects
          .slice(
            0,
            useBreakpointValue({
              base: 4,
              md: 6,
              lg: 8,
            })
          )
          .map((p, index) => (
            <Flex
              key={p.id}
              direction={"column"}
              cursor={"pointer"}
              className="item"
              variants={item}
              gap={3}
            >
              <Image
                src={`${baseImagePath}/${p.portfolio}`}
                alt={p.name}
                height={p.portfolioSize.h}
                width={p.portfolioSize.w}
                style={{
                  borderRadius: "15px",
                }}
              />
              <Text
                fontFamily={"monospace"}
                textAlign={"center"}
                fontWeight={"semibold"}
                fontSize={{
                  base: 14,
                  md: 16,
                  lg: 18,
                }}
               
              >
                {p.name}
              </Text>
            </Flex>
          ))}
      </SimpleGrid>

      <chakra.div
        textAlign="center"
        color={useColorModeValue("gray.800", "gray.800")}
      >
        <Link href={"/portfolio"} passHref>
          <Text fontSize={{ base: 16, md: 22 }} cursor={"pointer"}>
            Tüm çalışmaları görüntüle
          </Text>
        </Link>
      </chakra.div>
    </Container>
  );
}
