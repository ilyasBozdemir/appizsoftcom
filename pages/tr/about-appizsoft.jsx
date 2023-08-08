import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import Head from "next/head";
import { site } from "../../constants/site";



const AboutUsCTA = () => {
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
                  <Text fontSize={65}>Hakkımzda</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Hakkımzda"} />
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </>
        )}

        {isMobile && (
          <Box mx={3}>
            <PagesBreadcrumb currentPage={"Hakkımzda"} />
          </Box>
        )}
      </Flex>
    </>
  );
};


const AboutUsContent = () => {
  return (
    <>
      <Box >
       
      </Box>
    </>
  );
};

function AboutUsPage() {
  const publisher = `AppizSoft`;
  const title = `AppizSoft Hakkında • AppizSoft`;
  const desc = `AppizSoft olarak, teknoloji ve yaratıcılığı bir araya getiriyoruz. Müşterilerimize en iyi çözümleri sunarak işlerini büyütmelerine yardımcı oluyoruz.`;
  
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

      <main>
        <AboutUsCTA />
        <AboutUsContent />
      </main>
    </>
  );
}

export default AboutUsPage;
