import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gravity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Center bg="grey" h="100vh">
          <Heading color="tomato">Hello world</Heading>
        </Center>
      </main>

      <footer></footer>
    </div>
  );
}
