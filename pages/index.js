import Head from 'next/head'
import Feed from '../components/Feed';
import LeftSidePanel from '../components/LeftSidePanel'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twotter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex max-w-[1500px] mx-auto">
        <LeftSidePanel />
        <Feed />
        {/* asdad */}
        {/* asdad */}
        {/* asdad */}
      </main>
    </div>
  );
}
