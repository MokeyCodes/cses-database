import Image from "next/image";
import Paragraph from "../components/Paragraph";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="text-4xl font-bold">About Me: Ethan Nguyen-Huu</h1>

      <div className="home-section-row">
        <Image
          src="/Profile_Photo.png"
          alt="Ethan Nguyen-Huu's Photo"
          width={200}
          height={200}
          className="rounded-full"
        />

        <div className="home-section-col hobbies-box">
          <h2 className="text-2xl font-bold mb-2">Some of my Hobbies</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Soccer</li>
            <li>Volleyball</li>
            <li>Roblox</li>
            <li>CS 🧐🤓</li>
          </ul>
        </div>
      </div>

      <div className="home-section-col">
        <Paragraph>
          <div className="flex items-center gap-10 hobbies-box">
            <span>Hi!!!!!</span>
            <Image
              src="/cat.png"
              alt="Cute Cat Icon"
              width={50}
              height={50}
              className="rounded-full"
            />
            My name is Ethan Nguyen-Huu. I'm a CSES Developer for Runway Avenue!
          </div>
        </Paragraph>

        <Paragraph>
            <div className="hobbies-box">
          I'm an undergraduate freshman at UCSD. I am majoring in <strong><u>Artificial Intelligence</u></strong> and I'm interested in <strong><u>Machine Learning</u>.</strong>
          </div>
        </Paragraph>

        <Paragraph>
          <div className="hobbies-box flex items-center gap-4">
            <span>I am also intrigued by <strong>Control Theory</strong>, <i>but</i> I'm not sure if it will be pursued in my academic endeavors</span>
            <Image
              src="/nerd.png"
              alt="Nerd Photo"
              width={50}
              height={50}
              className="rounded-full"
            />.
          </div>
        </Paragraph>

        <Paragraph>
            <div className="hobbies-box">
          I'm excited to learn more about web development as the year goes on. I'm very new to it.
          </div>
        </Paragraph>
      </div>
    </div>
  );
}
