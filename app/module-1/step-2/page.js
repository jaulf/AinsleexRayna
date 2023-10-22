"use client";
import Image from "next/image";
import Link from "next/link";

// Image Importation
import search2 from "@/public/Images/svg/search2.svg";
import filter from "@/public/Images/svg/filter.svg";
import emptystate from "@/public/Images/svg/empty-state.svg";
import expand2 from "@/public/Images/svg/expand2.svg";
import LeftSidebar from "@/components/General/left-sidebar";
import arrowLeft from "@/public/Images/svg/arrow-left.svg";
import generate500 from "@/public/Images/svg/generate-o-500.svg";

// LISTING MODULES - Profitable Product IdeaS
import ModuleList from "@/components/moduleList/Module1Step2";

// SAVING ASSET MODAL POPUP
import SavedAssetSidebar from "@/components/sidebars/Module1Step2-save-asset";

// NAVBAR IMPORTATION
import Navbar from "@/components/General/navbar";

export default function Home() {
  // DISPLAY SAVED ASSET SIDEBAR
  const sasExpand = () => {
    if (typeof window !== "undefined") {
      document.getElementById("sas").classList.toggle("active");
    }
  };

  return (
    <main>
      {/* SAVED ASSET + CTA FOR CANCEL AND SAVE ASSET */}
      <SavedAssetSidebar sasExpand={sasExpand} />

      {/* TOP NAVBAR CONTAINER */}
      <Navbar />

      {/* BODY */}
      <section className="h-full bg-[#fafafa] relative grid lg:grid-cols-[1fr_max-content]">
        {/* LEFT SIDEBAR */}
        <LeftSidebar />

        {/* CENTER BODY CONTENT - MAIN CONTENT */}
        <section className="side13 lg:ml-[307px] grid content-start gap-y-6 py-14 px-4 lg:pl-0 lg:pr-[58px] lg:py-8">
          {/* INTRO - TEXTS */}
          <article>
            <h6 className="heading-h6 text-[20px] font-semibold leading-[120%] tracking-[-0.4px] text-[#101928]">
              Here&apos;s your results:
            </h6>
            <p className="text-[14px] leading-[145%] text-[#344054] rps grid gap-y-3 mt-2">
              <span>
                Collins, here are a few ideas for you - including some things
                you may not have thought of on your own! Keep an open mind...If
                you see an idea you love, save it.
                <span className="block">&nbsp;</span>
                <span className="block">
                  This will save us lots of time in future Generators!If you
                  like most of an idea,{" "}
                  <span className="font-semibold">
                    click 🔄 to regenerate options
                  </span>
                  . If you don&apos;t like an idea, ignore it!
                </span>
              </span>

              <span>
                Sometimes you need to swing for the fences to make a home run...
                :){" "}
                <span className="block">
                  Simply answer the questions below, then hit Generate!
                </span>
              </span>
            </p>
          </article>

          {/* CONTAINER - CONTENT */}
          <section className="over-cian rounded-[10px] overflow-hidden border border-[#e4e7ec] bg-white">
            
            {/* LIST OF MODULE COMPONENT */}
            <ModuleList sasExpand={sasExpand} />

            {/* CTA - GO BACK & GENERATE MORE IDEAS*/}
            <article className="cta-container lg:mt-[132px] lg:p-6 lg:pb-0 w-full inline-flex justify-center lg:justify-between items-center">
              <button className="xgrey-600 text-[#475467] font-semibold hidden lg:inline-flex gap-2 items-center">
                <Image src={arrowLeft} alt="Arrow Left" />
                <p>Go Back</p>
              </button>
              <article className="p-6 flex justify-center">
                <button className="shadow-[0px_2px_4px_-1px_rgba(16,25,40,0.02),_0px_5px_13px_-5px_rgba(16,25,40,0.05)] py-[14px] px-4 inline-flex gap-2 text-[#F29408] text-[14px] lg:text-[16px] leading-[145%] font-semibold rounded-[6px] border-[1.5px] border-[#FCD2C2] bg-[#FFECE5]">
                  <Image src={generate500} alt="Generate more ideas" />
                  <p>Generate more ideas</p>
                </button>
              </article>
            </article>
          </section>

          {/* FOOTER MESSAGE */}
          <article className="pb-10 pt-16 flex justify-center items-center">
            <p className="xgrey-400 text-[#98a2b3] text-[14px] leading-[145%]">
              © 2023 Ainslee. All rights reserved.
            </p>
          </article>
        </section>

         {/* RIGHT SIDEBAR  */}
         <section className="lg:w-[350px] top-[72px] hidden lg:inline-flex side12 py-6 px-4 h-[calc(100vh_-_72px)] bg-white flex-col sticky ">
          {/* YOUR ASSETS */}
          <article className="flex justify-between items-center">
            <h5 className=" nav-item-header font-medium text-[12px] uppercase tracking-[0.6px] text-[#4F4D55]">
              YOUR ASSETS
            </h5>
            <div className="nav-item-bg xgrey-trans p-2 rounded-[8px]">
              <Image src={expand2} alt="Hamburger Menu" />
            </div>
          </article>

          {/* Drag & Drop + Saved */}
          <article className="in-and-out w-full grid grid-cols-2 text-center">
            <h5 className="py-4 font-semibold border-b text-[14px] active border-[#F29408] text-[#F29408]">
              Drag & Drop
            </h5>
            <h5 className="py-4 font-semibold border-b text-[14px] border-[#e4e7ec] text-[#344054]">
              Saved
            </h5>
          </article>

          {/* Search bar and filter */}
          <article className="search-and-filter grid grid-cols-[1fr_max-content] items-center justify-center gap-x-3">
            <div className="search-bar my-3 w-full rounded-md border bg-[#f9fafb] border-[#f0f2f5] flex p-[10px] items-center gap-1">
              <div>
                <Image src={search2} alt="search" />
              </div>
              <input
                className="w-full ring-0 focus:ring-0 p-0 m-0 border-none bg-transparent outline-none text-[14px] leading-5"
                type="text"
                placeholder="Search Ideas..."
              />
            </div>
            <div className="nav-item-bg2 xgrey-50 p-[10px] rounded-[8px] border border-[#f0f2f5] bg-[#f9fafb]">
              <Image src={filter} alt="filter" />
            </div>
          </article>

          {/* Active and Inactive Saved Ideas */}
          <section>
            {/* Inactive Saved Ideas */}
            <article className="inactive-saved-ideas pt-[86px] text-center flex flex-col justify-center items-center relative ">
              <div>
                <Image src={emptystate} alt="No saved Idea" />
              </div>
              <div className="mt-[-28px]">
                <h4 className="text-[#1d2739] font-semibold leading-[145%] pb-2">
                  No assets available for this tool yet
                </h4>
                <p className="max-w-[272px] text-[#667185] text-[14px] block">
                  <span>
                    Create assets in Profitable Product Generator first
                  </span>
                </p>
                <Link
                  className="text-[#F29408] font-semibold pt-6 block"
                  href="#"
                >
                  Learn more
                </Link>
              </div>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
}
