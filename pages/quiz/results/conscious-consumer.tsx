import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { majorScale } from "evergreen-ui";
import Head from "../../../components/common/Head";
import Layout from "../../../components/common/Layout";
import Button from "../../../components/common/Button";

const ConsciousConsumerResult: NextPage = () => {
  return (
    <>
      <Head pageName="quiz results" description="" />
      <Layout>
        <div className="flex-row-container">
          <div className="flex-column-container w-40">
            <span>You are the</span>

            <h1 className="secondary text-center">Conscious Consumer</h1>

            <h3 className="m-1 text-center">Slow ecological steps</h3>

            <p className="text-center">
              Timelessness, versatility and simplicity are some of your core
              beliefs. You’re constantly pushing yourself to make wiser choices
              to go green, whenever it doesn’t slip your mind. The complexities
              of sustainability sometimes overwhelm you but you hold onto the
              building blocks of an eco-lifestyle.
            </p>

            <NextLink href="/resources/conscious-consumer">
              <Button marginY={majorScale(2)}>Read More</Button>
            </NextLink>
          </div>
          <div>
            <Image
              src="/images/conscious-consumer.svg"
              width={379}
              height={630}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ConsciousConsumerResult;
