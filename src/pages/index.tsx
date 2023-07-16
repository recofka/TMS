import Head from 'next/head';
import { Poppins } from 'next/font/google';
import { Title } from '@/styles/elements';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Move - TMS</title>
        <meta name="description" content="Move Tag Management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins.className}>
        <div>
          <Title>Denise</Title>
          <p>Recofka</p>
        </div>
      </main>
    </>
  );
}
