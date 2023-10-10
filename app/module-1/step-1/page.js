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
import grid from "@/public/Images/svg/grid.svg";
import home from "@/public/Images/svg/home.svg";
import help from "@/public/Images/svg/help.svg";
import help2 from "@/public/Images/svg/help2.svg";
import signout from "@/public/Images/svg/signout.svg";
import down2 from "@/public/Images/svg/chevron-down2.svg";
import menu from "@/public/Images/svg/menu.svg";
import filter from "@/public/Images/svg/filter.svg";
import emptystate from "@/public/Images/svg/empty-state.svg";
import infocircle from "@/public/Images/svg/info-circle.svg";
import infocircle2 from "@/public/Images/svg/info-circle2.svg";
import expand1 from "@/public/Images/svg/expand1.svg";
import heart from "@/public/Images/svg/heart.svg";
import home2 from "@/public/Images/svg/home2.svg";
import expand2 from "@/public/Images/svg/expand2.svg";
import modules from "@/public/Images/svg/modules.svg";
import up from "@/public/Images/svg/up.svg";
import { useEffect } from "react";

export default function Home() {

  // Only for sidebar - when introducing redux sidebar collapse and
  // and expansion will be handled on redux for consistency on multiple
  // pages for now it is just useEffect
  useEffect(() => {
    document.querySelector('.collapsed').style.display = 'none';
  }, [])

  // hiding sidebar
  const sidebarMov = () => {
    if (typeof window !== "undefined") {
      if (document.querySelector(".collapsed").style.display == 'none') {
        document.querySelector(".side-expanded").style.display = 'none';
        document.querySelector(".collapsed").style.display = 'flex';
      } else {
        document.querySelector(".side-expanded").style.display = 'flex';
        document.querySelector(".collapsed").style.display = 'none';
      }
    }
  };

  // hides modules
  const modulesExpand = () => {
    if (typeof window !== "undefined") {
      // Rotating the dropdown arrow
      document.querySelector(".xcmo").classList.toggle("roshash");
      // hiding the dropdown menu
      document.querySelector(".module-cont").classList.toggle("expanded");
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
        {/* SIDEBAR - collapsed */}
        <section className="xhidden side12 scrollabr overflow-auto top-[72px] gap-40 py-6 px-3 justify-between collapsed">
          {/* Top Navbar */}
          <section className="top-nav whitespace-nowrap">
            {/* nav with expand icon */}
            <article onClick={sidebarMov} className="s1c-b modhov border-b border-[#F0F2F5] justify-between xgrey-400">
              <div>
                <Image src={expand1} alt="Expand" />
              </div>
            </article>

            {/* dashboard & modules and assets */}
            <section>
              {/*  dashboard and modules */}
              <section className="flex flex-col gap-1">
                {/* Dashboard */}
                <article className="s1c-b modhov">
                  <div>
                    <Image src={home2} alt="Dashboard" />
                  </div>
                </article>

                {/* Modules */}
                <section className="inline-flex flex-col gap-2">
                  {/* modules - dropdown */}
                  <div
                    onClick={modulesExpand}
                    className="flex modhov justify-between items-center"
                  >
                    <article className="s1c-b modhov side2-active">
                      <div>
                        <Image src={modules} alt="Modules" />
                      </div>
                    </article>

                    <article className="rotate-effect xcmo2">
                      <Image src={up} alt="dropdown" />
                    </article>
                  </div>
                </section>
              </section>

              {/* Assets */}
              <div className="pt-2 mt-2 border-t border-[#F0F2F5]">
                <article className="s1c-b modhov">
                  <div>
                    <Image src={heart} alt="Assets" />
                  </div>
                </article>
              </div>
            </section>
          </section>

          {/* Bottom navbar */}
          <section className="xgrey-700 btm-nav">
            {/* Help */}
            <article className="s1c-b modhov">
              <div>
                <Image src={help2} alt="Help" />
              </div>
            </article>

            {/* Logout */}
            <article className="s1c-b modhov">
              <div>
                <Image src={signout} alt="Logout" />
              </div>
            </article>
          </section>
        </section>

        {/* SIDEBAR - expanded */}
        <section className="side-expanded side12 scrollabr overflow-auto top-[72px] gap-40 py-6 px-3 justify-between ">
          {/* Top Navbar */}
          <section className="top-nav whitespace-nowrap">
            {/* nav with expand icon */}
            <article onClick={sidebarMov} className="s1c-a modhov justify-between xgrey-400">
              <h6 className="paragraph-small">Nav</h6>
              <div className="cursor-point">
                <Image src={expand1} alt="Expand" />
              </div>
            </article>

            {/* dashboard & modules and assets */}
            <section>
              {/*  dashboard and modules */}
              <section className="flex flex-col gap-1">
                {/* Dashboard */}
                <article className="s1c-a">
                  <div>
                    <Image src={home2} alt="Dashboard" />
                  </div>
                  <h6 className="paragraph-small">Dashboard</h6>
                </article>

                {/* Modules */}
                <section className="inline-flex flex-col gap-2">
                  {/* modules - dropdown */}
                  <div
                    onClick={modulesExpand}
                    className="flex modhov justify-between items-center"
                  >
                    <article className="s1c-a">
                      <div>
                        <Image src={modules} alt="Modules" />
                      </div>
                      <h6 className="paragraph-small">Modules</h6>
                    </article>

                    <article className="rotate-effect xcmo">
                      <Image src={up} alt="dropdown" />
                    </article>
                  </div>

                  {/* modules dropdown - reveal */}
                  <section className="module-cont cmo">
                    <article className="module-item active">
                      <h5 className="paragraph-small">Module 01</h5>
                      <div className="invisible">
                        <Image src={down2} alt="dropdown" />
                      </div>
                    </article>
                    <article className="module-item">
                      <h5 className="paragraph-small">Module 02</h5>
                      <div className="">
                        <Image src={down2} alt="dropdown" />
                      </div>
                    </article>
                    <article className="module-item">
                      <h5 className="paragraph-small">Module 03</h5>
                      <div className="">
                        <Image src={down2} alt="dropdown" />
                      </div>
                    </article>
                    <article className="module-item">
                      <h5 className="paragraph-small">Module 04</h5>
                      <div className="">
                        <Image src={down2} alt="dropdown" />
                      </div>
                    </article>
                    <article className="module-item">
                      <h5 className="paragraph-small">Module 05</h5>
                      <div className="">
                        <Image src={down2} alt="dropdown" />
                      </div>
                    </article>
                    <article className="module-item">
                      <h5 className="paragraph-small">Module 06</h5>
                      <div className="">
                        <Image src={down2} alt="dropdown" />
                      </div>
                    </article>
                    <article className="module-item">
                      <h5 className="paragraph-small">Module 07</h5>
                      <div className="">
                        <Image src={down2} alt="dropdown" />
                      </div>
                    </article>
                  </section>
                </section>
              </section>

              {/* Assets */}
              <div className="pt-2 mt-4 border-t border-[#F0F2F5]">
                <article className="s1c-a">
                  <div>
                    <Image src={heart} alt="Assets" />
                  </div>
                  <h6 className="paragraph-small">Your Assets</h6>
                </article>
              </div>
            </section>
          </section>

          {/* Bottom navbar */}
          <section className="xgrey-700 btm-nav">
            {/* Help */}
            <article className="s1c-a">
              <div>
                <Image src={help2} alt="Help" />
              </div>
              <h6 className="paragraph-small">Help</h6>
            </article>

            {/* Logout */}
            <article className="s1c-a">
              <div>
                <Image src={signout} alt="Logout" />
              </div>
              <h6 className="paragraph-small">Log Out</h6>
            </article>
          </section>
        </section>

        {/* Sidebar - 2 */}
        <section className="side13">
          {/* Intro - Text */}
          <article>
            <h6 className="heading-h6">Profitable Product Idea Generator</h6>
            <p className="paragraph-small xgrey-700 rps">
              <span>
                Collins, simply answer the questions below, then hit{" "}
                <span className="font-semibold">Generate!</span> 
              </span>
              <span>
                Based on what you share, we&apos;ll make some new, creative,
                possibly crazy and potentially very lucrative Profitable Product
                Idea suggestions for you.  
              </span>
              <span>
                Don&apos;t get hung up on any one question (in fact, some can be
                left blank!). Work your way through the process and click
                Generate as quickly as possible to get the ideas and clarity
                flowing.
              </span>
              <span>
                You can run as many searches as you like during your 12 weeks of
                EPM, so don&apos;t &quot;save them up.&quot; Let&apos;s go! 💪🏽
              </span>
            </p>
          </article>

          {/* Alert Container */}
          <article className="info-alert">
            <div className="shrink-0">
              <Image src={infocircle} alt="Information Circle" />
            </div>
            <p className="text-[14px] leading-5">
              I highly recommend watching each Training (or reading the
              Transcripts) BEFORE using this Generator so you understand what
              we&apos;re working on!The alert & notifications component
            </p>
          </article>

          {/* Content in a Container */}
          <section className="over-cian">
            <section className="cont-container">
              {/* Step 1 */}
              <article>
                <h4 className="step-label pb-2">Step 1:</h4>
                <h6 className="label-semibold pb-2">
                  <span>
                    Which of the 20 Online Business Mega-Niches are you in?{" "}
                  </span>
                  <span className="blue-under">(Taught in M1V04)</span>{" "}
                  <span className="red-base-text">*</span>
                </h6>
                <div className="select-cont">
                  <select>
                    <option disabled selected>
                      Choose an option
                    </option>
                    <option>Howard is Here</option>
                  </select>
                </div>
              </article>

              {/* Divider */}
              <div className="divider">
                <div></div>
              </div>

              {/* Step 2 */}
              <article className="rps2">
                <h4 className="step-label">Step 2:</h4>
                <h6 className="label-semibold">
                  <span>
                    What Niche Topic (within the Mega-Niche you just selected)
                    would you like to brainstorm Micro-Niche ideas around?{" "}
                  </span>
                  <span className="blue-under">(Taught in M1V05)</span>{" "}
                </h6>
                <p className="helper-text">
                  💡Your Niche is the smaller area or topic within your larger
                  Mega-Niche. For example, Golf is a smaller topic within the
                  larger Mega-Niche of Arts, Hobbies & Sports.
                </p>
                <p className="helper-text">
                  👇Leave blank if you want to do a broader search around your
                  skills (Step 3).
                </p>
                <div className="Input-cont">
                  <input type="text" />
                </div>
              </article>

              {/* Divider */}
              <div className="divider">
                <div></div>
              </div>

              {/* Step 3 */}
              <article className="rps2">
                <h4 className="step-label">Step 3:</h4>
                <h6 className="label-semibold">
                  <span>
                    List any skills that you have so we can generate Micro-Niche
                    ideas that best match you.{" "}
                  </span>
                  <span className="blue-under block">
                    (Relates to in M1V05)
                  </span>
                </h6>
                <p className="helper-text">
                  💡For example, you could be good at building systems, or maybe
                  you&apos;re an expert golfer, or you&apos;re good at design,
                  or you have a background in manufacturing, or you&apos;re a
                  good teacher, or you&apos;re a media personality, etc.
                </p>
                <div className="Input-cont">
                  <input
                    type="text"
                    placeholder="Building systems, good speaker, good teacher, etc"
                  />
                </div>
                <p className="helper-text2 hidden">Seperate with a comma</p>
              </article>

              {/* Divider */}
              <div className="divider">
                <div></div>
              </div>

              {/* Step 4 */}
              <article className="rps2">
                <h4 className="step-label">
                  Step 4: <span className="font-normal">(Optional)</span>
                </h4>
                <h6 className="label-semibold">
                  <span>
                    {" "}
                    Are there any particular kinds of people you&apos;d like to
                    generate micro-niche ideas around?{" "}
                  </span>
                  <span className="blue-under block">
                    (Relates to in M1V05 & M1V06)
                  </span>{" "}
                </h6>
                <p className="helper-text">
                  <span>💡Here are some </span>
                  <span className="text-[#1D2739] font-semibold underline">
                    examples & ideas.
                  </span>
                </p>
                <p className="helper-text">
                  👇Leave blank if you&apos;re open to serving anybody.
                </p>
                <div className="Input-cont">
                  <input
                    type="text"
                    placeholder="e.g  Parents, single men, vegans, millenials etc (or leave blank)"
                  />
                </div>
              </article>

              {/* Divider */}
              <div className="divider">
                <div></div>
              </div>

              {/* Step 5 */}
              <article className="rps2">
                <h4 className="step-label">
                  Step 5: <span className="font-normal">(Optional)</span>
                </h4>
                <h6 className="label-semibold">
                  Do these people have any other notable demographic you want to
                  consider <span className="blue-under">(Taught in M1V06)</span>
                </h6>
                <p className="helper-text">
                  💡This includes age, education, whether they&apos;re married
                  or single, where they live and work, how much money they make,
                  whether they own their own business or work for someone else,
                  whether they&apos;re parents or not, etc.
                </p>
                <p className="helper-text">
                  👇Leave blank if you want to do a broader search.
                </p>
                <div className="Input-cont">
                  <input
                    type="text"
                    placeholder="e.g.  Single, marrried, professional, mom, 50+ (or leave blank)"
                  />
                </div>
              </article>

              {/* Divider */}
              <div className="divider">
                <div></div>
              </div>

              {/* Step 6 */}
              <article className="rps2">
                <h4 className="step-label">
                  Step 6: <span className="font-normal">(Optional)</span>
                </h4>
                <h6 className="label-semibold">
                  Do these people have any other notable psychographics you want
                  to consider
                  <span className="blue-under block">
                    (Taught in M1V06)
                  </span>{" "}
                </h6>
                <p className="helper-text">
                  💡Psychographics can include: What are they thinking and
                  feeling? What are their aspirations? What are they worried
                  about? What are they motivated by? What are their attitudes to
                  specific topics? What&apos;s their interest level in YOUR
                  topic? What else is occupying their mind or likely to stop
                  them from taking action?
                </p>
                <p className="helper-text">
                  👇Leave blank if you want to do a broader search.
                </p>
                <div className="Input-cont">
                  <input
                    type="text"
                    placeholder="Feels like life is slipping them by, driven and ambitious, wants to make a difference in the world (or leave blank)"
                  />
                </div>
              </article>

              {/* Divider */}
              <div className="divider">
                <div></div>
              </div>

              {/* Step 7 */}
              <article className="rps2">
                <h4 className="step-label">
                  Step 7: <span className="font-normal">(Optional)</span>
                </h4>
                <h6 className="label-semibold">
                  What is the specific problem you solve?
                  <span className="blue-under block">
                    (Taught in M1V04)
                  </span>{" "}
                </h6>
                <p className="helper-text">
                  💡Make sure this is an acknowledged need (i.e. a problem this
                  person recognizes they have, not just a problem you know they
                  have). Be careful not to embed your solution in the problem.
                </p>
                <p className="helper-text">
                  <i className="font-medium">For example</i>, the problems I
                  solve are: people not knowing how to design or launch a
                  course, having a course that&apos;s not getting enough sales,
                  having a course with insufficient student engagement and
                  success. The problem is{" "}
                  <span className="blue-under">not</span> people who don&apos;t
                  have an Experience Product.
                </p>
                <p className="helper-text">
                  👇Leave blank if you&apos;re not sure.
                </p>
                <div className="Input-cont">
                  <input type="text" />
                </div>
              </article>

              {/* Divider */}
              <div className="divider">
                <div></div>
              </div>

              {/* Step 8 */}
              <article className="grid gap-y-[10px]">
                <h4 className="step-label">Step 8:</h4>
                <article className="flex gap-[6px]">
                  <h6 className="label-semibold">
                    Are you creating a tribe-based or niche-based audience{" "}
                    <span className="blue-under">(Taught in M1V06)</span>{" "}
                    statement? <span className="red-base-text">*</span>
                  </h6>
                  <div>
                    <Image src={infocircle2} alt="Info Circle" />
                  </div>
                </article>

                <p className="helper-text">
                  💡Tribe-Based Audience Statements are broader, while
                  Niche-Based Audience Statements are more specific.
                </p>
                <p className="helper-text">
                  A Niche-Based Audience Statement is often simpler, clearer and
                  easier to understand and market to. A Tribe-Based Audience
                  Statement allows for greater depth and alignment, but can be
                  trickier to market.
                </p>
                <p className="helper-text">
                  A Tribe-Based Audience Statement gets you into the ballpark of
                  who your audience is and a Niche-Based Audience Statement gets
                  you onto base.
                </p>
                <p className="helper-text">
                  Neither approach is better than the other and both approaches
                  will help you land your Profitable Product Idea.
                </p>

                <article className="xgrey-700 grid gap-y-[10px]">
                  <p className="helper-text">👇Choose one option below.</p>
                  <div className="flex gap-[10px] items-center">
                    <input className="radio" type="radio" id="samp1" name="samp" />
                    <label>Tribe-based audience statement</label>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <input className="radio" type="radio" id="samp1" name="samp" />
                    <label>Niche-based audience statement</label>
                  </div>
                </article>
              </article>

              {/* Divider */}
              <div className="divider">
                <div></div>
              </div>

              {/* Step 9 */}
              <article className="rps2">
                <h4 className="step-label">Step 9:</h4>
                <h6 className="label-semibold">
                  Select experience product types you’d like to generate product
                  ideas around
                </h6>
                <p className="helper-text">
                  <span>
                    💡If you haven’t made money in your business yet, I
                    recommend starting with a 1:1 Experience Product, so you can
                    quickly test your idea before trying to leverage or scale
                    it.
                  </span>
                  <span className="block">
                    👇Select all that you&apos;d like to include. Select
                    multiple by Control+Clicking on Windows (or Command+Clicking
                    on Mac).
                  </span>
                </p>
                <div className="select-cont">
                  <select>
                    <option disabled selected>
                      Select options
                    </option>
                    <option>Howard is Here</option>
                  </select>
                </div>
              </article>
            </section>
            <article className="cta-container">
              <button className="cta-button w-full">
                Generate Profitable Product Ideas
              </button>
            </article>
          </section>

          {/* Footer Message */}

          <article className="pb-10 pt-16 flex justify-center items-center">
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
