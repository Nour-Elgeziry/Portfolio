import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="max-w-3xl mt-52 grid flex-grow h-32 card rounded-box place-items-center">
        <h1 className="text-white text-3xl">Hi I am Nour</h1>
        <h1 className="text-white text-3xl">Software engineer</h1>

        <h3 className="mt-4 text-gray-400">
          Loreum epsum fdfkljahfd hfkjdshfdjsahf hkfkjdshfdsha khfkjadhsfkadhs
          kjh kjfhsadf dsadasdsad asdsadasd sadas dasdas ads
        </h3>

        <Link className="btn bg-teal-900" href={"/projects"}>
          View Projects
        </Link>
      </div>
      <div className="grid flex-grow h-screen card rounded-box place-items-center">
        <div className="avatar h-full w-full">
          <div className="rounded-full ring ring-teal-900">
            <Image
              src={"/personalPhoto.jpeg"}
              alt="pp"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
