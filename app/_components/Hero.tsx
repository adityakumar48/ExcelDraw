import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[90vh] lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Documents & Diagrams
            <strong className="font-extrabold text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 block pb-2  sm:block">
              {" "}
              for engineering teams
            </strong>
          </h1>

          <p className="mt-4 text-neutral-700 sm:text-xl/relaxed">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <RegisterLink className=" w-full rounded bg-purple-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-purple-700  inline-flex gap-3 tracking-wide h-full items-center  sm:w-auto">
              Try for free <MoveRight />
            </RegisterLink>

            <Link
              href="/about"
              className="block w-full rounded px-12 py-3 text-sm font-medium text-purple-600 shadow hover:text-purple-700 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
