import {
  Box,
  Center,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  Button,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import SosyalMediaIcon from "../SosyalMediaIcon";

import Logo from "../Logo";
import { site } from "../../../constants/site";

import LanguageSwitcher from "../../LanguageSwitcher";
import { menuList } from "../../../constants/menuList";

const FooterTopContent = () => {
  const router = useRouter();
  const isTeklifAlPage =
    router.asPath.endsWith("/teklif-al") ||
    router.pathname.endsWith("/teklif-al");

  const isAboutPage =
    router.asPath.endsWith("/about-appizsoft") ||
    router.pathname.endsWith("/about-appizsoft");

  return (
    <>
      {isTeklifAlPage | isAboutPage ? (
        <></>
      ) : (
        <Center>
          <Stack
            as={Box}
            bgColor={"transparent"}
            bgImage={
              "radial-gradient(at bottom left, #12acff 55%, #0c85c7 100%)"
            }
            boxShadow={"0px 2px 10px 0px rgba(18, 172, 255, 0.41)"}
            p={"64px"}
            spacing={4}
            borderRadius={"15px"}
            w={{ base: "95%", md: "auto" }}
          >
            <Flex direction={"column"}>
              <Text color={"#fff"} fontSize={18} fontFamily={"Inter"}>
                Biz senin için buradayız
              </Text>
              <Text color={"#fff"} fontSize={30} fontFamily={"Inter"} as={"h4"}>
                Fikir aşamasından tasarıma, koddan teslimata.
              </Text>

              <Text color={"#fff"} w={{ base: "", md: 650 }} fontSize={18}>
                Her büyüklükteki ekip için kullanıcı merkezli uygulamalar
                geliştiren tam hizmet veren bir dijital ajansız.
                Teknolojilerimiz, ortaklarımız için heyecan verici yeni
                olanaklar yaratıyor.
              </Text>
            </Flex>
            <Box>
              <Button
                color="white"
                _hover={{color:'#eee'}}
                variant="outline"
                fontSize={"md"}
                onClick={() => {
                  router.push(`/tr/get-a-quote`);
                }}
              >
                Bizimle bir proje başlatın 🚀
              </Button>
            </Box>
          </Stack>
        </Center>
      )}
    </>
  );
};

const FooterContent = () => {
  const router = useRouter();
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  let yearText;
  if (currentYear > startYear) {
    yearText = `${startYear}-${currentYear}`;
  } else {
    yearText = `${startYear}`;
  }

  const FooterData = () => {
    return <Text> {currentYear} Appizsoft &copy; Tüm Hakları Saklıdır</Text>;
  };

  const getChildrenByTitle = (items, title) => {
    const item = items.find((item) => item.title === title);
    return item ? item.children : [];
  };

  const institutionalMenu = getChildrenByTitle(menuList, "Kurumsal");

  const contractMenu = [
    {
      title: "Gizlilik Politikası",
      href: "/gizlilik-politikasi",
    },
    {
      title: "Çerez Politikası",
      href: "/cerez-politikasi",
    },
  ];
  const serviceMenu = [
    {
      title: "Özel Yazılım Geliştirme",
      href: "/service/ozel-yazilim-gelistirme",
    },
    {
      title: "E-ticaret Yazılımı",
      href: "/service/e-ticaret-yazilimi",
    },
    {
      title: "Oyun Tasarım",
      href: "/service/oyun-tasarim",
    },
    {
      title: "Prodüksiyon & Tasarım",
      href: "/service/produksiyon-tasarim",
    },
  ];
  return (
    <Center
      bgImage={"linear-gradient(220deg, #38435B 46%, #495368 100%)"}
      color={useColorModeValue("gray.300", "gray.300")}
    >
      <Box as={Stack} p={8}>
        <Flex
          p={20}
          gap={15}
          direction={{ base: "column", md: "row" }}
          wrap={"wrap"}
        >
          <Center
            as={Flex}
            direction={"column"}
            itemScope
            itemType="http://schema.org/Organization"
          >
            <Logo isLink={false} s={{ h: 125, w: 250 }} />

            <Box
              mt={2}
              pt={".5rem"}
              itemScope
              itemType="http://schema.org/ContactPoint"
            >
              <Text
                fontSize={15}
                fontFamily={"montserrat-extra-bold"}
                itemProp="telephone"
              >
                <a itemProp="email" href={`mailto:${site.telephone}`}>
                  {site.telephone}
                </a>
              </Text>
            </Box>
            <Box pt={".5rem"}>
              <Text
                fontSize={15}
                fontFamily={"montserrat-extra-bold"}
                itemScope
                itemType="http://schema.org/ContactPoint"
              >
                <a itemProp="email" href={`mailto:${site.mailAddress}`}>
                  {site.mailAddress}
                </a>
              </Text>
            </Box>

            <Box
              as={Flex}
              pt={".5rem"}
              itemScope
              itemType="https://schema.org/PostalAddress"
              fontSize={15}
              fontFamily={"montserrat-extra-bold"}
              gap={3}
            >
              <Text as={"span"} itemProp="streetAddress">
                {site.address.streetAddress}
              </Text>
              <Text as={"span"} itemProp="addressLocality">
                {site.address.addressLocality}
              </Text>
              <Text as={"span"} itemProp="addressRegion">
                {site.address.addressRegion}
              </Text>
              <Text as={"span"} itemProp="postalCode">
                {site.address.postalCode}
              </Text>
              <Text as={"span"} itemProp="addressCountry">
                {site.address.addressCountry}
              </Text>
            </Box>
            <Stack mt={5}>
              <SosyalMediaIcon />
            </Stack>
          </Center>

          <Flex gap={5}>
            <SiteNavigationElement
              header={"Kurumsal"}
              menus={institutionalMenu}
            />
          </Flex>
          <Flex gap={5}>
            <SiteNavigationElement
              header={"Sözleşmeler"}
              menus={contractMenu}
            />
          </Flex>

          <Flex gap={5}>
            <SiteNavigationElement header={"Hizmetler"} menus={serviceMenu} />
          </Flex>
        </Flex>

        <Divider />

        <Flex
          justifyContent={{ base: "center", md: "space-between" }}
          direction={{ base: "column-reverse", md: "row" }}
          px={20}
          gap={3}
        >
          <FooterData />
          <HStack direction={"row"}>
            <Text>Select Language: </Text>
            <LanguageSwitcher lang={"tr"} />
          </HStack>
        </Flex>
      </Box>
    </Center>
  );
};

const SiteNavigationElement = ({ header, menus }) => {
  const router = useRouter();
  return (
    <>
      <Flex
        ml={"50px"}
        direction={"column"}
        itemscope="itemscope"
        itemtype="https://www.schema.org/SiteNavigationElement"
      >
        <Text fontWeight={"bold"} fontSize={18}>
          {header}
        </Text>

        <Flex mt={5} gap={2} direction={"column"}>
          {menus.map((menu) => (
            <Text
              onClick={() => {
                router.push("/tr/" + menu.href);
              }}
              cursor={"pointer"}
            >
              {menu.title}
            </Text>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

const Footer = () => {
  return (
    <Flex direction={"column"} as="footer" pos={"relative"}>
      <Box pos={"relative"} style={{ top: "75px", zIndex: 2 }}>
        <FooterTopContent />
      </Box>
      <Box pos={"relative"} style={{ zIndex: 1 }}>
        <FooterContent />
      </Box>
    </Flex>
  );
};

export default Footer;
