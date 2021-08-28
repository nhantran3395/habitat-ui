import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";

const OurMission: NextPage = () => {
  return (
    <>
      <Head pageName="our mission" description="" />
      <Layout>
        <div className="flex-row-container">
          <div className="w-40 m-3">
            <h1>our mission</h1>

            <p className="w-80">
              Paving the way for environmentally responsible lifestyles -
              empower individuals to drive change towards sustainability
              starting with simple lifestyle habits.
            </p>
          </div>
          <div className="w-40">
            <Image src="/images/workshops.svg" width={600} height={600} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OurMission;
