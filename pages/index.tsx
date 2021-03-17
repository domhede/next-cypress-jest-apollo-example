import Head from 'next/head';
import { HelloWorld } from '../components/HelloWorld/HelloWorld';
import { Hello } from '../components/Hello/Hello';
import { Center, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gravity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Center bg="grey" h="100vh">
          <VStack spacing="4">
            <HelloWorld />
            <Hello name="Jerry" />
          </VStack>
        </Center>
      </main>

      <footer></footer>
    </div>
  );
}
