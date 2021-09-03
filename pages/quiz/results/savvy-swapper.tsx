import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { majorScale } from "evergreen-ui";
import Head from "../../../components/common/Head";
import Layout from "../../../components/common/Layout";
import Button from "../../../components/common/Button";

const SavvySwapperResult: NextPage = () => {
  return (
    <>
      <Head pageName="quiz results" description="" />
      <Layout>
        <div className="flex-row-container">
          <div className="flex-column-container w-40">
            <span>You are the</span>

            <h1 className="secondary text-center">Savvy Swapper</h1>

            <h3 className="m-1 text-center">Eco-alternatives</h3>

            <p className="text-center">
              You thrive on giving preloved clothing a new lease of life and
              it’s no doubt that you’re called a swapaholic. Beyond fashion, it
              comes naturally for you to seek more environmentally-friendly
              transport and food alternatives.
            </p>

            <NextLink href="/resources/savvy-swapper">
              <Button marginY={majorScale(2)}>Read More</Button>
            </NextLink>
          </div>
          <div>
            <Image src="/images/savvy-swapper.svg" width={400} height={650} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SavvySwapperResult;
