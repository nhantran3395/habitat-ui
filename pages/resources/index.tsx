import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { majorScale } from "evergreen-ui";
import Head from "../../components/common/Head";
import Layout from "../../components/common/Layout";
import Button from "../../components/common/Button";
import styles from "../../styles/MyHabitat.module.scss";

const Resources: NextPage = () => {
  return (
    <>
      <Head pageName="my habitat" description="" />
      <Layout>
        <div className="flex-row-container">
          <div className="flex-column-container m-3 w-30">
            <Image
              src="/images/conscious_consumer.svg"
              width={300}
              height={500}
            />
          </div>
          <div className="flex-column-container m-3 w-50">
            <h2 className="justify-self-start align-self-start">
              Explore this Type
            </h2>

            <h1 className="secondary justify-self-start align-self-start">
              Conscious Consumer
            </h1>

            <p>
              According to Forbes, 77% of people want to learn how to live more
              sustainably, with 93% showing genuine concern for the environment.
              Additionally, 87% of people stated that they made efforts to live
              an eco-friendly lifestyle, with 72% wanting to leave a better
              planet for their children.
              <br />
              <br />
              Given the growing concerns for energy consumption, global
              littering, business energy rates as well as increased population
              and migration, concerns about the planet are very justified. That
              said, we can all be part of the change and contribute to an
              eco-friendly planet in our own ways – let’s jump right into it.
            </p>
          </div>
        </div>

        <div className="flex-row-container">
          <div className="flex-column-container m-3 w-30 align-self-start">
            <Image src="/images/plastic_bag.svg" width={300} height={300} />
          </div>
          <div className="flex-column-container align-self-start m-3 w-50">
            <h2 className="justify-self-start align-self-start">
              Begin with Your Habits
            </h2>

            <h3 className="secondary justify-self-start align-self-start">
              Become Paperless
            </h3>

            <p>
              As a civilization, we’ve become overly reliant on paper, cardboard
              and their byproducts for communication and information storage –
              but is this really a necessity? With the aforementioned shift to
              digital technology, becoming paperless is more than just a utopian
              idea – it’s a goal we can all contribute toward daily.
              <br />
              <br />
              Tools such as Evernote are available at a button press, while more
              extensive platforms such as Google Docs allow for a plethora of
              writing possibilities. Besides the obvious shift toward digital
              devices, checking out the best paper writing site to outsource
              your writing or formatting needs is also an option.
            </p>

            <h3 className="secondary justify-self-start align-self-start">
              Reuse Shopping Bags
            </h3>

            <p>
              Whether for groceries or new accessories, we are all bound to go
              shopping at some point during the week. However, that doesn’t mean
              we should ask for bags every time we visit a store, especially if
              we frequent the same ones out of habit.
              <br />
              <br />
              You can make your shopping more straightforward and efficient by
              reusing bags and by writing lists – check out a review of
              TrustMyPaper as a solution. Taking such an approach to shopping
              will not only make your lifestyle more eco-friendly but also
              reduce unnecessary expenses for your household going forward.
            </p>

            <h3 className="secondary justify-self-start align-self-start">
              Separate Waste for Recycling
            </h3>

            <p>
              To do our part as citizens of the world, we should do our best to
              ensure safe, quick and efficient recycling of collective waste. As
              such, you can introduce a segmented recycling system to your
              household or office space by hosting different waste disposal bags
              for different materials.
              <br />
              <br />
              Plastics, glass, paper as well as organic waste all behave
              differently when it comes to waste processing and recycling. Make
              the waste disposal facility’s job easier by taking out your trash
              in clearly marked bags for different materials in order to do your
              part.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Resources;
