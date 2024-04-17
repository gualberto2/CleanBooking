"use client";

import React from "react";
import UpdateEntry from "./shadcn/ui/UpdateEntry";
import { StickyScroll } from "./shadcn/ui/StickyScrollReveal";
import { BentoGridThirdDemo } from "./BentoHome";

const descriptions = [
  <UpdateEntry
    key="1"
    version="NotiHub v2.0.0"
    releaseDate="January 13th, 2022"
    description="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
    isLatest={true}
  />,
  <UpdateEntry
    key="2"
    version="NotiHub v2.0.0"
    releaseDate="January 13th, 2022"
    description="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
    isLatest={false}
  />,
  <UpdateEntry
    key="3"
    version="NotiHub v1.3.0"
    releaseDate="December 7th, 2021"
    description="All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
    isLatest={false}
  />,
  <React.Fragment key="empty-fragment-no-delete-pls"></React.Fragment>,
];

const UpdateEntries = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl mb-20 flex flex-col md:flex-row justify-center items-center">
        <h2 className=" text-3xl font-bold tracking-tight  text-neutral-900 dark:text-inherit sm:text-4xl">
          Learn More
        </h2>
        <p className="mt-2 text-lg tracking-wide font-light md:ml-2 text-neutral-600">
          Get in depth feature guides.
        </p>
      </div>
      <div className="   text-neutral-900 dark:text-inherit flex  flex-col  lg:flex-row-reverse">
        <div className="mx-auto mb-6 md:mb-0 px-4">
          <BentoGridThirdDemo />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 pt-4">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-inherit sm:text-4xl">
              Update Log
            </h2>
            <p className="mt-2 text-lg tracking-wide font-light ml-2 text-neutral-600">
              Keep up with the project.
            </p>
          </div>
          <div className="w-full">
            <StickyScroll descriptions={descriptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEntries;
