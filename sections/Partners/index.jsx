import {
  Box,
  Flex,
  SimpleGrid,
  Divider,
  Heading,
  Center,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-scroll";

function PartnersSection() {
  const defaultWidth = 175;
  const defaultHeight = 75;
  const [references, setReferences] = useState([
    {
      id: "openAI",
      logo: "/images/partners/openAI.svg",
      logoSize: {
        w: 175,
        h: 75,
      },
    },
    {
      id: "google",
      logo: "/images/partners/google.svg",
      logoSize: {
        w: 175,
        h: 75,
      },
    },
    {
      id: "meta",
      logo: "/images/partners/meta.svg",
      logoSize: {
        w: 150,
        h: 50,
      },
    },
  ]);
  return (
    <>
      <Flex justifyContent={"center"} direction={"column"} gap={5}>
        <Center>
          <Flex direction={"column"} justifyContent={"center"} gap={3}>
            <Heading as="h2" fontSize={24} pos="relative">
              Partnerler
            </Heading>
          </Flex>
        </Center>

        <Center>
          <SimpleGrid
            columns={{
              base: 2,
              sm: 3,
              md: 4,
              lg: 5,
            }}
            gap={5}
          >
            {references.map((ref) => (
              <div key={ref.id}>
                <Image
                  src={ref.logo}
                  alt={`Reference ${ref.id}`}
                  width={ref.logoSize.w}
                  height={ref.logoSize.h}
                  mx={2}
                  opacity={0.7}
                  style={{ objectFit: "contain", filter: "saturate(2)" }}
             
                />
              </div>
            ))}
          </SimpleGrid>
        </Center>
      </Flex>
    </>
  );
}

export default PartnersSection;
