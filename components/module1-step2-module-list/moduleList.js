"use client";
import Image from "next/image";
import Link from "next/link";

//Image importation
import heartEmpty500 from "@/public/Images/svg/heart-empty-500.svg";
import arrowUp from "@/public/Images/svg/arrow-up-400.svg";
import lock from "@/public/Images/svg/lock-500.svg";
import refresh from "@/public/Images/svg/refresh-400.svg";

export default function ModuleList() {
  // display module 1 step 2 - module item
  // hide text - display below
  const displays2mit = (id) => {
    if (typeof window !== "undefined") {
      // Activating this will hide the paragraph text, fields and save asset CTA
      document.getElementById(`s2mit` + id).classList.toggle("active");
    }
  };

  return (
    <>
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
    </>
  );
}
