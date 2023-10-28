import closeIcon from "../public/images/icon-remove.svg";
import Image from "next/image";
import listingsData from "../public/listings.json";
import Homelisting from "./Homelisting";
export default function Home() {
  console.log("This is the listings data:", listingsData);
  return (
    <main className="bg-Background h-screen overflow-auto">
      {/* Filter section */}
      <div className="bg-very_dark_cyan h-[30%]"></div>
      <div className="flex justify-between items-center rounded w-[90%] bg-white relative -top-10 mx-auto p-[1.5rem]">
        {/* Filter categories */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center w-auto">
            <div className="rounded-l bg-light_cyan px-1.5">
              <p className="text-primary">Frontend</p>
            </div>
            <div className="bg-primary p-1 rounded-r">
              <Image src={closeIcon} alt="close icon" className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-center w-auto">
            <div className="rounded-l bg-light_cyan px-1.5">
              <p className="text-primary">CSS</p>
            </div>
            <div className="bg-primary p-1 rounded-r">
              <Image src={closeIcon} alt="close icon" className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-center w-auto">
            <div className="rounded-l bg-light_cyan px-1.5">
              <p className="text-primary">Javascript</p>
            </div>
            <div className="bg-primary p-1 rounded-r">
              <Image src={closeIcon} alt="close icon" className="h-4 w-4" />
            </div>
          </div>
        </div>
        <span className="text-slate-400 hover:text-primary hover:underline hover:cursor-pointer">
          Clear
        </span>
      </div>
      {/* Listings */}
      <div>
        {listingsData?.map((listing) => (
          <Homelisting listingObject={listing} key={listing.id} />
        ))}
      </div>
    </main>
  );
}
