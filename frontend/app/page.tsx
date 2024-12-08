"use client"

import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Home() {
  return (
    <main className="relative bg-purple-200 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full ">
      {
        <div className=" w-full">
          <Navbar
              title="Connect"
              icon={<IoIosArrowDropdown />}
              position="left"
          />
          <Hero />
          <Grid />
          <Footer />
        </div>
      }
    </div>
  </main>
  );
}
