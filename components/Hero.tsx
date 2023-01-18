import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import BackgroundBox from "./BackgroundBox";
import { BsArrowDown } from "react-icons/bs";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-column space-y-10 space-x-[-100] items-center justify-center text-center overflow-hidden">
      <div>
        <div>
          <h2 className="text-sm uppercase font-bold text-[rgb(142,177,217)] tracking-[15px] pb-2">
            Social VC
          </h2>
          <BackgroundBox />

          <h1 className="font-bold">
            Post your
            <span className="pb-2 lg:text-2xl font-bold text-[rgb(142,177,217)]">
              <Typewriter
                words={[" Ideas", " Pitch Decks", " MVPs", " Experiences"]}
                loop={false}
                cursor={true}
                cursorColor={"text-[rgb(142,177,217)]"}
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <div>
          <h1 className="text-4xl lg:text-4xl font-semibold">
            And get feedback from the community
          </h1>
          <div className="pt-5">
            <button className="heroButton">Login</button>
            <button className="heroButton">Sign Up</button>
          </div>
          <div>
            <Link href="#">
              <button className="heroButtonDown">
                <BsArrowDown />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
