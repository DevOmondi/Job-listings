"use client";
import { useState, useEffect } from "react";
import closeIcon from "../public/images/icon-remove.svg";
import Image from "next/image";
import Homelisting from "./Homelisting";

export default function Home() {
  const [listings, setListings] = useState([]);
  // TODO: Func to fetch listings data
  const getListingsData = async () => {
    try {
      const response = await fetch("http://localhost:3001/data");
      const data = await response.json();
      console.log("Listings data is:", data);
      setListings(data);
    } catch (error) {
      console.error("Ooopsie!! something went wrong :(", error);
    }
  };
  // console.log("This is the listings data:", listings);
  // TODO: Func to filter listings(Frontend)
  function getFrontendRoles() {
    const frontendRoles = listings?.filter(
      (listing) => listing.role === "Frontend"
    );
    setListings(frontendRoles);
    console.log("Frontend roles:", frontendRoles);
  }
  // TODO: Func to filter listings(Backend)
  function getBackendRoles() {
    const backendRoles = listings?.filter(
      (listing) => listing.role === "Backend"
    );
    setListings(backendRoles);
    console.log("Backend roles:", backendRoles);
  }
  // TODO: Func to filter listings(Backend)
  function getFullstackRoles() {
    const fullstackRoles = listings?.filter(
      (listing) => listing.role === "Fullstack"
    );
    setListings(fullstackRoles);
    console.log("Fullstack roles:", fullstackRoles);
  }
  useEffect(() => {
    getListingsData();
  }, []);
  return (
    <main className="bg-Background h-screen overflow-auto">
      {/* Filter section */}
      <div className="bg-mobile-bg h-[30%]"></div>
      <div className="flex justify-between items-center rounded w-[90%] bg-white relative -top-10 mx-auto p-[1.5rem]">
        {/* Filter categories */}
        <div className="flex flex-wrap gap-3">
          <div className="filter-div" onClick={getFrontendRoles}>
            <div className="filter-text-section">
              <p className="text-primary">Frontend</p>
            </div>
            <div className="close-icon">
              <Image src={closeIcon} alt="close icon" className="h-4 w-4" />
            </div>
          </div>
          <div className="filter-div" onClick={getBackendRoles}>
            <div className="filter-text-section">
              <p className="text-primary">Backend</p>
            </div>
            <div className="close-icon">
              <Image src={closeIcon} alt="close icon" className="h-4 w-4" />
            </div>
          </div>
          <div className="filter-div" onClick={getFullstackRoles}>
            <div className="filter-text-section">
              <p className="text-primary">Fullstack</p>
            </div>
            <div className="close-icon">
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
        {listings?.map((listing) => (
          <Homelisting listingObject={listing} key={listing.id} />
        ))}
      </div>
    </main>
  );
}
