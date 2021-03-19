import Head from "next/head";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import Process from "../partials/Process";
import Tabs from "../partials/Tabs";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Caasflow - Funding for ecommerce business</title>
      </Head>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <Process />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
