import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function OfferButton({ lang = `tr`, platform }) {
  const router = useRouter();

  return (
    <>
      {platform === "mobile" ? (
        <>
          <Button
            color="#fff"
            bg={"primary"}
            _hover={{
              bg: "#6ebec2",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
            }}
            size="md"
            onClick={() => {
              router.push(`/${lang}/get-a-quote`);
            }}
            fontSize={"2xl"}
            fontFamily={"Poppins"}
            w="90%"
            px={4}
            h={75}
          >
            Teklif İste
          </Button>
        </>
      ) : (
        <>
          <Button
            color="#fff"
            bg={"#54bec3"}
            _hover={{ bg: "#6ebec2" }}
            size="md"
            onClick={() => {
              router.push(`/${lang}/get-a-quote`);
            }}
            fontFamily={"Poppins"}
            p={{ md: 4, lg: 6 }}
            fontSize={{ md: "13px", lg: "17px" }}
            zIndex={11}
          >
            Teklif İste
          </Button>
        </>
      )}
    </>
  );
}

export default OfferButton;
