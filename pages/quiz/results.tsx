import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { Pane, Heading, Paragraph, Text, majorScale } from "evergreen-ui";
import Head from "../../components/common/Head";
import Layout from "../../components/common/Layout";
import Button from "../../components/common/Button";

const OurMission: NextPage = () => {
  return (
    <>
      <Head pageName="quiz results" description="" />
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
            width={500}
            margin={majorScale(5)}
          >
            <Text size={500}>You are the</Text>

            <Heading size={900} marginY={majorScale(2)} className="secondary">
              Conscious Consumer
            </Heading>

            <Heading size={600}>Slow ecological steps</Heading>

            <Paragraph
              size={500}
              marginY={majorScale(3)}
              className="text-center"
            >
              Timelessness, versatility and simplicity are some of your core
              beliefs. You’re constantly pushing yourself to make wiser choices
              to go green, whenever it doesn’t slip your mind. The complexities
              of sustainability sometimes overwhelm you but you hold onto the
              building blocks of an eco-lifestyle.
            </Paragraph>

            <NextLink href="/resources">
              <Button marginY={majorScale(2)}>Read More</Button>
            </NextLink>
          </Pane>
          <Pane marginX={majorScale(5)}>
            <Image
              src="/images/conscious_consumer.svg"
              width={400}
              height={600}
            />
          </Pane>
        </Pane>
      </Layout>
    </>
  );
};

export default OurMission;
