import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

function Logo({ platform, lang = `tr`, isLink = true, s }) {
  const router = useRouter();
  const cursor = isLink === true ? "pointer" : "default";
  const logo = "/logo.png";

  const logoSize = {
    //mobile: { h: 35, w: 35 },
    mobile: { h: 60, w: 150 },
    desktop: { h: 50, w: 150 },
  };

  //const size = { h: 125, w: 400 };

  let size = platform === "desktop" ? logoSize.desktop : logoSize.mobile;

  size = ["desktop", "mobile"].includes(platform) ? size : s;

  const baseImagePath = "https://appizsoft-static-api.vercel.app";

  // Tarayıcı dilini alın
  const browserLocale = router.locale;

  return (
    <>
      {isLink === true && (
        <Link href="/">
          <Image
            rel="preload"
            as="image"
            src={logo}
            alt="Logo"
            width={size.w}
            height={size.h}
            style={{
              cursor: cursor,
            }}
            draggable={false}
            //placeholder="blur"
            loader={({ src, width, quality }) => {
              return `${baseImagePath}${src}?w=${width}&q=${quality || 75}`;
            }}
            loading="lazy"
          />
        </Link>
      )}
      {isLink === false && (
        <Image
          rel="preload"
          as="image"
          src={logo}
          alt="Logo"
          width={size.w}
          height={size.h}
          style={{
            cursor: cursor,
          }}
          draggable={false}
          //placeholder="blur"
          loader={({ src, width, quality }) => {
            return `${baseImagePath}${src}?w=${width}&q=${quality || 75}`;
          }}
          loading="lazy"
        />
      )}
    </>
  );
}

export default Logo;
