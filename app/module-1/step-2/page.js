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
import filter from "@/public/Images/svg/filter.svg";
import emptystate from "@/public/Images/svg/empty-state.svg";
import expand2 from "@/public/Images/svg/expand2.svg";
import LeftSidebar from "@/components/left-sidebar";
import arrowRight from "@/public/Images/svg/arrow-right.svg";
import arrowLeft from "@/public/Images/svg/arrow-left.svg";
import arrowUp from "@/public/Images/svg/arrow-up-400.svg";
import generate500 from "@/public/Images/svg/generate-o-500.svg";
import heartEmpty500 from "@/public/Images/svg/heart-empty-500.svg";
import lock from "@/public/Images/svg/lock-500.svg";
import refresh from "@/public/Images/svg/refresh-400.svg";

export default function Home() {
  // display module 1 step 2 - module item
  // hide text - display below
  const displays2mit = (id) => {
    if (typeof window !== "undefined") {
      // Activating this will hide the paragraph text, fields and save asset CTA
      document.getElementById(`s2mit` + id).classList.toggle("active");
      // rotate the dropdown Icon
      document.g
    }
  };

  return (
    <main>
      {/* TOP Navbar Container */}
      <header className="bg-[#101928] sticky z-10 top-0 border-[#101928] border">
        {/* container */}
        <div className="flex px-6 py-[14px] justify-between items-center">
          {/* Navbar Left Side */}
          <div className="flex gap-6 items-center">
            <div>
              <Image src={logo} alt="Full main logo dark" />
            </div>
            <nav className="navbar-nav block paragraph-small xgrey-400">
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
                  <h6 className="paragraph-small font-semibold xgrey-100">
                    Coco&apos;s Hub
                  </h6>
                  <p className="paragraph-small xgrey-400">alison.e@rayna.ui</p>
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
      <section className="h-full relative body-container2">
        {/* Left Side Navigation Bar */}
        <LeftSidebar />

        {/* Sidebar - 2 */}
        <section className="side13">
          {/* Intro - Text */}
          <article>
            <h6 className="heading-h6">Here’s your results:</h6>
            <p className="paragraph-small xgrey-700 rps">
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
                  . If you don't like an idea, ignore it!
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

          {/* Content in a Container */}
          <section className="over-cian">
            <section className="cont-container">
              {/* Module 1 */}
              <section
                onClick={() => displays2mit(1)}
                id={"s2mit" + 1}
                className="xbgrey-100 s2mit"
              >
                {/* head */}
                <article className="s2mit-sub first">
                  {/* Result header and body plus dropdown arrow */}
                  <article>
                    <h6 className="paragraph-15 xgrey-700">
                      Profitable Product Idea Option 1
                    </h6>
                    <p className="s2mit-text paragraph-small xgrey-500 pt-2">
                      Losing weight using a kletogenic diet
                    </p>
                  </article>
                  {/* clicking this will hide the body and save asset */}
                  <article className="shrink-0 s2mit-rotate xcmo rotate-effect">
                    <Image src={arrowUp} alt="dropdown" />
                  </article>
                </article>

                {/* body of 4 */}
                <article className="flex flex-col gap-4 w-full second ">
                  {/* field with lock */}
                  <article className="field-result-lock">
                    {/* result */}
                    <article>
                      <label className="">Micro Niche</label>
                      <input className="" value="Weight Loss" />
                    </article>
                    {/* lock */}
                    <article>
                      <Image src={lock} alt="lock" />
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
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>

                  {/* field with refresh */}
                  <article className="field-result-refresh">
                    {/* result */}
                    <article>
                      <label className="">Audience Sta...</label>
                      <input className="" value="Post-pregnancy moms" />
                    </article>
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>

                  {/* field with refresh */}
                  <article className="field-result-refresh">
                    {/* result */}
                    <article>
                      <label className="">Product type</label>
                      <input className="" value="Membership" />
                    </article>
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>
                </article>

                {/* save asset */}
                <article className="paragraph-small text-[#EB5017] font-semibold flex gap-2 items-center third">
                  <Image src={heartEmpty500} alt="Empty" />
                  <p>Save this asset</p>
                </article>
              </section>
              {/* Module 2 */}
              <section
                onClick={() => displays2mit(2)}
                id={"s2mit" + 2}
                className="xbgrey-100 s2mit"
              >
                {/* head */}
                <article className="s2mit-sub first">
                  {/* Result header and body plus dropdown arrow */}
                  <article>
                    <h6 className="paragraph-15 xgrey-700">
                      Profitable Product Idea Option 2
                    </h6>
                    <p className="s2mit-text paragraph-small xgrey-500 pt-2">
                      Losing weight using a kletogenic diet
                    </p>
                  </article>
                  {/* clicking this will hide the body and save asset */}
                  <article className="shrink-0 s2mit-rotate xcmo rotate-effect">
                    <Image src={arrowUp} alt="dropdown" />
                  </article>
                </article>

                {/* body of 4 */}
                <article className="flex flex-col gap-4 w-full second ">
                  {/* field with lock */}
                  <article className="field-result-lock">
                    {/* result */}
                    <article>
                      <label className="">Micro Niche</label>
                      <input className="" value="Weight Loss" />
                    </article>
                    {/* lock */}
                    <article>
                      <Image src={lock} alt="lock" />
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
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>

                  {/* field with refresh */}
                  <article className="field-result-refresh">
                    {/* result */}
                    <article>
                      <label className="">Audience Sta...</label>
                      <input className="" value="Post-pregnancy moms" />
                    </article>
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>

                  {/* field with refresh */}
                  <article className="field-result-refresh">
                    {/* result */}
                    <article>
                      <label className="">Product type</label>
                      <input className="" value="Membership" />
                    </article>
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>
                </article>

                {/* save asset */}
                <article className="paragraph-small text-[#EB5017] font-semibold flex gap-2 items-center third">
                  <Image src={heartEmpty500} alt="Empty" />
                  <p>Save this asset</p>
                </article>
              </section>

              {/* Module 3 */}
              <section
                onClick={() => displays2mit(3)}
                id={"s2mit" + 3}
                className="xbgrey-100 s2mit"
              >
                {/* head */}
                <article className="s2mit-sub first">
                  {/* Result header and body plus dropdown arrow */}
                  <article>
                    <h6 className="paragraph-15 xgrey-700">
                      Profitable Product Idea Option 3
                    </h6>
                    <p className="s2mit-text paragraph-small xgrey-500 pt-2">
                      Losing weight using a kletogenic diet
                    </p>
                  </article>
                  {/* clicking this will hide the body and save asset */}
                  <article className="shrink-0 s2mit-rotate xcmo rotate-effect">
                    <Image src={arrowUp} alt="dropdown" />
                  </article>
                </article>

                {/* body of 4 */}
                <article className="flex flex-col gap-4 w-full second ">
                  {/* field with lock */}
                  <article className="field-result-lock">
                    {/* result */}
                    <article>
                      <label className="">Micro Niche</label>
                      <input className="" value="Weight Loss" />
                    </article>
                    {/* lock */}
                    <article>
                      <Image src={lock} alt="lock" />
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
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>

                  {/* field with refresh */}
                  <article className="field-result-refresh">
                    {/* result */}
                    <article>
                      <label className="">Audience Sta...</label>
                      <input className="" value="Post-pregnancy moms" />
                    </article>
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>

                  {/* field with refresh */}
                  <article className="field-result-refresh">
                    {/* result */}
                    <article>
                      <label className="">Product type</label>
                      <input className="" value="Membership" />
                    </article>
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>
                </article>

                {/* save asset */}
                <article className="paragraph-small text-[#EB5017] font-semibold flex gap-2 items-center third">
                  <Image src={heartEmpty500} alt="Empty" />
                  <p>Save this asset</p>
                </article>
              </section>

              {/* Module 4 */}
              <section
                onClick={() => displays2mit(4)}
                id={"s2mit" + 4}
                className="xbgrey-100 s2mit"
              >
                {/* head */}
                <article className="s2mit-sub first">
                  {/* Result header and body plus dropdown arrow */}
                  <article>
                    <h6 className="paragraph-15 xgrey-700">
                      Profitable Product Idea Option 4
                    </h6>
                    <p className="s2mit-text paragraph-small xgrey-500 pt-2">
                      Losing weight using a kletogenic diet
                    </p>
                  </article>
                  {/* clicking this will hide the body and save asset */}
                  <article className="shrink-0 s2mit-rotate xcmo rotate-effect">
                    <Image src={arrowUp} alt="dropdown" />
                  </article>
                </article>

                {/* body of 4 */}
                <article className="flex flex-col gap-4 w-full second ">
                  {/* field with lock */}
                  <article className="field-result-lock">
                    {/* result */}
                    <article>
                      <label className="">Micro Niche</label>
                      <input className="" value="Weight Loss" />
                    </article>
                    {/* lock */}
                    <article>
                      <Image src={lock} alt="lock" />
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
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>

                  {/* field with refresh */}
                  <article className="field-result-refresh">
                    {/* result */}
                    <article>
                      <label className="">Audience Sta...</label>
                      <input className="" value="Post-pregnancy moms" />
                    </article>
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>

                  {/* field with refresh */}
                  <article className="field-result-refresh">
                    {/* result */}
                    <article>
                      <label className="">Product type</label>
                      <input className="" value="Membership" />
                    </article>
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>
                </article>

                {/* save asset */}
                <article className="paragraph-small text-[#EB5017] font-semibold flex gap-2 items-center third">
                  <Image src={heartEmpty500} alt="Empty" />
                  <p>Save this asset</p>
                </article>
              </section>

              {/* Module 5 */}
              <section
                onClick={() => displays2mit(5)}
                id={"s2mit" + 5}
                className="xbgrey-100 s2mit"
              >
                {/* head */}
                <article className="s2mit-sub first">
                  {/* Result header and body plus dropdown arrow */}
                  <article>
                    <h6 className="paragraph-15 xgrey-700">
                      Profitable Product Idea Option 5
                    </h6>
                    <p className="s2mit-text paragraph-small xgrey-500 pt-2">
                      Losing weight using a kletogenic diet
                    </p>
                  </article>
                  {/* clicking this will hide the body and save asset */}
                  <article className="shrink-0 s2mit-rotate xcmo rotate-effect">
                    <Image src={arrowUp} alt="dropdown" />
                  </article>
                </article>

                {/* body of 4 */}
                <article className="flex flex-col gap-4 w-full second ">
                  {/* field with lock */}
                  <article className="field-result-lock">
                    {/* result */}
                    <article>
                      <label className="">Micro Niche</label>
                      <input className="" value="Weight Loss" />
                    </article>
                    {/* lock */}
                    <article>
                      <Image src={lock} alt="lock" />
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
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>

                  {/* field with refresh */}
                  <article className="field-result-refresh">
                    {/* result */}
                    <article>
                      <label className="">Audience Sta...</label>
                      <input className="" value="Post-pregnancy moms" />
                    </article>
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>

                  {/* field with refresh */}
                  <article className="field-result-refresh">
                    {/* result */}
                    <article>
                      <label className="">Product type</label>
                      <input className="" value="Membership" />
                    </article>
                    {/* refresh */}
                    <article>
                      <Image src={refresh} alt="refresh" />
                    </article>
                  </article>
                </article>

                {/* save asset */}
                <article className="paragraph-small text-[#EB5017] font-semibold flex gap-2 items-center third">
                  <Image src={heartEmpty500} alt="Empty" />
                  <p>Save this asset</p>
                </article>
              </section>

            </section>

            {/* Generate more Ideas CTA */}
            <section>
              <article className="p-6 flex justify-center mt-[132px]">
                <button className="ora-cta-sec">
                  <Image src={generate500} alt="Generate more ideas" />
                  <p>Generate more ideas</p>
                </button>
              </article>
            </section>

            {/* CTA down section 2 */}
            <article className="cta-container inline-flex justify-between items-center">
              <button className="xgrey-600 font-semibold inline-flex gap-2 items-center">
                <Image src={arrowLeft} alt="Arrow Left" />
                <p>Go Back</p>
              </button>
              <button className="cta-button inline-flex items-center gap-6">
                <span>Next: Credibility Statement Generator</span>
                <Image className="" src={arrowRight} alt="Arrow Right" />
              </button>
            </article>
          </section>

          {/* Footer Message */}

          <article className="pb-10 pt-[167px] flex justify-center items-center">
            <p className="xgrey-400 paragraph-small">
              © 2023 Ainslee. All rights reserved.
            </p>
          </article>
        </section>

        {/* Sidebar - 3 */}
        <section className="w-[350px] top-[72px] side12 py-6 px-4">
          {/* YOUR ASSETS */}
          <article className="flex justify-between items-center">
            <h5 className=" nav-item-header text-[#4F4D55]">YOUR ASSETS</h5>
            <div className="nav-item-bg xgrey-trans">
              <Image src={expand2} alt="Hamburger Menu" />
            </div>
          </article>

          {/* Drag & Drop + Saved */}
          <article className="in-and-out">
            <h5 className="active">Drag & Drop</h5>
            <h5>Saved</h5>
          </article>

          {/* Search bar and filter */}
          <article className="search-and-filter">
            <div className="search-bar">
              <div>
                <Image src={search2} alt="search" />
              </div>
              <input type="text" placeholder="Search Ideas..." />
            </div>
            <div className="nav-item-bg2 xgrey-50">
              <Image src={filter} alt="filter" />
            </div>
          </article>

          {/* Active and Inactive Saved Ideas */}
          <section>
            {/* Inactive Saved Ideas */}
            <article className="inactive-saved-ideas relative ">
              <div>
                <Image src={emptystate} alt="No saved Idea" />
              </div>
              <div className="mt-[-28px]">
                <h4>No assets available for this tool yet</h4>
                <p className="max-w-[272px]">
                  <span>
                    Create assets in Profitable Product Generator first
                  </span>
                </p>
                <Link href="#">Learn more</Link>
              </div>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
}
