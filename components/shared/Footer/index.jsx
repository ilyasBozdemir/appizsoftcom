import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Center,
  useTheme,
  useColorMode,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import Logo from "../Logo";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import SocialMediaIcon from "../SocialMediaIcon";

const ListHeader = ({ children }) => {
  return (
    <Text
      fontWeight={"500"}
      fontSize={"lg"}
      mb={2}
      textDecoration={"underline"}
    >
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  const googlePartnersUrl = `#`;

  return (
    <Flex direction={"column"}>
      <Box
        bgImage={"linear-gradient(220deg, #38435B 46%, #495368 100%)"}
        color={useColorModeValue("white", "gray.200")}
        w="100vw"
        h="auto"
      >
        <Flex direction={"column"} justify={"center"} justifyContent={"center"}>
          <Container as={Stack} maxW={"8xl"} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
              <Stack align={"flex-start"}>
                <ListHeader>Kurumsal</ListHeader>
                <Link href={"#"}>Hakkımızda</Link>
                <Link href={"#"}>Kariyer</Link>
                <Link href={"#"}>Bize Ulaşın</Link>
                <Link href={"#"}>Partnerlerimiz</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Hizmetler</ListHeader>
                <Link href={"#"}>Yazılım Hizmetlerimiz</Link>
                <Link href={"#"}>Dijital Hizmetlerimiz</Link>
                <Link href={"#"}>E-ticaret Çözümleri</Link>
              </Stack>
              {/*

<Stack align={"flex-start"}>
                <ListHeader>Yazılım Hizmetlerimiz</ListHeader>
                <Link href={"#"}>Web Tasarım ve Geliştirme</Link>
                <Link href={"#"}>Mobil Uygulama Geliştirme</Link>
                <Link href={"#"}>Veritabanı Yönetimi</Link>
                <Link href={"#"}>Bulut Bilişim Hizmetleri</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Dijital Hizmetlerimiz</ListHeader>
                <Link href={"#"}>Grafik Tasarım</Link>
                <Link href={"#"}>Prodüksiyon Hizmetleri</Link>
                <Link href={"#"}>Sosyal Medya Yönetimi</Link>
                <Link href={"#"}>Dijital Pazarlama</Link>
                <Link href={"#"}>SEO (Arama Motoru Optimizasyonu)</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>E-ticaret Çözümleri</ListHeader>
                <Link href={"#"}>Sanal Mağaza Oluşturma</Link>
                <Link href={"#"}>Ödeme Entegrasyonu</Link>
                <Link href={"#"}>Envanter Yönetimi</Link>
                <Link href={"#"}>Müşteri İlişkileri Yönetimi</Link>
              </Stack>

*/}

              <Stack align={"flex-start"}>
                <ListHeader>Blog / RSS</ListHeader>
                <Link href={"#"}>Blog</Link>
                <Link href={"#"}>RSS Aboneliği</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Legal</ListHeader>
                <Link href={"#"}>Çerez Politikası</Link>
                <Link href={"#"}>Gizlilik Politikası</Link>
                <Link href={"#"}>KVKK</Link>
                <Link href={"#"}>Satış Sözleşmesi</Link>
                <Link href={"#"}>Gizlilik Sözleşmesi</Link>
              </Stack>
            </SimpleGrid>
          </Container>

          <Box py={10} display={"none"}>
            <Link
              href={googlePartnersUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://www.gstatic.com/partners/badge/images/2022/PartnerBadgeClickable.svg"
                alt="google-partner"
                width={80}
                height={80}
              />
            </Link>
          </Box>

          <Box py={10}>
            <Flex
              align={"center"}
              _before={{
                content: '""',
                borderBottom: "1px solid",
                borderColor: useColorModeValue("gray.200", "gray.200"),
                flexGrow: 1,
                mr: 8,
              }}
              _after={{
                content: '""',
                borderBottom: "1px solid",
                borderColor: useColorModeValue("gray.200", "gray.200"),
                flexGrow: 1,
                ml: 8,
              }}
            >
              <Logo isLink={false} s={{ h: 125, w: 250 }} />
            </Flex>
            <Text pt={6} fontSize={"sm"} textAlign={"center"}>
              <SocialMediaIcon />
            </Text>
            <Text pt={6} fontSize={"sm"} textAlign={"center"}>
              <FooterData />
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

const FooterTopContent = () => {
  const router = useRouter();
  const isTeklifAlPage =
    router.asPath.endsWith("/get-a-quote") ||
    router.pathname.endsWith("/get-a-quote");

  const isAboutPage =
    router.asPath.endsWith("/about-appizsoft") ||
    router.pathname.endsWith("/about-appizsoft");

  const theme = useTheme();

  const { colorMode } = useColorMode();

  const primaryColor =
    colorMode === "dark"
      ? theme.colors.primaryD["100"]
      : theme.colors.primary["100"];

  const primaryColor2 =
    colorMode === "dark"
      ? theme.colors.primaryD["200"]
      : theme.colors.primary["200"];

  const boxShadow = useBreakpointValue({
    base: theme.shadows.sm,
    sm: theme.shadows.md,
    md: theme.shadows.lg,
    lg: theme.shadows.xl,
    xl: theme.shadows["2xl"],
  });

  return (
    <>
      {isTeklifAlPage | isAboutPage ? (
        <></>
      ) : (
        <Flex>
          <Center>
            <Stack
              as={Box}
              bgColor={"transparent"}
              bgImage={`radial-gradient(at bottom left, ${primaryColor} 55%, ${primaryColor2}  100%)`}
              boxShadow={boxShadow}
              p={"64px"}
              spacing={4}
              borderRadius={"15px"}
              w={{ base: "95%", md: "auto" }}
            >
              <Flex direction={"column"}>
                <Text
                  color={"white"}
                  fontSize={18}
                  fontFamily={"Inter"}
                  data-aos="fade-down"
                >
                  Biz senin için buradayız
                </Text>
                <Text
                  color={"white"}
                  fontSize={30}
                  fontFamily={"Inter"}
                  as={"h4"}
                  data-aos="fade-up"
                >
                  Fikir aşamasından tasarıma, koddan teslimata.
                </Text>

                <Text
                  color={"white"}
                  w={{ base: "", md: 650 }}
                  fontSize={18}
                  display={{ base: "none", lg: "initial" }}
                >
                  Her büyüklükteki ekip için kullanıcı merkezli uygulamalar
                  geliştiren tam hizmet veren bir dijital ajansız.
                  Teknolojilerimiz, ortaklarımız için heyecan verici yeni
                  olanaklar yaratıyor.
                </Text>
              </Flex>
              <Box>
                <Button
                  colorScheme={colorMode === "dark" ? "white" : "messenger"}
                  rounded={"full"}
                  p={3}
                  variant="outline"
                  fontSize={"md"}
                  onClick={() => {
                    router.push(`/tr/get-a-quote`);
                  }}
                  data-aos="fade-right"
                >
                  Bizimle bir proje başlatın 🚀
                </Button>
              </Box>
            </Stack>
          </Center>
        </Flex>
      )}
    </>
  );
};

const FooterData = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  let yearText;
  if (currentYear > startYear) {
    yearText = `${startYear}-${currentYear}`;
  } else {
    yearText = `${startYear}`;
  }
  return <Text> {currentYear} Appizsoft &copy; Tüm Hakları Saklıdır</Text>;
};
