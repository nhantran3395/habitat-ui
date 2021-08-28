import type { NextPage } from "next";
import Image from "next/image";
import { Pane, Heading, Paragraph, Text, majorScale } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";

const MyHabitat: NextPage = () => {
  return (
    <>
      <Head pageName="my habitat" description="" />
      <Layout>
        <div className="flex-row-container">
          <div className="flex-column-container m-3 w-25">
            <Image src="/images/savvy_swapper.svg" width={300} height={500} />
            <h2 className="text-center">Savvy Swapper</h2>
            <p className="text-center">
              You thrive on giving preloved clothing a new lease of life and
              it’s no doubt that you’re called a swapaholic.
            </p>
          </div>
          <div className="flex-column-container m-3 w-25">
            <Image
              src="/images/conscious_consumer.svg"
              width={400}
              height={500}
            />
            <h2 className="text-center">Conscious Consumer</h2>
            <p className="text-center">
              Timelessness, versatility and simplicity are some of your core
              beliefs. You’re constantly pushing yourself to make wiser choices
              to go green, whenever it doesn’t slip your mind.
            </p>
          </div>
          <div className="flex-column-container m-3 w-25">
            <Image
              src="/images/curious_explorer.svg"
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
