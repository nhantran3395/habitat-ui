import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { majorScale } from "evergreen-ui";
import Head from "../../../components/common/Head";
import Layout from "../../../components/common/Layout";
import Button from "../../../components/common/Button";

const CuriousExplorerResult: NextPage = () => {
  return (
    <>
      <Head pageName="quiz results" description="" />
      <Layout>
        <div className="flex-row-container">
          <div>
            <Image
              src="/images/curious-explorer.svg"
              width={400}
              height={650}
            />
          </div>

          <div className="flex-column-container w-40">
            <span>You are the</span>

            <h1 className="secondary text-center">Curious Explorer</h1>

            <h3 className="m-1 text-center">Ethical Pursuit of Style</h3>

            <p className="text-center">
              Who says being trendy and ethical can’t coexist? Quirky, novel and
              ever-changing is probably how you would describe your approach to
              a greener lifestyle. You never fail to support the latest
              eco-conscious innovations, and you see nothing wrong with doing
              all your shopping at Whole Foods.
            </p>

            <NextLink href="/resources/curious-explorer">
              <Button marginY={majorScale(2)}>Read More</Button>
            </NextLink>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CuriousExplorerResult;
