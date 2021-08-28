import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { Pane, Heading, Paragraph, Text, majorScale } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";
import Button from "../components/common/Button";

const MyHabitat: NextPage = () => {
  return (
    <>
      <Head pageName="My Habitat" description="" />
      <Layout>
        <Pane
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            marginX={majorScale(3)}
          >
            <Image src="/images/savvy_swapper.svg" width={300} height={500} />
            <Heading size={600} marginY={majorScale(2)}>
              Savvy Swapper
            </Heading>
            <Paragraph size={500} width={340}>
              You thrive on giving preloved clothing a new lease of life and
              it’s no doubt that you’re called a swapaholic.
            </Paragraph>
          </Pane>
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            marginX={majorScale(3)}
          >
            <Image
              src="/images/conscious_consumer.svg"
              width={400}
              height={500}
            />
            <Heading size={600} marginY={majorScale(2)}>
              Conscious Consumer
            </Heading>
            <Paragraph size={500} width={340}>
              Timelessness, versatility and simplicity are some of your core
              beliefs. You’re constantly pushing yourself to make wiser choices
              to go green, whenever it doesn’t slip your mind.
            </Paragraph>
          </Pane>
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            marginX={majorScale(3)}
          >
            <Image
              src="/images/curious_explorer.svg"
              width={300}
              height={500}
            />
            <Heading size={600} marginY={majorScale(2)}>
              Curious Explorer
            </Heading>
            <Paragraph size={500} width={340}>
              Who says being trendy and ethical can’t coexist? Quirky, novel and
              ever-changing is probably how you would describe your approach to
              a greener lifestyle.
            </Paragraph>
          </Pane>
        </Pane>
      </Layout>
    </>
  );
};

export default MyHabitat;
