import theme from "../src/theme";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://appizsoft.com"
    : "http://localhost:3000";

const pinterestAnalyticsCode = `7f9464b7cba4c1e15e8dfb587b8ef00d`;
const googleAnalyticsCode = ``;
const facebookPixelCode = ``;
const gtmCode = ``;
const ttCode = `CIEJ1LJC77U441D19LNG`;

export const site = {
  title: `Appizsoft • Özel Yazılım Geliştirme`,
  baseUrl: baseUrl,
  publisher: `Appizsoft`,
  image: baseUrl + "/logo.svg",
  imageAlt: "site-logo-png",
  description: `Müşterilerimize özel yaklaşımımızla yaratıcı çözümler sunarak hedeflerine ulaşmalarına yardımcı oluyoruz. Stratejik planlama ve araştırmalarımızla, müşterilerimizin sektöründe öne çıkarak rekabet avantajı elde etmelerini sağlıyoruz.`,
  name: ``,
  keywords: "",
  isRobotIndex: true,
  themeColor: theme.colors.primary,
  lang: "tr",
  mailAddress: "info@appizsoft.com",
  address: {
    streetAddress: `123 Example Street`,
    addressLocality: `City`,
    addressRegion: `State`,
    postalCode: `12345`,
    addressCountry: `TR`,
  },
  telephone: "+90 555 555 55 55",
  sosyalMediaLinks: [
    {
      id: 1,
      label: "instagram",
      link: "https://www.instagram.com/appizsoftcom/",
    },
    {
      id: 2,
      label: "facebook",
      link: "https://www.facebook.com/appizsoftcom/",
    },
    {
      id: 2,
      label: "threads",
      link: "https://www.threads.net/",
    },

    {
      id: 3,
      label: "tiktok",
      link: "https://www.tiktok.com/@appizsoftcom",
    },
    {
      id: 4,
      label: "linkedin",
      link: "https://tr.linkedin.com/company/appizsoft",
    },

    {
      id: 5,
      label: "youtube",
      link: "https://www.youtube.com/@Appizsoft",
    },
    {
      id: 6,
      label: "twitter",
      link: "https://twitter.com/appizsoftcom",
    },
    {
      id: 7,
      label: "github",
      link: "https://github.com/appizsoftcom",
    },
    {
      id: 8,
      label: "pinterest",
      link: "https://tr.pinterest.com/appizsoftcom/",
    },
  ],
  analyticsCodes: {
    pinterestAnalyticsCode,
    googleAnalyticsCode,
    facebookPixelCode,
    gtmCode,
    ttCode,
  },
};
