import React from "react";
import Link from "next/link";
import { FaBriefcase, FaBuilding, FaAward } from "react-icons/fa";

const Table = ({
  headings,
  data,
}: {
  headings: string[];
  data: {
    company: string;
    designation: string;
    experience: string;
  }[];
}) => {
  function truncateString(str: string, num: number) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  return (
    <table className="w-full overflow-x-scroll mx-auto overflow-hidden rounded-full">
      {/* <thead className="items-center justify-center rounded-full">
        <tr className="text-default border-4 rounded uppercase text-sm leading-normal">
          <th className="py-3 border rounded-full px-6 text-center">#</th>
          <th className="py-3 border px-5 text-center">
            <FaBuilding className="inline mr-3" />
            <span>Company</span>
          </th>
          <th className="items-center justify-center border py-3 px-5 text-center">
            <FaBriefcase className="inline mr-3" />
            <span>Designation</span>
          </th>
          <th className="items-center justify-center border py-3 px-5 text-center">
            <FaAward className="mr-3 inline" />
            <span>Experience</span>
          </th>
          {headings.map((item, index) => (
            <th
              key={index}
              className="py-3 border border-emphasis px-6 text-center"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead> */}
      <tbody className="text-emphasis max-w-full border-muted text-sm font-light">
        {data.map(({ company, designation, experience }, index) => (
          <tr key={index} className="font-medium  ">
            <td className="border-y py-3 px-6 text-center  whitespace-nowrap">
              {index}
            </td>
            <td className="py-3 border hover:bg-gray-100 px-6 text-center">
              <Link href={company}>{truncateString(company, 15)}</Link>
            </td>
            <td className="py-3 border hover:bg-gray-100 px-6 text-center">
              <Link href={designation}>{truncateString(designation, 15)}</Link>
            </td>
            <td className="py-3 border-y hover:bg-gray-100 px-6 mx-auto text-center">
              <Link href={experience}>{truncateString(experience, 15)}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
