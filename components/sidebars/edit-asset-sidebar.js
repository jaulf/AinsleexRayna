"use client";
import Image from "next/image";
import React from "react";

// Image Importation
import heart from "@/public/Images/svg/heart-black.svg";
import close from "@/public/Images/svg/close-600.svg";

function EditSavedAssetSidebar( {EditExpand }) {
  return (
    <>
      <section
        id="esas"
        className="z-[120] fixed top-0 left-0 right-0 bottom-0 hidden justify-end items-end  bg-[rgba(0,0,0,.25)]"
      >
        {/* RIGHT - CONTAINER WITH OVERLAY */}
        <section className="w-full lg:w-max bg-[#F9FAFB] h-max lg:h-full flex lg:inline-flex flex-col justify-between">
          {/* TOP / CONTENT OF SIDEBAR */}
          <section className="p-6 flex flex-col gap-6">
            {/* SAVE AND CLOSE */}
            <article className="flex justify-between">
              <h6 className="heading-h6 text-[16px] lg:text-[20px] font-semibold leading-[120%] tracking-[-0.4px] text-[#101928]">Edit Asset</h6>
              <Image
                className="hovOpacity-80"
                onClick={() => EditExpand()}
                src={close}
                alt="modal saved asset popup"
              />
            </article>

            {/* DIVIDER */}
            <div className="divider2 block w-full h-auto">
              <div className="bg-[#eaecf0] w-full h-[1px]"></div>
            </div>

            {/* BODY */}
            <section className="flex flex-col gap-6">
              {/* INPUT FIELD */}
              <article className="flex flex-col gap-1">
                <label className="text-[#344054] text-[14px] leading-[145%] font-medium">
                  Enter name for this asset
                </label>
                <input
                  className="sas-input ring-0 focus:ring-0 flex py-[11px] px-3 outline-none rounded-[6px] border border-[#f0f2f5] bg-white w-full focus:border-[#FDEACE] focus:shadow-[0px_0px_0px_4px_rgba(242,148,8,0.10)]"
                  type="text"
                  placeholder="try it out"
                />
              </article>

              {/* DIVIDER */}
              <div className="divider2">
                <div></div>
              </div>

              {/* RESULT DETAILS */}
              <article className="flex flex-col gap-4">
                <h6 className="text-[#344054] text-[14px] leading-[145%] font-medium">
                  Result details
                </h6>

                {/* BODY OF 4 */}
                <textarea
                  className="sas-input ring-0 focus:ring-0 flex py-[11px] px-3 outline-none rounded-[6px] border border-[#f0f2f5] bg-white w-full focus:border-[#FDEACE] focus:shadow-[0px_0px_0px_4px_rgba(242,148,8,0.10)] h-screen max-h-[210px] lg:max-h-[320px]"
                  placeholder="Picture a canvas waiting to be painted, a blank page eager to be filled, a digital realm ready to come to life. It's in this creative playground that we'll weave our design magic, experimenting, iterating, and refining until our vision becomes reality. loss Idea 1"
                />
              </article>
            </section> 
          </section>

          {/* FOOTER */}
          <section className="flex items-center gap-3 p-6 bg-white border-t border-[#E4E7EC]">
            {/* CANCEL */}
            <article
              onClick={EditExpand}
              className="lg:w-[185px] w-full hovOpacity-80 cursor-pointer py-[10px] flex justify-center items-center rounded-md border border-[#E4E7EC] bg-[#F0F2F5] text-[#000000] font-semibold"
            >
              <button>cancel</button>
            </article>
            {/* SAVE */}
            <article
              onClick={EditExpand}
              className="lg:w-[185px] w-full hovOpacity-80 cursor-pointer py-[10px] flex justify-center items-center rounded-md border border-[#F29408] bg-[#F29408] text-[#000619] font-semibold gap-2"
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

export default EditSavedAssetSidebar;
