"use client";
import Image from "next/image";
import React from "react";

// Image Importation
import heart from "@/public/Images/svg/heart-white.svg";
import close from "@/public/Images/svg/close-600.svg";

function SavedAssetSidebar({ sasExpand }) {
  return (
    <>
      <section
        id="sas"
        className="z-[20] fixed top-0 left-0 right-0 bottom-0 hidden justify-end items-end  bg-[rgba(0,0,0,.25)]"
      >
        {/* RIGHT - CONTAINER WITH OVERLAY */}
        <section className=" w-max bg-[#F9FAFB] h-full inline-flex flex-col justify-between">
          {/* TOP / CONTENT OF SIDEBAR */}
          <section className="p-6 flex flex-col gap-6">
            {/* SAVE AND CLOSE */}
            <article className="flex justify-between">
              <h6 className="heading-h6">Save Item</h6>
              <Image
              className="hovOpacity-80"
                onClick={() => sasExpand()}
                src={close}
                alt="modal saved asset popup"
              />
            </article>

            {/* DIVIDER */}
            <div className="divider2">
              <div></div>
            </div>

            {/* BODY */}
            <section className="flex flex-col gap-6">
              {/* INPUT FIELD */}
              <article className="flex flex-col gap-1">
                <label className="xgrey-700 paragraph-small font-medium">
                  Enter name for this item
                </label>
                <input
                  className="sas-input"
                  type="text"
                  placeholder="try it out"
                />
              </article>

              {/* DIVIDER */}
              <div className="divider2">
                <div></div>
              </div>

              {/* RESULT DETAILS */}
              <article>
                <h6 className="xgrey-700 paragraph-small font-medium">
                  Result details
                </h6>

                {/* body of 4 */}
                <article className="flex flex-col gap-4 pt-4 w-full second ">
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
            </section>
          </section>

          {/* FOOTER */}
          <section className="flex items-center gap-3 p-6 bg-white border-t border-[#E4E7EC]">
            {/* CANCEL */}
            <article
              onClick={sasExpand}
              className="w-[185px] hovOpacity-80 cursor-pointer py-[10px] flex justify-center items-center rounded-md border border-[#E4E7EC] bg-[#F0F2F5] text-[#000000] font-semibold"
            >
              <button>cancel</button>
            </article>
            {/* SAVE */} 
            <article
              onClick={sasExpand}
              className="w-[185px] hovOpacity-80 cursor-pointer py-[10px] flex justify-center items-center rounded-md border border-[#EB5017] bg-[#EB5017] text-[#FFFFFF] font-semibold gap-2"
            >
              <Image className="shrink-0" src={heart} alt="Save" />
              <button>Save</button>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}

export default SavedAssetSidebar;
