import Image from "next/image";
import Link from "next/link";

// Image Importation
import search2 from "@/public/Images/svg/search2.svg";
import filter from "@/public/Images/svg/filter.svg";
import emptystate from "@/public/Images/svg/empty-state.svg";
import infocircle from "@/public/Images/svg/info-circle.svg";
import infocircle2 from "@/public/Images/svg/info-circle2.svg";
import expand2 from "@/public/Images/svg/expand2.svg";
import LeftSidebar from "@/components/General/left-sidebar";

// NAVBAR IMPORTATION
import Navbar from "@/components/General/navbar";

export default function Home() {
  return (
    <main>
      
      {/* TOP Navbar Container */}
      <Navbar />

      {/* BODY CONTENTS */}
      <section className="h-full bg-[#fafafa] relative grid lg:grid-cols-[1fr_max-content]">
        {/* LEFT SIDEBAR */}
        <LeftSidebar />

        {/* CENTER BODY CONTENT - MAIN CONTENT */}
        <section className="lg:ml-[307px] grid gap-y-6 py-14 px-4 lg:pl-0 lg:pr-[58px] lg:py-8">
          {/* INTRO - TEXTS */}
          <article>
            <h6 className="text-[20px] font-semibold leading-[120%] tracking-[-0.4px] text-[#101928]">
              Profitable Product Idea Generator
            </h6>
            <p className="text-[14px] leading-[145%] text-[#344054] grid gap-3 mt-2">
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

          {/* ALERT CONTAINER */}
          <article className="rounded-[4px] bg-[#e3effc] border-l-[6px] border-[#0d5eba] py-3 px-2 flex gap-2 items-start text-[#1D2739]">
            {/* BLUE IMAGE IMPORTATION */}
            <div className="shrink-0">
              <Image src={infocircle} alt="Information Circle" />
            </div>
            {/* INFORMATION -TEXT */}
            <p className="text-[14px] leading-5">
              I highly recommend watching each Training (or reading the Transcripts) BEFORE using this Generator so you understand what we&apos;re working on!
            </p>
          </article>

          {/* CONTAINER - CONTENT - STEP 1 - 9 */}
          <section className="rounded-[10px] overflow-hidden border border-[#e4e7ec] bg-white">
            <section className="bg-white p-6 grid content-start gap-y-6">
              {/* Step 1 */}
              <article>
                <h4 className="font-bold leading-[145%] tracking-[0.08px] text-[#F29408] pb-2">
                  Step 1:
                </h4>
                <h6 className="text-[#101928] text-[14px] font-medium leading-[145%] pb-2">
                  <span>
                    Which of the 20 Online Business Mega-Niches are you in?{" "}
                  </span>
                  <span className="text-[#1671d9] underline font-normal">
                    (Taught in M1V04)
                  </span>{" "}
                  <span className="text-[#d42620] font-semibold">*</span>
                </h6>
                <div className="select-cont bg-[#f9fafb] rounded-md outline-none ">
                  <select className="focus:ring-0 ring-0 focus:border-0 focus:border-transparent bg-[#f9fafb] border border-[#e4e7ec] focus:outline-[#fa9874] outline-none rounded-md w-full py-[10px] px-3 text-[15px]">
                    <option disabled selected>
                      Choose an option
                    </option>
                    <option>Howard is Here</option>
                  </select>
                </div>
              </article>

              {/* Divider */}
              <div className="divider block w-full h-auto">
                <div className="bg-[#f0f2f5] w-full h-[1px]"></div>
              </div>

              {/* Step 2 */}
              <article className="rps2 grid gap-y-2 content-start">
                <h4 className="font-bold leading-[145%] tracking-[0.08px] text-[#F29408]">
                  Step 2:
                </h4>
                <h6 className="text-[#101928] text-[14px] font-medium leading-[145%]">
                  <span>
                    What Niche Topic (within the Mega-Niche you just selected)
                    would you like to brainstorm Micro-Niche ideas around?{" "}
                  </span>
                  <span className="text-[#1671d9] underline font-normal">
                    (Taught in M1V05)
                  </span>{" "}
                </h6>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  💡Your Niche is the smaller area or topic within your larger
                  Mega-Niche. For example, Golf is a smaller topic within the
                  larger Mega-Niche of Arts, Hobbies & Sports.
                </p>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  👇Leave blank if you want to do a broader search around your
                  skills (Step 3).
                </p>
                <div className="Input-cont">
                  <input
                    className="focus:ring-0 ring-0 bg-[#f9fafb] focus:outline-[#fa9874] rounded-md border border-[#e4e7ec] focus:border-[#e4e7ec] w-full py-[10px] px-3"
                    type="text"
                  />
                </div>
              </article>

              {/* Divider */}
              <div className="divider block w-full h-auto">
                <div className="bg-[#f0f2f5] w-full h-[1px]"></div>
              </div>

              {/* Step 3 */}
              <article className="rps2 grid gap-y-2 content-start">
                <h4 className="font-bold leading-[145%] tracking-[0.08px] text-[#F29408]">
                  Step 3:
                </h4>
                <h6 className="text-[#101928] text-[14px] font-medium leading-[145%]">
                  <span>
                    List any skills that you have so we can generate Micro-Niche
                    ideas that best match you.{" "}
                  </span>
                  <span className="text-[#1671d9] underline font-normal block">
                    (Relates to in M1V05)
                  </span>
                </h6>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  💡For example, you could be good at building systems, or maybe
                  you&apos;re an expert golfer, or you&apos;re good at design,
                  or you have a background in manufacturing, or you&apos;re a
                  good teacher, or you&apos;re a media personality, etc.
                </p>
                <div className="Input-cont">
                  <input
                    className="focus:ring-0 ring-0 bg-[#f9fafb] focus:outline-[#fa9874] rounded-md border border-[#e4e7ec] focus:border-[#e4e7ec] w-full py-[10px] px-3"
                    type="text"
                    placeholder="Building systems, good speaker, good teacher, etc"
                  />
                </div>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]2 hidden">
                  Seperate with a comma
                </p>
              </article>

              {/* Divider */}
              <div className="divider block w-full h-auto">
                <div className="bg-[#f0f2f5] w-full h-[1px]"></div>
              </div>

              {/* Step 4 */}
              <article className="rps2 grid gap-y-2 content-start">
                <h4 className="font-bold leading-[145%] tracking-[0.08px] text-[#F29408]">
                  Step 4: <span className="font-normal">(Optional)</span>
                </h4>
                <h6 className="text-[#101928] text-[14px] font-medium leading-[145%]">
                  <span>
                    {" "}
                    Are there any particular kinds of people you&apos;d like to
                    generate micro-niche ideas around?{" "}
                  </span>
                  <span className="text-[#1671d9] underline font-normal block">
                    (Relates to in M1V05 & M1V06)
                  </span>{" "}
                </h6>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  <span>💡Here are some </span>
                  <span className="text-[#1D2739] font-semibold underline">
                    examples & ideas.
                  </span>
                </p>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  👇Leave blank if you&apos;re open to serving anybody.
                </p>
                <div className="Input-cont">
                  <input
                    className="focus:ring-0 ring-0 bg-[#f9fafb] focus:border-[#e4e7ec] focus:outline-[#fa9874] rounded-md border border-[#e4e7ec] w-full py-[10px] px-3"
                    type="text"
                    placeholder="e.g  Parents, single men, vegans, millenials etc (or leave blank)"
                  />
                </div>
              </article>

              {/* Divider */}
              <div className="divider block w-full h-auto">
                <div className="bg-[#f0f2f5] w-full h-[1px]"></div>
              </div>

              {/* Step 5 */}
              <article className="rps2 grid gap-y-2 content-start">
                <h4 className="font-bold leading-[145%] tracking-[0.08px] text-[#F29408]">
                  Step 5: <span className="font-normal">(Optional)</span>
                </h4>
                <h6 className="text-[#101928] text-[14px] font-medium leading-[145%]">
                  Do these people have any other notable demographic you want to
                  consider{" "}
                  <span className="text-[#1671d9] underline font-normal">
                    (Taught in M1V06)
                  </span>
                </h6>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  💡This includes age, education, whether they&apos;re married
                  or single, where they live and work, how much money they make,
                  whether they own their own business or work for someone else,
                  whether they&apos;re parents or not, etc.
                </p>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  👇Leave blank if you want to do a broader search.
                </p>
                <div className="Input-cont">
                  <input
                    className="focus:ring-0 ring-0 focus:border-[#e4e7ec] bg-[#f9fafb] focus:outline-[#fa9874] rounded-md border border-[#e4e7ec] w-full py-[10px] px-3"
                    type="text"
                    placeholder="e.g.  Single, marrried, professional, mom, 50+ (or leave blank)"
                  />
                </div>
              </article>

              {/* Divider */}
              <div className="divider block w-full h-auto">
                <div className="bg-[#f0f2f5] w-full h-[1px]"></div>
              </div>

              {/* Step 6 */}
              <article className="rps2 grid gap-y-2 content-start">
                <h4 className="font-bold leading-[145%] tracking-[0.08px] text-[#F29408]">
                  Step 6: <span className="font-normal">(Optional)</span>
                </h4>
                <h6 className="text-[#101928] text-[14px] font-medium leading-[145%]">
                  Do these people have any other notable psychographics you want
                  to consider
                  <span className="text-[#1671d9] underline font-normal block">
                    (Taught in M1V06)
                  </span>{" "}
                </h6>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  💡Psychographics can include: What are they thinking and
                  feeling? What are their aspirations? What are they worried
                  about? What are they motivated by? What are their attitudes to
                  specific topics? What&apos;s their interest level in YOUR
                  topic? What else is occupying their mind or likely to stop
                  them from taking action?
                </p>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  👇Leave blank if you want to do a broader search.
                </p>
                <div className="Input-cont">
                  <input
                    className="focus:ring-0 ring-0 focus:border-[#e4e7ec] bg-[#f9fafb] focus:outline-[#fa9874] rounded-md border border-[#e4e7ec] w-full py-[10px] px-3"
                    type="text"
                    placeholder="Feels like life is slipping them by, driven and ambitious, wants to make a difference in the world (or leave blank)"
                  />
                </div>
              </article>

              {/* Divider */}
              <div className="divider block w-full h-auto">
                <div className="bg-[#f0f2f5] w-full h-[1px]"></div>
              </div>

              {/* Step 7 */}
              <article className="rps2 grid gap-y-2 content-start">
                <h4 className="font-bold leading-[145%] tracking-[0.08px] text-[#F29408]">
                  Step 7: <span className="font-normal">(Optional)</span>
                </h4>
                <h6 className="text-[#101928] text-[14px] font-medium leading-[145%]">
                  What is the specific problem you solve?
                  <span className="text-[#1671d9] underline font-normal block">
                    (Taught in M1V04)
                  </span>{" "}
                </h6>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  💡Make sure this is an acknowledged need (i.e. a problem this
                  person recognizes they have, not just a problem you know they
                  have). Be careful not to embed your solution in the problem.
                </p>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  <i className="font-medium">For example</i>, the problems I
                  solve are: people not knowing how to design or launch a
                  course, having a course that&apos;s not getting enough sales,
                  having a course with insufficient student engagement and
                  success. The problem is{" "}
                  <span className="text-[#1671d9] underline font-normal">
                    not
                  </span>{" "}
                  people who don&apos;t have an Experience Product.
                </p>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  👇Leave blank if you&apos;re not sure.
                </p>
                <div className="Input-cont">
                  <input
                    className="focus:ring-0 ring-0 focus:border-[#e4e7ec] bg-[#f9fafb] focus:outline-[#fa9874] rounded-md border border-[#e4e7ec] w-full py-[10px] px-3"
                    type="text"
                  />
                </div>
              </article>

              {/* Divider */}
              <div className="divider block w-full h-auto">
                <div className="bg-[#f0f2f5] w-full h-[1px]"></div>
              </div>

              {/* Step 8 */}
              <article className="grid gap-y-[10px]">
                <h4 className="font-bold leading-[145%] tracking-[0.08px] text-[#F29408]">
                  Step 8:
                </h4>
                <article className="flex gap-[6px]">
                  <h6 className="text-[#101928] text-[14px] font-medium leading-[145%]">
                    Are you creating a tribe-based or niche-based audience{" "}
                    <span className="text-[#1671d9] underline font-normal">
                      (Taught in M1V06)
                    </span>{" "}
                    statement?{" "}
                    <span className="text-[#d42620] font-semibold">*</span>
                  </h6>
                  <div className="shrink-0">
                    <Image src={infocircle2} alt="Info Circle" />
                  </div>
                </article>

                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  💡Tribe-Based Audience Statements are broader, while
                  Niche-Based Audience Statements are more specific.
                </p>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  A Niche-Based Audience Statement is often simpler, clearer and
                  easier to understand and market to. A Tribe-Based Audience
                  Statement allows for greater depth and alignment, but can be
                  trickier to market.
                </p>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  A Tribe-Based Audience Statement gets you into the ballpark of
                  who your audience is and a Niche-Based Audience Statement gets
                  you onto base.
                </p>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                  Neither approach is better than the other and both approaches
                  will help you land your Profitable Product Idea.
                </p>

                <article className="text-[#344054] grid gap-y-[10px]">
                  <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
                    👇Choose one option below.
                  </p>
                  <div className="flex gap-[10px] items-center">
                    <input
                      className="accent-[#F29408] text-[#F29408] outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0 radio w-5 h-5"
                      type="radio"
                      id="samp1"
                      name="samp"
                    />
                    <label>Tribe-based audience statement</label>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <input
                      className="accent-[#F29408] text-[#F29408] outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0 radio w-5 h-5"
                      type="radio"
                      id="samp1"
                      name="samp"
                    />
                    <label>Niche-based audience statement</label>
                  </div>
                </article>
              </article>

              {/* Divider */}
              <div className="divider block w-full h-auto">
                <div className="bg-[#f0f2f5] w-full h-[1px]"></div>
              </div>

              {/* Step 9 */}
              <article className="rps2 grid gap-y-2 content-start">
                <h4 className="font-bold leading-[145%] tracking-[0.08px] text-[#F29408]">
                  Step 9:
                </h4>
                <h6 className="text-[#101928] text-[14px] font-medium leading-[145%]">
                  Select experience product types you’d like to generate product
                  ideas around
                </h6>
                <p className="helper-text text-[#667185] text-[14px] leading-[145%]">
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
                <div className="select-cont rounded-md  outline-none ">
                  <select className="focus:ring-0 ring-0 focus:border-0 focus:border-transparent bg-[#f9fafb] border-[#e4e7ec] border focus:outline-[#fa9874] outline-none rounded-md w-full py-[10px] px-3 text-[15px]">
                    <option disabled selected>
                      Select options
                    </option>
                    <option>Howard is Here</option>
                  </select>
                </div>
              </article>
            </section>
            <article className="cta-container p-6 w-full border-t bg-[#fcfcfc]">
              <button className="cta-button bg-[#F29408] p-[14px] text-center text-[#000619] font-semibold leading-[145%] rounded-md w-full">
                Generate Profitable Product Ideas
              </button>
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
