import { Flex } from "@chakra-ui/react";

const { default: Head } = require("next/head");

const Header = () => {
  return (
    <>
      <Head>
        <title>Conversatória</title>
        <meta name="description" content="A sua voz de Conservatória" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex >

      </Flex>
    </>
  );
};
export default Header;
