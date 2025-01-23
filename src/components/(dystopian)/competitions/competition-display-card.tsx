"use client";

import React from "react";
import BgImage from "public/images/signin.jpg";
import Image from "next/image";
import MarqueeContainer from "@/components/(dystopian)/common/marquee-container";
import { Share_Tech } from "next/font/google";
import { motion } from "motion/react";
import { type Prisma } from "@prisma/client";

type CompetitionWithDetails = Prisma.CompetitionGetPayload<{
  include: { competitionDetails: true };
}>;

interface Props {
  comp: CompetitionWithDetails;
}

const sharetech = Share_Tech({ weight: "400", subsets: ["latin"] });

const CompDisplayCard = ({ comp }: Props) => {
  return (
    <motion.div
      className="relative flex w-full flex-col items-center md:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* TODO: Add actual image instead of placeholder */}
      <Image
        // src={props.img ?? BgImage}
        src={BgImage}
        alt={comp.competitionDetails.name || "Untitled Event"}
        width={500}
        height={500}
        className="z-10 -mt-40 aspect-square min-h-96 w-[calc(100%-100px)] max-w-[500px] border-2 border-amber-50 object-cover md:-ml-40 md:mt-0 md:h-[400px] md:w-[400px] lg:-ml-32 lg:h-[450px] lg:w-[450px]"
      />
      <div className="mt-12 flex w-full flex-col gap-5 md:mt-0">
        <div className="flex flex-wrap items-baseline gap-2.5 px-5">
          <motion.div
            className="rounded-full bg-neutral-600 px-5 py-1 text-base uppercase text-amber-50"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            programming
          </motion.div>
          <motion.div
            className="rounded-full bg-neutral-600 px-5 py-1 text-base uppercase text-amber-50"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 1.1 }}
          >
            ml/ai
          </motion.div>
        </div>
        <motion.div
          className="px-5 text-6xl font-bold uppercase lg:text-7xl"
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {comp.competitionDetails.name || "Upcoming Event"}
        </motion.div>
        <motion.div
          className={`max-w-screen-md px-5 ${sharetech.className} text-lg tracking-tight`}
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="hidden md:block lg:hidden">
            {comp.competitionDetails.description.slice(0, 250)}
            ...
          </div>
          <div className="hidden lg:block xl:hidden">
            {comp.competitionDetails.description.slice(0, 400)}
            ...
          </div>
          <div className="block md:hidden xl:block">
            {comp.competitionDetails.description}
          </div>
        </motion.div>
        <motion.div
          className="mt-12 flex h-16 w-full flex-col justify-center overflow-clip border-2 border-l-0 border-amber-50 bg-amber-50/[0.7] text-3xl font-normal uppercase text-neutral-900 md:h-12 md:text-2xl"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 2, delay: 1, ease: "anticipate" }}
        >
          <MarqueeContainer
            text={[
              "view all details",
              comp.competitionDetails.name || "Upcoming Event",
              comp.competitionDetails.begin_time.toLocaleString() +
                " to " +
                comp.competitionDetails.end_time.toLocaleString(),
              "register for " +
                (comp.competitionDetails.name || "upcoming event"),
            ]}
            href={`/competitions/${comp.competitionDetails.slug}`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompDisplayCard;
