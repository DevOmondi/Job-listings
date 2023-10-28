import React from "react";
import companyLogo from "../../public/images/photosnap.svg";
import Image from "next/image";

const Listing = () => {
  return (
    <main className="bg-Background h-screen">
      {/* dummy div */}
      <div className="bg-primary h-[40%]"></div>
      <div className="bg-white w-[90%] md:flex md:items-center md:justify-between rounded mx-auto mt-[2rem] p-[2rem] border-solid border-l-4 border-primary">
        <div className="md:flex md:items-center md:gap-[1rem]">
          <Image
            src={companyLogo}
            alt="company logo"
            quality={100}
            className="h-[3rem] w-[3rem] relative -top-14 md:top-0"
          />
          {/* <div> */}
          <div>
            <div className="flex gap-[1rem]">
              <p className="text-primary">Photosnap</p>
              <div>
                <span className="bg-primary text-white rounded-full p-1 text-[0.7rem] mr-[0.5rem]">
                  NEW!
                </span>
                <span className="bg-very_dark_cyan text-white rounded-full p-1 text-[0.7rem]">
                  FEATURED
                </span>
              </div>
            </div>
            <p className="text-very_dark_cyan font-bold my-[0.5rem] hover:text-primary hover:cursor-pointer">
              Senior Frontend Developer
            </p>
            <p className="text-slate-400">1d ago • Full Time • USA only</p>
            <div className="h-[1px] bg-slate-400 my-[1rem] md:hidden"></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <p className="rounded bg-light_cyan px-1.5 w-auto text-primary font-bold hover:bg-primary hover:text-white hover:cursor-pointer">
            Frontend
          </p>
          <p className="rounded bg-light_cyan px-1.5 w-auto text-primary font-bold hover:bg-primary hover:text-white hover:cursor-pointer">
            Senior
          </p>
          <p className="rounded bg-light_cyan px-1.5 w-auto text-primary font-bold hover:bg-primary hover:text-white hover:cursor-pointer">
            HTML
          </p>
          <p className="rounded bg-light_cyan px-1.5 w-auto text-primary font-bold hover:bg-primary hover:text-white hover:cursor-pointer">
            CSS
          </p>
          <p className="rounded bg-light_cyan px-1.5 w-auto text-primary font-bold hover:bg-primary hover:text-white hover:cursor-pointer">
            JavaScript
          </p>
        </div>
        {/* </div> */}
      </div>
    </main>
  );
};

export default Listing;
