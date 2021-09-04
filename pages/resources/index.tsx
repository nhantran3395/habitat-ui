import type { NextPage } from "next";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useAppSelector } from "../../app/hooks";
import { selectUserProfile } from "../../features/userProfile/userProfileSlice";
import Head from "../../components/common/Head";
import Layout from "../../components/common/Layout";
import Button from "../../components/common/Button";
import { PROFILES, PROFILE_MAP } from "../../app/constants";

const Resources: NextPage = () => {
  const { profileName } = useAppSelector(selectUserProfile);
  const router = useRouter();

  const isToRedirect = () => {
    if (
      profileName === PROFILES.CuriousExplorer ||
      profileName === PROFILES.ConsciousConsumer ||
      profileName === PROFILES.SavvySwapper
    ) {
      router.push(`/resources/${PROFILE_MAP.get(profileName)}`);
    }
  };

  return (
    <>
      {isToRedirect()}
      <Head pageName="resources" description="" />
      <Layout>
        <div className="flex-column-container">
          <h2 className="text-center">Sorry you haven&apos;t taken our quiz</h2>
          <p className="text-center w-30">
            Discover your hidden eco-lifestyle with these 10 questions of your
            everyday habits.
          </p>
          <NextLink href="/quiz">
            <div className="my-2">
              <Button>Take the Quiz</Button>
            </div>
          </NextLink>
        </div>
      </Layout>
    </>
  );
};

export default Resources;
