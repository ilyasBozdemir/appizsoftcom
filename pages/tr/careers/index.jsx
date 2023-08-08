import {
  Button,
  Box,
  Center,
  Flex,
  Text,
  Container,
  Heading,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ListItem,
  Icon,
  List,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PagesBreadcrumb from "../../../components/shared/PagesBreadcrumb";
import Head from "next/head";
import { site } from "../../../constants/site";
import { ArrowForwardIcon, CheckCircleIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { careers } from "../../../constants/careers";

function CareersPage() {
  return (
    <>
      <Head></Head>

      <Flex direction={"column"} gap={3}>
        <CareersCTA />
        <CareersContent />
      </Flex>
    </>
  );
}

const CareersCTA = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // İlk renderda ekran boyutuna göre kontrol yapılır
    handleWindowSize();

    // Ekran boyutu değiştiğinde kontrol yapılır
    window.addEventListener("resize", handleWindowSize);

    // Temizleme fonksiyonu
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  const handleWindowSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  return (
    <>
      <Flex mt={4} direction={"column"}>
        {!isMobile && (
          <>
            <Flex
              as="section"
              h={"350px"}
              bgGradient="linear(to-l, #667eea, #54BEC3)"
              w="100%"
              color="white"
              justify={"center"}
            >
              <Center>
                <Flex direction={"column"}>
                  <Text fontSize={65}>Kariyer</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Kariyer"} />
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </>
        )}

        {isMobile && (
          <Box mx={3}>
            <PagesBreadcrumb currentPage={"Kariyer"} />
          </Box>
        )}
      </Flex>
    </>
  );
};

const CareerCard = ({
  title,
  description,
  location,
  requirements,
  pageLoc,
}) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <AccordionButton
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          textAlign="left"
        >
          <Box flex="1" textAlign="left">
            <Heading as="h3" fontSize="xl" mb={2}>
              {title}
            </Heading>
            <Text>{description}</Text>
            <Text mt={2} color="gray.500">
              {location}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Flex direction={"column"}>
            <List>
              {requirements.map((requirement, index) => (
                <React.Fragment key={index}>
                  <ListItem p={1}>
                    <Flex align="center">
                      <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                      {requirement}
                    </Flex>
                  </ListItem>

                  {index === requirements.length - 1 && (
                    <Center>
                      <Link
                        href="/tr/careers/[position]"
                        as={`/tr/careers/` + pageLoc}
                        shallow={true}
                        passHref
                      >
                        <Button
                          mt={4}
                          variant="outline"
                          colorScheme="blue"
                          size="lg"
                        >
                          Şimdi Katıl
                        </Button>
                      </Link>
                    </Center>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const HiringProcess = () => {
  return (
    <Box my={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        İşe Alım Süreci
      </Text>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                İş İlanı ve Başvuru
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Açık pozisyonlarımızı ve iş ilanlarını sitemizde yayınlıyoruz.
              İlgilendiğiniz pozisyon için başvurunuzu online olarak
              yapabilirsiniz.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Ön Değerlendirme
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Başvurunuz incelendikten sonra, ön değerlendirme aşaması için
              sizinle iletişime geçebiliriz. Bu aşamada daha fazla bilgi almak
              amacıyla bir görüşme yapılabilir.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Mülakatlar
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Uygun adaylarla mülakatlar düzenleriz. Mülakatlarda
              yeteneklerinizi, deneyiminizi ve uyumunuzu değerlendirme
              fırsatımız olur.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        {/* Diğer aşamaları buraya ekleyebilirsiniz */}
      </Accordion>
    </Box>
  );
};

const JoinUsSection = () => {
  const router = useRouter();
  return (
    <Box
      my={10}
      py={12}
      px={6}
      bgGradient="linear(to-l, #667eea, #764ba2)"
      borderRadius="lg"
      color="white"
      shadow={"md"}
      textAlign="center"
      boxShadow="xl"
    >
      <Heading as="h2" size="2xl" mb={4}>
        Daha Büyük Bir Geleceği Şekillendirin
      </Heading>
      <Text fontSize="xl" mb={6}>
        Ekibimize katılarak inovasyonun bir parçası olmanın ve geleceği
        şekillendirmenin heyecanını yaşayın. Yenilikçi projelerde yer alarak
        sınırları zorlayın ve teknoloji dünyasında yeni ufuklara açılın.
        Birlikte çalışarak fark yaratın, büyüyen ekibimizde yerinizi alın ve
        geleceğin teknolojilerini bugünden keşfedin. Kendi yeteneklerinizi
        geliştirirken, küresel ölçekte projelerde yer alma fırsatını yakalayın.
        Bizimle bir adım atın, çünkü geleceğe beraber yürümek istiyoruz
      </Text>
      <Button
        size="lg"
        rightIcon={<ArrowForwardIcon />}
        colorScheme="white"
        variant={"outline"}
        onClick={() => {
          router.push("/tr/careers/[position]", "/tr/careers/join-us", {
            shallow: true,
          });
        }}
      >
        Özgeçmişinizi bırakın
      </Button>
    </Box>
  );
};

const EmployeeBenefits = () => {
  const benefits = [
    "Rekabetçi maaş ve yan haklar",
    "Esnek çalışma saatleri",
    "Kapsamlı sağlık sigortası",
    "Kariyer gelişim fırsatları",
    "Uzaktan çalışma imkanı",
    "Tatil ve izin avantajları",
    "Sosyal etkinlikler ve eğlenceli çalışma ortamı",
  ];

  return (
    <Box my={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Çalışan Avantajları ve İmkanları
      </Text>
      <UnorderedList>
        {benefits.map((benefit, index) => (
          <ListItem key={index}>
            <Text>{benefit}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

const ContactInfo = () => {
  return <Box my={6}></Box>;
};
const OpenPositions = () => {
  return (
    <>
      <Center mb={5} mt={2}>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading as="h2" fontSize={24} pos="relative">
            Açık Pozisyonlar
          </Heading>
        </Flex>
      </Center>
      <Divider />

      <Flex direction={"column"} gap={5} mt={5}>
        {careers.map((career, index) => (
          <CareerCard
            key={index}
            title={career.title}
            description={career.description}
            location={career.location}
            pageLoc={career.pageLoc}
            requirements={career.requirements}
          />
        ))}
      </Flex>
    </>
  );
};

const CareersContent = () => {
  const publisher = `AppizSoft`;
  const title = `Kariyer Fırsatları - Hayalinizdeki Pozisyon İçin Başvurun • AppizSoft`;
  const desc = `AppizSoft olarak, büyüyen ekibimize katılarak kariyerinizi şekillendirin. Backend geliştirici, frontend geliştirici, mobil uygulama geliştirici ve daha birçok pozisyon için fırsatları inceleyin.`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="publisher" content={publisher} />
        <meta name="robots" content={"index, follow"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${site.baseUrl}/tr`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
      </Head>

      <Container maxW="8xl" p={{ base: 5, md: 10 }}>
        <JoinUsSection />

        <OpenPositions />

        <EmployeeBenefits />
        <HiringProcess />
        <ContactInfo />
      </Container>
    </>
  );
};

export default CareersPage;
