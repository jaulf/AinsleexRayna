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
import signout from "@/public/Images/svg/signout.svg";
import down2 from "@/public/Images/svg/chevron-down2.svg";
import menu from "@/public/Images/svg/menu.svg";
import filter from "@/public/Images/svg/filter.svg";
import emptystate from "@/public/Images/svg/empty-state.svg";
import infocircle from "@/public/Images/svg/info-circle.svg";

export default function Home() {
  return (
    <main>
      {/* TOP Navbar Container */}
      <header className="bg-[#101928] sticky z-10 top-0 border-[#101928] border">
        {/* container */}
        <div className="flex p-6 justify-between items-center">
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

          {/* Right side - beginning */}
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
      <section className="h-full relative body-container">
        {/* Sidebar - 1 */}
        <section className="side12 py-6 px-3 justify-between top-[92px] border-r border-[#ECECED]">
          <nav className="sidebar-one-top gap-2">
            <a>
              <Image src={home} alt="Home" />
            </a>
            <a className="active">
              <Image src={grid} alt="Grid" />
            </a>
          </nav>
          <nav className="sidebar-one-top">
            <a>
              <Image src={help} alt="Help" />
            </a>
            <a>
              <Image src={signout} alt="Sign Out" />
            </a>
          </nav>
        </section>

        {/* Sidebar - 2 */}
        <section className="side12 top-[92px] py-6 px-5 gap-2">
          <article>
            <h5 className="xgrey-400 py-2 nav-item-header">Modules</h5>
          </article>

          <section className="module-cont">
            <article className="module-item active">
              <h5 className="paragraph-small">Module 01</h5>
              <div className=" invisible">
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
            <article className="module-item inactive">
              <h5 className="paragraph-small">Module 04</h5>
              <div className="">
                <Image src={down2} alt="dropdown" />
              </div>
            </article>
            <article className="module-item inactive">
              <h5 className="paragraph-small">Module 05</h5>
              <div className="">
                <Image src={down2} alt="dropdown" />
              </div>
            </article>
            <article className="module-item inactive">
              <h5 className="paragraph-small">Module 06</h5>
              <div className="">
                <Image src={down2} alt="dropdown" />
              </div>
            </article>
            <article className="module-item inactive">
              <h5 className="paragraph-small">Module 07</h5>
              <div className="">
                <Image src={down2} alt="dropdown" />
              </div>
            </article>
          </section>
        </section>

        {/* Sidebar - 3 */}
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
          <section className="cont-container">
            <article>
              <h4 className="step-label pb-2">Step 1:</h4>
              <h6 className="label-semibold pb-2">
                Which of the 20 Online Business Mega-Niches are you in?{" "}
                <span className="blue-under">(Taught in M1V04)</span>{" "}
                <span className="red-base-text">*</span>
              </h6>
              <div className="select-cont">
                <select>
                  <option disabled selected>
                    Choose an Option
                  </option>
                  <option>Howard is Here</option>
                </select>
              </div>
            </article>

            <article className="rps2">
              <h4 className="step-label">Step 2:</h4>
              <h6 className="label-semibold">
                Enter the niche topic you want to brainstorm micro-niche ideas
                around{" "}
              </h6>
              <p className="helper-text">
                💡Your Niche is the smaller area or topic within your larger
                Mega-Niche. For example, Golf is a smaller topic within the
                larger Mega-Niche of Arts, Hobbies & Sports.
                <p>&nbsp;</p>
              </p>
              <p className="helper-text">
                👇Leave blank if you want to do a broader search around your
                skills (Step 3).
              </p>
              <div className="Input-cont">
                <input type="text" />
              </div>
            </article>

            <article className="rps2">
              <h6 className="label-semibold">
                List skills you have so we can generate micro-niche ideas that
                best match you
              </h6>
              <p className="helper-text">
                💡For example, you could be good at building systems, or maybe
                you&apos;re an expert golfer, or you&apos;re good at design, or
                you have a background in manufacturing, or you&apos;re a good
                teacher, or you&apos;re a media personality, etc.
              </p>
              <div className="Input-cont">
                <input type="text" />
              </div>
              <p className="helper-text2">Seperate with a comma</p>
            </article>

            <article className="rps2">
              <h6 className="label-semibold">
                Are there any particular kinds of people you&apos;d like to
                generate micro-niche ideas around?
              </h6>
              <p className="helper-text">
                <span>💡Here are some </span>

                <span className="text-[#1D2739] font-semibold underline">
                  examples & ideas.
                </span>
                <span className="block">&nbsp;</span>
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

            <article className="rps2">
              <h6 className="label-semibold">
                Do these people have any other notable demographic you want to
                consider
              </h6>
              <p className="helper-text">
                💡This includes age, education, whether they&apos;re married or
                single, where they live and work, how much money they make,
                whether they own their own business or work for someone else,
                whether they&apos;re parents or not, etc.
                <span className="block">&nbsp;</span>
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

            <article className="rps2">
              <h6 className="label-semibold">
                Do these people have any other notable psychographics you want
                to consider
              </h6>
              <p className="helper-text">
                💡Psychographics can include: What are they thinking and
                feeling? What are their aspirations? What are they worried
                about? What are they motivated by? What are their attitudes to
                specific topics? What&apos;s their interest level in YOUR topic?
                What else is occupying their mind or likely to stop them from
                taking action? <span className="block">&nbsp;</span>
              </p>
              <p className="helper-text">
                👇Leave blank if you want to do a broader search.
              </p>
              <div className="Input-cont">
                <input
                  type="text"
                  placeholder="Leave blank for a broader search"
                />
              </div>
            </article>

            <article className="rps2">
              <h6 className="label-semibold">
                What is the specific problem you solve?
              </h6>
              <p className="helper-text">
                💡Make sure this is an acknowledged need (i.e. a problem this
                person recognizes they have, not just a problem you know they
                have). Be careful not to embed your solution in the problem.
                <span className="block">&nbsp;</span>
              </p>
              <p className="helper-text">
                <i className="font-medium">For example</i>, the problems I solve
                are: people not knowing how to design or launch a course, having
                a course that&apos;s not getting enough sales, having a course
                with insufficient student engagement and success. The problem is
                not people who don&apos;t have an Experience Product.
                <span className="block">&nbsp;</span>
              </p>
              <p className="helper-text">
                👇Leave blank if you&apos;re not sure.
              </p>
              <div className="Input-cont">
                <input type="text" />
              </div>
            </article>

            <article className="rps2">
              <h6 className="label-semibold pb-2">
                Are you creating a tribe-based or niche-based audience
                statement? <span className="red-base-text">*</span>
              </h6>
              <p className="helper-text">
                💡Tribe-Based Audience Statements are broader, while Niche-Based
                Audience Statements are more specific.
                <span className="block">&nbsp;</span>
              </p>
              <p className="helper-text">
                A Niche-Based Audience Statement is often simpler, clearer and
                easier to understand and market to. A Tribe-Based Audience
                Statement allows for greater depth and alignment, but can be
                trickier to market.
                <span className="block">&nbsp;</span>
              </p>
              <p className="helper-text">
                A Tribe-Based Audience Statement gets you into the ballpark of
                who your audience is and a Niche-Based Audience Statement gets
                you onto base.
                <span className="block">&nbsp;</span>
              </p>
              <p className="helper-text">
                Neither approach is better than the other and both approaches
                will help you land your Profitable Product Idea.
                <span className="block">&nbsp;</span>
              </p>

              <article>
                <p className="helper-text">👇Choose one option below.</p>
                <div>
                  <input class="radio" type="radio" id="samp1" name="samp" />
                  <label>Tribe-based audience statement</label>
                </div>
                <div>
                  <input class="radio" type="radio" id="samp1" name="samp" />
                  <label>Tribe-based audience statement</label>
                </div>
              </article>
            </article>
          </section>
        </section>

        {/* Sidebar - 4 */}
        <section className="w-[350px] top-[92px] side12 py-6 px-4">
          {/* YOUR ASSETS */}
          <article className="flex justify-between items-center">
            <h5 className=" nav-item-header text-[#4F4D55]">YOUR ASSETS</h5>
            <div className="nav-item-bg">
              <Image src={menu} alt="Hamburger Menu" />
            </div>
          </article>

          {/* Input and Output */}
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
            <div className="nav-item-bg2">
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
                <p className="max-w-[305px]">
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
