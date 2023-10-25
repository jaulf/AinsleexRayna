"use client";
import Image from "next/image";
import Link from "next/link";

// Image Importation
import logo from "@/public/Images/png/logo.png";
import bell from "@/public/Images/svg/bell.svg";
import search from "@/public/Images/svg/search.svg";
import search2 from "@/public/Images/svg/search2.svg";
import down from "@/public/Images/svg/chevron-down.svg";
import userPic from "@/public/Images/png/Image.png";
import verifiedtick from "@/public/Images/svg/verified-tick.svg";
import search5 from "@/public/Images/svg/search-500.svg";
import filter7 from "@/public/Images/svg/filter-700.svg";
import calendar7 from "@/public/Images/svg/calendar-700.svg";
import bin8 from "@/public/Images/svg/bin-800.svg";
import editb4 from "@/public/Images/svg/edit-blue-400.svg";
import LeftSidebar from "@/components/General/left-sidebar";
import arrowUp from "@/public/Images/svg/arrow-up-400.svg";
import minusOrange from "@/public/Images/svg/minus-orange.svg";
import deleteOrange from "@/public/Images/svg/delete-orange-500.svg";
import arrowLeft6 from "@/public/Images/svg/arrow-left-600.svg";
import arrowRight6 from "@/public/Images/svg/arrow-right-600.svg";
import EditSavedAssetSidebar from "@/components/sidebars/edit-asset-sidebar";
import EditSavedAssetSidebarField from "@/components/sidebars/edit-asset-sidebar-field";
import hamburgerMenu from "@/public/Images/svg/hamburger-menu.svg";
import Navbar from "@/components/General/navbar";

