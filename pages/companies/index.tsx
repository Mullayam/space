import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Table = dynamic(() => import("@/components/Table"), {
  ssr: false,
});

const Companies: React.FC = () => {
  const headings = ["company", "Designation", "Experience"];
  const content = [
    {
      company: "CARS24",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "Apple",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "Microsoft",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "Google",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "CARS24",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "Apple",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "Microsoft",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "Google",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "CARS24",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "Apple",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "Microsoft",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
    {
      company: "Google",
      designation: "UI/UX Designer",
      experience: "1-3 yrs",
    },
  ];

  return (
    <>
      <div className="">
        <Link href="/companies/create">
          <Button className="mb-12">Create</Button>
        </Link>
        <Table data={content} headings={headings} />
      </div>
    </>
  );
};

export default Companies;
