import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hungry Cloud</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <section className={styles.hero}>
          <section className="grid place-items-center h-screen">
            <section className="w-8/12 bg-white py-14 px-12">
              <div className="text-5xl mb-3 font-bold text-black italic">
                Hungry Cloud
              </div>

              <div className="text-xl italic font-medium">
                <div>
                `&quot;`I like rice, rice is great when you're hungry and you want
                  2000 of something.`&quot;`
                </div>
                <div className="mt-1">- Mitch Hedburg</div>
              </div>

              <div className="py-12 text-xl text-black font-thin">
                <div>
                  Try to feed the cloud as many rice grains within 15 seconds by
                  mashing your keyboard. Hungry Cloud is a serverless API that
                  creates rice grains from a DynamoDB table. DynamoDB is a fast
                  and flexible non-relational database service for applications that need
                  consistent, single-digit millisecond latency at any scale.
                </div>
              </div>

              <section className="flex justify-between">
                <Link href="/game">
                  <button className="py-3 px-5 bg-[#45fec4] hover:bg-[#fdff2d] flex items-center space-x-2">
                    <div className="text-xl font-medium">Play Game</div>
                  </button>
                </Link>

                <a
                  href="https://github.com/matthewkim0"
                  className="py-3 px-5 bg-[#fdff2d] hover:bg-[#45fec4] text-center text-xl font-medium"
                >
                  Source
                </a>
              </section>

              <section className="pt-12 text-right">
                <div className="py-1">Written in Next.js and Node.js + Serverless</div>
                <div className="mb-4 mt-2">
                  AWS Services
                  <div>
                    DynamoDB, Lambda, API Gateway, CloudFormation, CloudWatch
                  </div>
                </div>
              </section>
            </section>
          </section>

          <section className="grid place-items-center h-screen text-black">
            <div className="w-8/12 bg-white p-6 lg:p-32">
              <section>
                <div className="font-extrabold text-6xl italic mb-2">
                  Hungry Cloud
                </div>

                <div className="text-2xl text-center py-4 text-zinc-900 font-medium ">
                  <div>
                    "I like rice, rice is great when you`&apos;`re hungry and you want
                    2000 of something."
                  </div>
                  <div>- Mitch Hedburg</div>
                </div>
              </section>

              <section className="py-8">
                <div className="text-4xl font-medium text-zinc-800  opacity-100">
                  Feed as many rice grains into the cloud as you can by mashing
                  your keyboard. DynamoDB performs trillions of transactions and
                  queries and auto scales as you enter more rice
                </div>
              </section>
            </div>
          </section>
        </section>
      </body>
    </div>
  );
}
