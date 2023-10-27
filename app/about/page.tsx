import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow h-screen card place-items-center">
        <div className="h-full w-full">
          <div className="p-20">
            <Image
              src={"/personalPhoto.jpeg"}
              alt="pp"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mt-52 grid flex-grow h-32 card rounded-box place-items-center">
        <div>
          <h1 className="text-center text-white text-3xl">My story</h1>
          <div className="mt-4 p-3 text-center">
            <h3 className="text-gray-400">
              Born in Kuwait, raised in Qatar and being originally from Egypt
              and now living in England, offf !!!! I am from everywhere. This
              allowed me to meet and interact with people from different
              cultures and backgrounds which helped me to adapt wherever i
              resided
            </h3>
            <h3 className="text-gray-400 mt-6">
              Since I can remember, I have always been curious and like to
              explore and ask, why things are the way they are? who does this
              toy car move with a controller, how did the offside rule in
              football came to life?? etc. luckily, internet was a thing during
              my childhood and so it was my answer to my curiosity.
            </h3>

            <h3 className="text-gray-400 mt-6">
              And thats where it all started, my love of computers. The ability
              to use this amazing machine was like a dream already for me. But
              wait a minute,
              <br />
              <h3 className="m-4 font-bold">
                " Are you telling me I can give it commands and it does what i
                say !! "
              </h3>
              I was running around the house when I saw my cousine programming a
              simple game where a boat moves through the waves in the ocean and
              I was hooked, I knew that's what I want to do and my journey began
            </h3>

            <h3 className="text-gray-400 mt-6">
              In 2016 just after completing year 11 at school, decide to move to
              the uk to join Coventry university since I already completed the
              required subjects to fulfill my entry requirements a year early
              and joined the{" "}
              <h3 className="font-bold">
                Hardware and software engineering course
              </h3>
              After graduating my BEng with first class and Hons, decied to
              specialize in software development and joined a masters course in
              <h3 className="font-bold">Software development</h3> from which i
              graduated with merit
            </h3>

            <h3 className="text-gray-400 mt-6">
              During my studies, I was able to work few freelance work related
              to web dev as well as volunteer in various societies such as the
              UN. After graduation, I joined my first fulltime role as a
              Software engineer in a startup called Cambridge Kinetics. I was
              their first ever hire joining a team of four devs, including the
              CEO and a part-time business analyst. During the two years I spent
              in the company, I learned tons of new technologies as I had to
              adapt to different client requirements. Moreover, learnt how to
              communicate with clients in a real world settings, difficulties
              that may occur and most importantly, errors always appear during
              lice demos :)
              <br />
              During my time in the company, I was able to lead two projects and
              left with 10 people in the company. I call that an absolute
              success.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
