import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { majorScale } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";
import Button from "../components/common/Button";
import styles from "../styles/MyHabitat.module.scss";

const MyHabitat: NextPage = () => {
  return (
    <>
      <Head pageName="my habitat" description="" />
      <Layout>
        <div className="flex-row-container">
          <div className="flex-column-container m-3 w-20 align-self-start">
            <h1 className="text-center">my habitat</h1>
            <p className="text-center">
              Discover your hidden eco-lifestyle with these 10 questions of your
              everyday habits.
            </p>
            <NextLink href="/quiz">
              <Button margin={majorScale(3)}>Take the Quiz</Button>
            </NextLink>
          </div>
          <div className={`flex-column-container m-3 w-20 ${styles.habitat}`}>
            <Image src="/images/savvy-swapper.svg" width={300} height={500} />
            <h2 className="text-center">Savvy Swapper</h2>
            <p className="text-center">
              You thrive on giving preloved clothing a new lease of life and
              it’s no doubt that you’re called a swapaholic.
            </p>
          </div>
          <div className={`flex-column-container m-3 w-20 ${styles.habitat}`}>
            <Image
              src="/images/conscious-consumer.svg"
              width={400}
              height={700}
            />
            <h2 className="text-center">Conscious Consumer</h2>
            <p className="text-center">
              Timelessness, versatility and simplicity are some of your core
              beliefs. You’re constantly pushing yourself to make wiser choices
              to go green, whenever it doesn’t slip your mind.
            </p>
          </div>
          <div className={`flex-column-container m-3 w-20 ${styles.habitat}`}>
            <Image
              src="/images/curious-explorer.svg"
              width={300}
              height={500}
            />
            <h2 className="text-center">Curious Explorer</h2>
            <p className="text-center">
              Who says being trendy and ethical can’t coexist? Quirky, novel and
              ever-changing is probably how you would describe your approach to
              a greener lifestyle.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MyHabitat;
