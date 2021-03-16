import Head from 'next/head';
import { Tester } from '../components/Tester/Tester';
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
          <Tester name="Jerry" />
        </Center>
      </main>

      <footer></footer>
    </div>
  );
}
