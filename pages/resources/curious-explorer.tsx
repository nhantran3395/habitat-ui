import type { NextPage } from "next";
import Image from "next/image";
import Head from "../../components/common/Head";
import Layout from "../../components/common/Layout";

const CuriousExplorerResouces: NextPage = () => {
  return (
    <>
      <Head pageName="my habitat" description="" />
      <Layout>
        <div className="flex-row-container">
          <div className="flex-column-container m-3 w-30">
            <Image
              src="/images/curious-explorer.svg"
              width={300}
              height={500}
            />
          </div>
          <div className="flex-column-container m-3 w-50">
            <h2 className="justify-self-start align-self-start">
              Explore this Type
            </h2>

            <h1 className="secondary justify-self-start align-self-start">
              Curious Explorer
            </h1>

            <p>
              Who says being trendy and ethical can’t coexist? Quirky, novel and
              ever-changing is probably how you would describe your approach to
              a greener lifestyle. You never fail to support the latest
              eco-conscious innovations, and you see nothing wrong with doing
              all your shopping at Whole Foods.
              <br />
              <br />
              While we continue to rely on digital technologies and quality of
              life innovations, it’s never too late to create an eco-friendly
              daily routine. From the moment you wake to when you fall asleep
              again, you and you alone are in charge of the way you live your
              life.
            </p>
          </div>
        </div>

        <div className="flex-row-container">
          <div className="flex-column-container m-3 w-30 align-self-start">
            <Image src="/images/vegetables.svg" width={300} height={300} />
          </div>
          <div className="flex-column-container align-self-start m-3 w-50">
            <h2 className="justify-self-start align-self-start">
              Begin with Your Habits
            </h2>

            <h3 className="secondary justify-self-start align-self-start">
              Increase Walking & Cycling
            </h3>

            <p>
              It goes without saying that mechanical vehicles which rely on fuel
              consumption leave a huge mark on our environment. While community
              transportation such as buses and trains are a necessary evil, you
              can do your part and introduce a more eco-friendly personal
              solution.
              <br />
              <br />
              Depending on how far your work or daily chores are from the place
              of residence, you can walk or cycle to and from your destination.
              This will not only help make your routine more eco-friendly but
              also add to your overall health, mood and productivity for the
              day.
            </p>

            <h3 className="secondary justify-self-start align-self-start">
              Introduce Vegan Days
            </h3>

            <p>
              Lastly, thermally processing meats, cheeses and animal byproducts
              will leave a mark on your living environment and body as a whole.
              While meat products shouldn’t be eliminated out of your diet
              outright, you can slowly shift toward vegan foods and fresh
              produce to amend for them.
              <br />
              <br />
              Eating more fruits and vegetables will bring a plethora of
              benefits to your eco-friendly daily routine, including more
              energy, better mood and far less waste. Give vegan foods a shot
              and see how your body, as well as family members, reacts to a
              greener change of pace and healthy eating.
            </p>

            <h3 className="secondary justify-self-start align-self-start">
              Air out Your Environment{" "}
            </h3>

            <p>
              A simple yet effective way to adopt a greener lifestyle is to
              start with your work and living environments. Specifically, make
              sure to air out your rooms, office space, and living areas on a
              daily basis to allow for fresh air to come in.
              <br />
              <br />
              This will not only improve your mood, and productivity but also
              allow any plant life or pets you might have to freshen and liven
              up. Make it a habit to avoid artificial refreshers and rely on
              natural air – you will undoubtedly breathe more easily as a
              result.
            </p>
          </div>
        </div>

        <div className="flex-column-container w-100">
          <h3 className="w-80">New Habits for You</h3>

          <div className="flex-row-container w-100">
            <div className="flex-column-container m-3 w-25 align-self-start">
              <Image src="/images/green-dreamer.svg" width={370} height={240} />

              <h4 className="align-self-start">Green Podcast</h4>

              <h2 className="secondary align-self-start">
                Green Dreamer: with Kamea Chayne{" "}
              </h2>

              <p className="w-80 align-self-start">
                Green Dreamer is a listener-supported, in(ter)dependent podcast
                exploring our paths to collective healing, ecological
                regeneration, and true abundance and wellness *for all*.
                <br />
                <br />
                Curious to unravel the dominant narratives that stunt our
                imaginations, and called to spark radical dreaming of what could
                be, we share conversations with an ever-expanding range of
                thought leaders—each inspiring us to deepen and broaden our
                awareness in their own ways.
              </p>
            </div>

            <div className="flex-column-container m-3 w-25 align-self-start">
              <Image
                src="/images/how-to-kick-start-your-sustainable-living.svg"
                width={370}
                height={240}
              />

              <h4 className="align-self-start">Green Living</h4>

              <h2 className="secondary align-self-start">
                How to kick-start your sustainable living?{" "}
              </h2>

              <p className="w-80 align-self-start">
                Have you ever thought of making our world a better place? Do you
                know how to kick-start your sustainable living?SLOWOOD is now
                preparing an exhibition to make it easy for everyone to go
                green! You will find the sustainable swaps for everyday living,
                natural remedies for eczema and reusable alternatives for COVID
                at the exhibition. Come to SLOWOOD Shatin store and pick your
                starter kits there!
                <br />
                <br />
                For more info, visit{" "}
                <a>
                  https://www.slowood.hk/pages/st-exhibition-handbook-of-sustainable-living
                </a>
              </p>
            </div>

            <div className="flex-column-container m-3 w-25 align-self-start">
              <Image src="/images/jelly-aiyu.svg" width={370} height={240} />

              <h4 className="align-self-start">Green Recipe</h4>

              <h2 className="secondary align-self-start">
                How to Make: Aiyu Jelly
              </h2>

              <p className="w-80 align-self-start">
                As the weather heats up, you can learn how to make Aiyu Jelly –
                a light summer dessert that is low calorie, low sugar, and super
                easy to make! Similar in texture to grass jelly, aiyu jelly is a
                popular Taiwanese dessert great for cooling off in the summer
                heat. Aiyu is a type of Taiwanese fig tree. When the figs are
                ripe, they are cut in half and flipped outward to dry the seeds
                in the sun.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CuriousExplorerResouces;
