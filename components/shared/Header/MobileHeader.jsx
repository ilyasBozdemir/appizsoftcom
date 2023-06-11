import React from "react";
import { HamburgerIcon, CloseIcon, Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = ({ lang, menuItems }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Flex
        as="nav"
        bg="black"
        color="#fff"
        p={5}
        justify="space-between"
        align="center"
        zIndex={500}
        pos={"relative"}
        w={"100%"}
      >
        <Box
          onClick={() => {
            router.push(`/${lang}?ref=mobile-logo`);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <Image src={"/logo.svg"} width={150} height={30} />
        </Box>

        <IconButton
          icon={
            isOpen ? (
              <Icon as={CloseIcon} fontSize={20} />
            ) : (
              <Icon as={HamburgerIcon} fontSize={35} />
            )
          }
          onClick={onToggle}
          size="md"
          aria-label="Toggle Navigation"
          bg="transparent"
          color="white"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        />
      </Flex>

      {isOpen && (
        <Box
          zIndex={499}
          pos={"absolute"}
          top={90}
          left={0}
          bg={"#fff"}
          w={"full"}
          h={"full"}
        >
          <>
            {menuItems.map((menu) => (
              <React.Fragment key={menu.title}>
                <MenuLink title={menu.title} href={menu.href} lang={lang} />
              </React.Fragment>
            ))}
            <Button
              color="#fff"
              bg={"#54bec3"}
              _hover={{ bg: "#6ebec2" }}
              size="md"
              onClick={() => {
                router.push(`${lang}/teklif-al`);
              }}
              fontSize={"sm"}
              fontFamily={"Poppins"}
            >
              Teklif Al
            </Button>
          </>
        </Box>
      )}
    </>
  );
};

const MenuLink = ({ title, href ,lang}) => {
  return (
    <Link href={`/${lang}/${href}`} passHref>
      <Text
        cursor="pointer"
        className={"flex align-center justify-between p-2"}
        fontFamily={"Verdana"}

      >
        {title}
      </Text>
      <Divider />
    </Link>
  );
};

export default Header;