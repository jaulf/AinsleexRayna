"use client";
import Image from "next/image";
import Link from "next/link";

// Image Importation
import logo from "@/public/Images/svg/logo.svg";
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
import EditSavedAssetSidebar from "@/components/saved-asset-sidebar/edit-asset-sidebar";

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

  return (
    <main>
      {/* Edit Asset */}
      <EditSavedAssetSidebar EditExpand={EditExpand} />

      {/* TOP Navbar Container */}
      <header className="bg-[#101928] sticky z-10 top-0 border-[#101928] border">
        {/* container */}
        <div className="flex px-6 py-[14px] justify-between items-center">
          {/* Navbar Left Side */}
          <div className="flex gap-6 items-center">
            <div>
              <Image src={logo} alt="Full main logo dark" />
            </div>
            <nav className="navbar-nav block text-[14px] leading-[145%] xgrey-400">
              <Link className="" href="#">
                Home
              </Link>
              <Link className="active" href="#">
                Experience Product Masterclass
              </Link>
              <Link className="" href="#">
                Momentum
              </Link>
              <Link className="" href="#">
                LYM Lab
              </Link>
            </nav>
          </div>

          {/* Navbar Right side */}
          <div className="flex gap-7">
            {/* Bell and Search Icon */}
            <div className="flex gap-2">
              <div className="p-3">
                <Image src={bell} alt="Bell Icon" />
              </div>
              <div className="p-3">
                <Image src={search} alt="Search Icon" />
              </div>
            </div>
            {/* user profile  */}
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 relative inline-flex  justify-center items-center">
                  <Image
                    className="w-full h-auto"
                    src={userPic}
                    alt="Profile Picture"
                  />
                  <div className="absolute bottom-[-1.6px] right-[-1.6px]">
                    <Image src={verifiedtick} alt="Verified Tick" />
                  </div>
                </div>
                <article>
                  <h6 className="text-[14px] leading-[145%] font-semibold xgrey-100">
                    Coco&apos;s Hub
                  </h6>
                  <p className="text-[14px] leading-[145%] xgrey-400">alison.e@rayna.ui</p>
                </article>
              </div>
              <div>
                <Image src={down} alt="Chevron Down Icon" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* body contents */}
      <section className="h-full relative body-container3">
        {/* Left Side Navigation Bar */}
        <LeftSidebar />

        {/* Sidebar - 2 */}
        <section className="side14">
          {/* Content in a Container */}
          <section className="over-cian py-6 flex flex-col gap-6">
            {/* Intro - Your Assets */}
            <article className="flex flex-col px-6 gap-2">
              <h6 className="paragraph-18 xgrey-800">Your Assets</h6>
              <p className="text-[14px] leading-[145%] xgrey-600 opacity-70">
                Stay up to date with our upcoming events & opportunities
              </p>
            </article>

            {/* UNDER YOUR ASSETS */}
            <section className="flex flex-col gap-4">
              {/* CONTAINER FOR SEARCH, FILTER AND DROPDOWN */}
              <article className="flex justify-between px-6">
                {/* LEFT - SEARCH AND FILTER */}
                <article className="flex gap-2">
                  {/* SEARCH */}
                  <article className="w-[292px] search-cont flex gap-2">
                    {/* search icon */}
                    <Image src={search5} alt="search icon" />
                    {/* input field */}
                    <input type="text" placeholder="search here..." />
                  </article>

                  {/* Filter */}
                  <button className="button-type1 text-[#344054]">
                    <Image src={filter7} alt="Filter" />
                    <p>Filter</p>
                  </button>
                </article>

                {/* RIGHT - DROPDOWN */}
                <article className="timeline-dropdown">
                  <Image className="shrink-0" src={calendar7} alt="calendar" />
                  <select className="button-type-dropdown">
                    <option>Last 7 days</option>
                    <option>Last 14 days</option>
                    <option>Last 28 days</option>
                    <option>Last 35 days</option>
                  </select>
                </article>
              </article>

              {/* CONTENT */}
              <article className="bg-[#F7F9FC] px-6 py-2 flex items-center justify-between">
                {/* LEFT */}
                <article className="flex items-center gap-6 ">
                  <article className="flex items-center gap-4">
                    <Image src={minusOrange} alt="" />
                    <p className="xgrey-600 font-semibold tracking-[-0.32px]">
                      2 Selected
                    </p>
                  </article>
                  <p className="font-semibold xgrey-800">Select All</p>
                </article>
                {/* RIGHT */}
                <article className="flex items-center gap-6">
                  {/* Delete */}
                  <article className="flex gap-1 items-center">
                    <Image src={deleteOrange} alt="" />
                    <p className="text-[#EB5017] font-semibold">Delete</p>
                  </article>
                  {/* DROPDOWN - BULK ACTIONS */}
                  {/* RIGHT - DROPDOWN */}
                  <article className="timeline-dropdown">
                    <select className="text-[#344054] font-semibold button-type-dropdown">
                      <option>Bulk action</option>
                      <option>Last 14 days</option>
                      <option>Last 28 days</option>
                      <option>Last 35 days</option>
                    </select>
                  </article>
                </article>
              </article>

              {/* DIVIDER */}
              <div className="divider px-6">
                <div></div>
              </div>

              {/* CONTAINER - LIST OF SAVED ASSETS */}
              <article className="flex px-6 flex-col gap-4">
                {/* LIST 1 - SAVED ASSETS - for credibility Statement */}
                <article
                  id={"s4mit" + 1}
                  className="saved-asset-item s4mit first"
                >
                  {/* TOP */}
                  <article className="flex gap-6 items-center ">
                    <article className="flex w-full gap-6 items-center">
                      {/* LEFT */}
                      <article className="flex shrink-0 gap-4 items-center w-[359px]">
                        <input
                          onClick={() => selecteds4mit(1)}
                          className="checkbox"
                          type="checkbox"
                        />
                        <article className="flex flex-col gap-2">
                          <h6 className="text-[16px] leading-[125%] xgrey-800 font-semibold">
                            Weight loss idea 1
                          </h6>
                          <p className="text-[14px] leading-[125%] xgrey-1000">
                            Lose weight, post-preganancy, membership...
                          </p>
                        </article>
                      </article>

                      {/* RIGHT */}
                      <article className="flex items-center w-full text-[14px] justify-between">
                        <article className="flex items-center">
                          <p className="w-[234px] xgrey-1000">
                            Credibility Statement
                          </p>
                          <p className="w-[163px] xgrey-1000">Created 28 Dec</p>
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
                      className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer "
                      src={arrowUp}
                      alt="dropdown"
                    />
                  </article>

                  {/* Body */}
                  <article className="flex flex-col gap-4 w-full second">
                    {/* field with lock */}
                    <article className="field-result-lock">
                      {/* result */}
                      <article>
                        <label className="">Micro Niche</label>
                        <input className="" value="Weight Loss" />
                      </article>
                    </article>

                    {/* field with refresh */}
                    <article className="field-result-refresh">
                      {/* result */}
                      <article>
                        <label className="">Core Solution</label>
                        <input
                          className=""
                          value="Lose weight using a ketogenic diet"
                        />
                      </article>
                    </article>

                    {/* field with refresh */}
                    <article className="field-result-refresh">
                      {/* result */}
                      <article>
                        <label className="">Audience Sta...</label>
                        <input className="" value="Post-pregnancy moms" />
                      </article>
                    </article>

                    {/* field with refresh */}
                    <article className="field-result-refresh">
                      {/* result */}
                      <article>
                        <label className="">Product type</label>
                        <input className="" value="Membership" />
                      </article>
                    </article>
                  </article>
                </article>

                {/* LIST 2 - SAVED ASSETS - for credibility Statement */}
                <article
                  id={"s4mit" + 2}
                  className="saved-asset-item s4mit first"
                >
                  {/* TOP */}
                  <article className="flex gap-6 items-center ">
                    <article className="flex w-full gap-6 items-center">
                      {/* LEFT */}
                      <article className="flex shrink-0 gap-4 items-center w-[359px]">
                        <input
                          onClick={() => selecteds4mit(2)}
                          className="checkbox"
                          type="checkbox"
                        />
                        <article className="flex flex-col gap-2">
                          <h6 className="text-[16px] leading-[125%] xgrey-800 font-semibold">
                            Weight loss idea 2
                          </h6>
                          <p className="text-[14px] leading-[125%] xgrey-1000">
                            Lose weight, post-preganancy, membership...
                          </p>
                        </article>
                      </article>

                      {/* RIGHT */}
                      <article className="flex items-center w-full text-[14px] justify-between">
                        <article className="flex items-center">
                          <p className="w-[234px] xgrey-1000">
                            Module 1: Product Idea...
                          </p>
                          <p className="w-[163px] xgrey-1000">Created 28 Dec</p>
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
                      onClick={() => displays4mit(2)}
                      className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer "
                      src={arrowUp}
                      alt="dropdown"
                    />
                  </article>

                  {/* Body */}
                  <article className="flex flex-col gap-4 w-full second">
                    {/* List of paragraphs */}
                    <article className="flex flex-col bg-[#fff] border text-[14px] leading-[145%] xgrey-500 border-[#e4e7ec] rounded-md p-3 gap-3 w-full">
                      {/* result */}
                      <p>
                        Picture a canvas waiting to be painted, a blank page
                        eager to be filled, a digital realm ready to come to
                        life. It&apos;s in this creative playground that we&apos;ll weave
                        our design magic, experimenting, iterating, and refining
                        until our vision becomes reality. It&apos;s in this creative
                        playground that we&apos;ll weave
                      </p>
                      <p>
                        Picture a canvas waiting to be painted, a blank page
                        eager to be filled, a digital realm ready to come to
                        life. It&apos;s in this creative playground that we&apos;ll weave
                        our design magic, experimenting, iterating, and refining
                        until our vision becomes reality. It&apos;s in this creative
                        playground that we&apos;ll weave
                      </p>
                    </article>
                  </article>
                </article>
              </article>
            </section>

            {/* PAGINATION OVERVIEW */}
            <section className="px-6 flex flex-col gap-6">
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
            <p className="xgrey-400 text-[14px] leading-[145%]">
              © 2023 Ainslee. All rights reserved.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}
