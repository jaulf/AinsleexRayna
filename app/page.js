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

export default function Home() {
  return (
    <main className="relative">
      {/* TOP Navbar Container */}
      <header className="bg-[#101928] sticky-0 top-0 border-[#101928] border">
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
                    Cocos Hub
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
      <section className="h-full body-container">
        {/* Sidebar - 1 */}
        <section className="side12 py-6 px-3 justify-between bottom-0 border-r border-[#ECECED]">
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
        <section className="side12 py-6 px-5 gap-2">
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
        <section></section>

        {/* Sidebar - 4 */}
        <section className="w-[350px] side12 py-6 px-4">
          {/* Saved Ideas */}
          <article className="flex justify-between items-center">
            <h5 className=" nav-item-header">Saved Ideas</h5>
            <div className="nav-item-bg">
              <Image src={menu} alt="Hamburger Menu" />
            </div>
          </article>

          {/* Input and Output */}
          <article className="in-and-out">
            <h5 className="active">Input</h5>
            <h5>Output</h5>
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
                <h4>No saved ideas</h4>
                <p>
                  <span>All your saved ideas will appear here.</span>
                  <span>You can change the filter above</span>
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