export default function Home() {
  // display module 1 step 2 - module item
  // hide text - display below
  const displays4mit = (id) => {
    if (typeof window !== "undefined") {
      // Activating this will hide the paragraph text, fields and save asset CTA
      document.getElementById(`s4mit` + id).classList.toggle("active");
    }
  };

  // activate selected
  const selecteds4mit = (id) => {
    if (typeof window !== "undefined") {
      //
      document.getElementById(`s4mit` + id).classList.toggle("selected");
    }
  };

  // DISPLAY EDIT SAVED ASSET SIDEBAR
  const EditExpand = () => {
    if (typeof window !== "undefined") {
      document.getElementById("esas").classList.toggle("active");
    }
  };

   // DISPLAY EDIT SAVED ASSET SIDEBAR - Input Type:text Field
  const EditExpandField = () => {
    if (typeof window !== "undefined") {
      document.getElementById("esas-field").classList.toggle("active");
    }
  };

  return (
    <main>
      {/* Edit Asset */}
      <EditSavedAssetSidebar EditExpand={EditExpand} />
    <EditSavedAssetSidebarField EditExpandField={EditExpandField} />

      {/* TOP Navbar Container */}
      <Navbar />

      {/* body contents */}
      <section className="h-full bg-[#fafafa] relative body-container3 grid grid-cols-1">
        {/* Left Side Navigation Bar */}
        <LeftSidebar />

        {/* Sidebar - 2 */}
        <section className="side14 lg:ml-[307px] grid content-start gap-y-6 py-10 lg:pr-[50px]">
          {/* Content in a Container */}
          <section className="over-cian py-6 flex flex-col gap-6 rounded-[10px] overflow-hidden lg:border lg:border-[#e4e7ec] lg:bg-white">
            {/* Intro - Your Assets */}
            <article className="flex flex-col px-4 lg:px-6 gap-2">
              <h6 className="paragraph-18 text-[18px] font-semibold leading-[100%] tracking-[-0.36px] text-[#1D2739]">
                Your Assets
              </h6>
              <p className="text-[14px] leading-[145%] xgrey-600 text-[#475467] opacity-70">
                Stay up to date with our upcoming events & opportunities
              </p>
            </article>

            {/* UNDER YOUR ASSETS */}
            <section className="flex flex-col gap-4">
              {/* CONTAINER FOR SEARCH, FILTER AND DROPDOWN */}
              <article className="flex lg:justify-between flex-col lg:flex-row gap-4 px-4 lg:px-6">
                {/* LEFT - SEARCH AND FILTER */}
                <article className="flex gap-2">
                  {/* SEARCH */}
                  <article className="w-[292px] search-cont rounded-md border border-[#e4e7ec] bg-[#f9fafb] py-2 px-3 flex gap-2">
                    {/* search icon */}
                    <Image src={search5} alt="search icon" />
                    {/* input field */}
                    <input
                      className="w-full ring-0 focus:ring-0 p-0 m-0 border-none bg-transparent outline-none text-[14px] leading-5"
                      type="text"
                      placeholder="Search here..."
                    />
                  </article>

                  {/* Filter */}
                  <button className="button-type1 shrink-0 text-[14px] leading-[140%] font-semibold flex items-center gap-2 py-2 px-3 rounded-md border border-[#e4e7ec] bg-[#fff] shadow-[0px_1.5px_4px_-1px_rgba(16,25,40,0.07)] text-[#344054]">
                    <Image src={filter7} alt="Filter" />
                    <p>Filter</p>
                  </button>
                </article>

                {/* RIGHT - DROPDOWN */}
                <article className="timeline-dropdown w-max shrink-0 grow-0 lg:w-auto inline-flex py-2 pl-2 rounded-md gap-1 border border-[#e4e7ec] bg-white shadow-[0px_1.5px_4px_-1px_rgba(16,25,40,0.07)] text-[#344054]">
                  <Image className="shrink-0" src={calendar7} alt="calendar" />
                  <select className="shrink-0 ring-0 focus:ring-0 pl-0 py-0 m-0 border-none text-[#344054] text-[14px] font-medium button-type-dropdown bg-transparent">
                    <option>Last 7 days</option>
                    <option>Last 14 days</option>
                    <option>Last 28 days</option>
                    <option>Last 35 days</option>
                  </select>
                </article>
              </article>

              {/* SELECTED */}
              <article className="bg-[#F0F4F9] px-4 lgpx-6 py-2 flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* LEFT */}
                <article className="w-full flex justify-between lg:justify-start items-center gap-6 ">
                  <article className="flex items-center gap-4">
                    <Image src={minusOrange} alt="" />
                    <p className="xgrey-600 text-[#475467] font-semibold tracking-[-0.32px]">
                      2 Selected
                    </p>
                  </article>
                  <p className="font-semibold text-[#1D2739]">Select All</p>
                </article>

                {/* RIGHT */}
                <article className="w-full flex justify-between lg:justify-end items-center gap-6">
                  {/* Delete */}
                  <article className="flex gap-1 items-center">
                    <Image src={deleteOrange} alt="" />
                    <p className="text-[#F29408] font-semibold">Delete</p>
                  </article>
                  {/* DROPDOWN - BULK ACTIONS */}
                  {/* RIGHT - DROPDOWN */}
                  <article className="timeline-dropdown flex py-2 pl-2 rounded-md gap-1 border border-[#e4e7ec] bg-white shadow-[0px_1.5px_4px_-1px_rgba(16,25,40,0.07)] text-[#344054]">
                    <select className="shrink-0 ring-0 focus:ring-0 pl-0 py-0 m-0 border-none text-[#344054] text-[14px] lg:text-[16px] font-semibold button-type-dropdown bg-transparent">
                      <option>Bulk action</option>
                      <option>Last 14 days</option>
                      <option>Last 28 days</option>
                      <option>Last 35 days</option>
                    </select>
                  </article>
                </article>
              </article>

              {/* DIVIDER */}
              <div className="divider w-full h-auto px-6">
                <div className="bg-[#f0f2f5] w-full h-[1px]"></div>
              </div>

              {/* CONTAINER - LIST OF SAVED ASSETS */}
              <article className="flex px-4 lg:px-6 flex-col gap-4">
                {/* LIST 1 - SAVED ASSETS - for credibility Statement */}
                <article
                  id={"s4mit" + 1}
                  className="saved-asset-item rounded-[8px] border-[1.5px] border-[#f0f2f5] p-4 lg:p-6 bg-[#f9fafb] s4mit flex flex-col gap-6 first"
                >
                  {/* TOP */}
                  <article className="flex gap-6 lg:items-center ">
                    <article className="flex w-full gap-6 lg:items-center flex-col lg:flex-row">
                      {/* LEFT */}
                      <article className="flex lg:shrink-0 gap-4 items-center">
                        <input
                          onClick={() => selecteds4mit(1)}
                          className="w-5 h-5 shrink-0 accent-[#F29408] text-[#F29408] outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0"
                          type="checkbox"
                        />
                        <article className="flex flex-col gap-2 w-full lg:w-[359px]">
                          <h6 className="text-[16px] leading-[125%] text-[#1D2739] font-semibold">
                            Weight loss idea 1
                          </h6>
                          <p className="text-[14px] leading-[125%] text-[#4F4D55] clipText">
                            Lose weight, post-preganancy, membership...
                          </p>
                        </article>
                        <Image
                          onClick={() => displays4mit(1)}
                          className="shrink-0 lg:hidden block s2mit-rotate xcmo rotate-effect cursor-pointer "
                          src={arrowUp}
                          alt="dropdown"
                        />
                      </article>

                      {/* RIGHT */}
                      <article className="flex flex-col lg:flex-row pl-[36px] lg:pl-0 gap-4 lg:gap-0 lg:items-center w-full text-[14px] justify-between">
                        <article className="flex items-center gap-6 lg:gap-0">
                          <p className="lg:w-[234px] text-[#4F4D55] text-[14px] whitespace-nowrap clipText">
                            Credibility Statement
                          </p>
                          <p className="lg:w-[163px] text-[#4F4D55] text-[14px] whitespace-nowrap">
                            Created 28 Dec
                          </p>
                        </article>
                        <article className="flex gap-6 fourth">
                          <article
                            onClick={() => EditExpand()}
                            className="flex gap-2 items-center cursor-pointer hovOpacity-80"
                          >
                            <Image src={editb4} alt="edit" />
                            <p className="text-[14px] leading-[145%] text-[#1671D9]">
                              Edit
                            </p>
                          </article>
                          <article className="flex gap-2 items-center">
                            <Image src={bin8} alt="Delete" />
                            <p className="text-[14px] leading-[145%] text-[#1D2739]">
                              Delete
                            </p>
                          </article>
                        </article>
                      </article>
                    </article>
                    <Image
                      onClick={() => displays4mit(1)}
                      className="shrink-0 hidden lg:block s2mit-rotate xcmo rotate-effect cursor-pointer "
                      src={arrowUp}
                      alt="dropdown"
                    />
                  </article>

                  {/* Body */}
                  <article className="flex flex-col gap-4 w-full second ">
                    {/* field with lock */}
                    <article className="field-result-lock flex justify-between items-center gap-4">
                      {/* result */}
                      <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                        <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                          Micro Niche
                        </label>
                        <div className="text-[14px] text-left leading-[145%] text-[#98a2b3] bg-transparent w-full outline-none rounded-none">
                          Weight Loss
                        </div>
                      </article>
                    </article>

                    {/* field with refresh */}
                    <article className="field-result-refresh flex justify-between items-center gap-4">
                      {/* result */}
                      <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                        <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                          Core Solution
                        </label>
                        <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                          Lose weight using a ketogenic diet
                        </div>
                      </article>
                    </article>

                    {/* field with refresh */}
                    <article className="field-result-refresh flex justify-between items-center gap-4">
                      {/* result */}
                      <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                        <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                          Audience Sta...
                        </label>
                        <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                          Post-pregnancy moms
                        </div>
                      </article>
                    </article>

                    {/* field with refresh */}
                    <article className="field-result-refresh flex justify-between items-center gap-4">
                      {/* result */}
                      <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                        <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                          Product type
                        </label>

                        <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                          Membership
                        </div>
                      </article>
                    </article>
                  </article>
                </article>

                {/* LIST 2 - SAVED ASSETS - Module 1 Program ... */}
                <article
                  id={"s4mit" + 2}
                  className="saved-asset-item rounded-[8px] border-[1.5px] border-[#f0f2f5] p-4 lg:p-6 bg-[#f9fafb] s4mit flex flex-col gap-6 first"
                >
                  {/* TOP */}
                  <article className="flex gap-6 lg:items-center ">
                    <article className="flex w-full gap-6 lg:items-center flex-col lg:flex-row">
                      {/* LEFT */}
                      <article className="flex lg:shrink-0 gap-4 items-center">
                        <input
                          onClick={() => selecteds4mit(2)}
                          className="w-5 h-5 shrink-0 accent-[#F29408] text-[#F29408] outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0"
                          type="checkbox"
                        />
                        <article className="flex flex-col gap-2 w-full lg:w-[359px]">
                          <h6 className="text-[16px] leading-[125%] text-[#1D2739] font-semibold">
                            Weight loss idea 2
                          </h6>
                          <p className="text-[14px] leading-[125%] text-[#4F4D55] clipText">
                            Lose weight, post-preganancy, membership...
                          </p>
                        </article>
                        <Image
                          onClick={() => displays4mit(2)}
                          className="shrink-0 lg:hidden block s2mit-rotate xcmo rotate-effect cursor-pointer "
                          src={arrowUp}
                          alt="dropdown"
                        />
                      </article>

                      {/* RIGHT */}
                      <article className="flex flex-col lg:flex-row pl-[36px] lg:pl-0 gap-4 lg:gap-0 lg:items-center w-full text-[14px] justify-between">
                        <article className="flex items-center gap-6 lg:gap-0">
                          <p className="lg:w-[234px] text-[#4F4D55] text-[14px] whitespace-nowrap clipText">
                            Module 1: Product Idea...
                          </p>
                          <p className="lg:w-[163px] text-[#4F4D55] text-[14px] whitespace-nowrap">
                            Created 28 Dec
                          </p>
                        </article>
                        <article className="flex gap-6 fourth">
                          <article
                            onClick={() => EditExpandField()}
                            className="flex gap-2 items-center cursor-pointer hovOpacity-80"
                          >
                            <Image src={editb4} alt="edit" />
                            <p className="text-[14px] leading-[145%] text-[#1671D9]">
                              Edit
                            </p>
                          </article>
                          <article className="flex gap-2 items-center">
                            <Image src={bin8} alt="Delete" />
                            <p className="text-[14px] leading-[145%] text-[#1D2739]">
                              Delete
                            </p>
                          </article>
                        </article>
                      </article>
                    </article>
                    <Image
                      onClick={() => displays4mit(2)}
                      className="shrink-0 hidden lg:block s2mit-rotate xcmo rotate-effect cursor-pointer "
                      src={arrowUp}
                      alt="dropdown"
                    />
                  </article>

                  {/* Body */}
                  <article className="flex flex-col gap-4 w-full second">
                    {/* List of paragraphs */}
                    <article className="flex flex-col bg-[#fff] border text-[14px] leading-[145%] xgrey-500 text-[#667185] border-[#e4e7ec] rounded-md p-3 gap-3 w-full">
                      {/* result */}
                      <p>
                        Picture a canvas waiting to be painted, a blank page
                        eager to be filled, a digital realm ready to come to
                        life. It&apos;s in this creative playground that
                        we&apos;ll weave our design magic, experimenting,
                        iterating, and refining until our vision becomes
                        reality. It&apos;s in this creative playground that
                        we&apos;ll weave
                      </p>
                      <p>
                        Picture a canvas waiting to be painted, a blank page
                        eager to be filled, a digital realm ready to come to
                        life. It&apos;s in this creative playground that
                        we&apos;ll weave our design magic, experimenting,
                        iterating, and refining until our vision becomes
                        reality. It&apos;s in this creative playground that
                        we&apos;ll weave
                      </p>
                    </article>
                  </article>
                </article>
              </article>
            </section>

            {/* PAGINATION OVERVIEW */}
            <section className="px-6 hidden flex-col gap-6">
              {/* DIVIDER */}
              <div className="divider">
                <div></div>
              </div>

              {/* TOTAL RESULT NUMBERS */}
              <article className="flex items-center justify-between">
                <article className="text-[14px] leading-[145%]">
                  <p className="text-[#667185]">
                    <span className="text-[#1D2739] font-semibold">285 </span>
                    results
                  </p>
                </article>

                {/* PAGINATION */}
                <article>
                  <ul className="inline-flex gap-1 items-center text-[#1D2739] text-[14px] leading-[145%]">
                    <li className="p-2 rounded-md justify-center items-center">
                      1
                    </li>
                    <li className="p-2 rounded-md justify-center items-center">
                      2
                    </li>
                    <li className="rounded-md justify-center items-center py-[6px] px-3 border bg-[#F7F9FC] border-[#E4E7EC]">
                      3
                    </li>
                    <li className="p-2 rounded-md justify-center items-center">
                      ...
                    </li>
                    <li className="p-2 rounded-md justify-center items-center">
                      26
                    </li>
                    <li className="p-2 rounded-md justify-center items-center">
                      27
                    </li>
                  </ul>
                </article>

                {/* NEXT AND PREV */}
                <article className="flex items-center gap-4 text-[14px] text-[#475467] font-semibold">
                  {/* PREV */}
                  <article className="border rounded-[8px] border-[#D0D5DD] inline-flex items-center py-2 px-3 gap-[10px]">
                    <Image src={arrowLeft6} alt="" />
                    <p>Prev</p>
                  </article>

                  {/* NEXT */}
                  <article className="border rounded-[8px] border-[#D0D5DD] inline-flex items-center py-2 px-3 gap-[10px]">
                    <p>Next</p>
                    <Image src={arrowRight6} alt="" />
                  </article>
                </article>
              </article>
            </section>
          </section>

          {/* Footer Message */}
          <article className="pb-10 pt-16 flex justify-center items-center">
            <p className="xgrey-400 text-[#98a2b3] text-[14px] leading-[145%]">
              © 2023 Ainslee. All rights reserved.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}
