import React, { useEffect, useState } from "react";
import { detectBrowserLanguage } from "../../lib/detectBrowserLanguage";
import { Box, Flex, Container } from "@chakra-ui/react";

import WindowTitleChanger from "../../components/shared/WindowTitleChanger";
import dynamic from "next/dynamic";

import Cta from "../../sections/Cta";
import Head from "next/head";

const LazyOurServices = dynamic(() => import("../../sections/OurServices"));

const LazyPortfolio = dynamic(() => import("../../sections/Portfolio"));
const LazyOurReferences = dynamic(() => import("../../sections/OurReferences"));

const LazyOurTechnologies = dynamic(() =>
  import("../../sections/OurTechnologies")
);

const LazyWhyChooseUs = dynamic(() => import("../../sections/WhyChooseUs"));
const LazyOurWorkProcess = dynamic(() =>
  import("../../sections/OurWorkProcess")
);
const LazyBlog = dynamic(() => import("../../sections/Blog"));
const LazyTrustedByDev = dynamic(() => import("../../sections/TrustedByDev"));


//

import { site } from "../../constants/site";

function IndexPage() {
  const [lang, setLang] = React.useState("");
  useEffect(() => {
    const supportedLanguages = ["tr", "en"];
    const browserLanguage = detectBrowserLanguage(supportedLanguages);
    setLang(browserLanguage);
    setIsMounted(true);
  }, []);

  const [isMounted, setIsMounted] = useState(false);

  const publisher = `AppizSoft`;

  const [runTour, setRunTour] = useState(true);

  const handleJoyrideCallback = (data) => {
    if (
      [
        LazyReactJoyride.STEP_BEFORE,
        LazyReactJoyride.TARGET_NOT_FOUND,
      ].includes(data.action)
    ) {
      // Rehberlik tamamlandığında burada uygun durumu güncelleyebilirsiniz.
      setRunTour(false);
    }
  };

  const sss = [
    {
      Question:
        "Yazılım Hizmetleri için Paket Satın Aldıktan Sonra İade Süreciniz Var mı?",
      Answer:
        "Evet, müşteri memnuniyetini önemsiyoruz ve satın alınan yazılım hizmetleri için iade sürecimiz mevcuttur. Eğer satın aldığınız paketle ilgili herhangi bir nedenle memnun kalmazsanız, hizmetinizi alış tarihinden itibaren belirli bir süre içinde (örneğin 30 gün) iade edebilirsiniz. İade politikamız ve şartlar hakkında daha fazla bilgi için lütfen müşteri destek ekibimizle iletişime geçin.",
    },
    {
      Question: "Yazılım Projeleri için Ödeme Yöntemleri Nelerdir?",
      Answer:
        "Ödeme yöntemlerimiz çeşitlilik gösterir ve müşterilerimize kolaylık sağlamak amacıyla farklı seçenekler sunuyoruz. Kredi kartı, banka havalesi, PayPal gibi yaygın ödeme yöntemleriyle ödeme kabul ediyoruz. Ayrıca büyük projeler için taksitli ödeme seçenekleri de sunabiliyoruz. Ödeme süreci ve detayları için lütfen satış ekibimizle iletişime geçin.",
    },
    {
      Question: "Yazılım Geliştirme Süreci Ne Kadar Sürer?",
      Answer:
        "Yazılım geliştirme süreci projenin karmaşıklığına, özelliklere ve müşteri gereksinimlerine bağlı olarak değişebilir. Küçük ölçekli projeler birkaç hafta içinde tamamlanabilirken, daha büyük ve kapsamlı projeler aylar hatta yıllar sürebilir. Çevik metodoloji kullanarak süreci hızlandırmaya ve müşterilere düzenli güncellemeler sunmaya çalışıyoruz. Detaylı bir zaman çizelgesi için lütfen projenizi ve ihtiyaçlarınızı bize bildirin, size en uygun çözümü sunalım.",
    },
    {
      Question: "Yazılım Projelerinde Gizlilik ve Güvenlik Nasıl Sağlanıyor?",
      Answer:
        "Müşteri bilgilerini ve projeleri gizli tutma konusuna büyük önem veriyoruz. Tüm projelerimizde gizlilik sözleşmeleri imzalanır ve müşteri verileri güvenli bir şekilde korunur. Ayrıca, projelerimizde güvenlik önlemleri alarak veri sızıntılarına ve kötü amaçlı saldırılara karşı koruma sağlarız. Yazılım projelerinin tamamlanmasıyla birlikte müşteriye ait olan tüm kaynak kodları ve dosyalar teslim edilir ve firmamızda depolanmaz. Gizlilik ve güvenlik konusundaki detaylı politikalarımız hakkında daha fazla bilgi almak için lütfen bizimle iletişime geçin.",
    },
  ];

  const faqMarkup = sss.map((faq, index) => ({
    "@type": "Question",
    name: faq.Question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.Answer,
    },
  }));

  return (
    <>
      <Head>
        <title>{site.title}</title>

        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}/tr`}
        />

        <link rel="alternate" hreflang="tr" href={`${site.baseUrl}/tr`} />
        <link rel="alternate" hreflang="en" href={`${site.baseUrl}`} />
        <link rel="canonical" href="https://appizsoft.com/tr" />

        <meta itemprop="description" content={site.description} />
        <meta name="description" content={site.description} />
        <meta name="publisher" content={publisher} />
        <meta name="robots" content={"index, follow"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.title} />
        <meta name="twitter:description" content={site.description} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={site.title} />
        <meta property="og:url" content={`${site.baseUrl}/tr`} />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
        <meta
          property="article:modified_time"
          content="2023-08-10T19:18:34+00:00"
        />
        <meta name="twitter:label1" content="Tahmini okuma süresi" />
        <meta name="twitter:data1" content="1 dakika" />
      </Head>

      <WindowTitleChanger />

      <Container maxW="8xl" p={{ base: 5, md: 10 }}>
        <Flex direction={"column"} gap={10}>
          <Box id={"Cta"} as="section">
            <Cta lang={lang} targetId={"OurServices"} />
          </Box>
          <Box id={"OurServices"} as="section">
            {isMounted && <LazyOurServices targetId={"Technologies"} />}
          </Box>

          <Box id={"Portfolio"} as="section">
            {isMounted && (
              <LazyPortfolio lang={lang} targetId={"Portfolio"} />
            )}
          </Box>
          <Box id={"Portfolio"} as="section">
            {isMounted && (
              <LazyOurReferences lang={lang} targetId={"WhyChooseUs"} />
            )}
          </Box>
          


          <Box id={"WhyChooseUs"} as="section">
            {isMounted && (
              <LazyWhyChooseUs lang={lang} targetId={"OurWorkProcess"} />
            )}
          </Box>
          <Box id={"Technologies"} as="section">
            {isMounted && (
              <LazyTrustedByDev lang={lang} targetId={"WhyChooseUs"} />
            )}
          </Box>
          <Box id={"OurWorkProcess"} as="section">
            {isMounted && (
              <LazyOurWorkProcess lang={lang} targetId={"OurReferences"} />
            )}
          </Box>

          <Box id={"Technologies"} as="section">
            {false && (
              <LazyOurTechnologies lang={lang} targetId={"TrustedByDev"} />
            )}
          </Box>

          <Box id={"Blog"} as="section">
            {isMounted && <LazyBlog lang={lang} targetId={"SSS"} />}
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default IndexPage;
