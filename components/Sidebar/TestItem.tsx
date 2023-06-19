import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google';

const inter = Inter({ 
  weight: ["500"], 
  style: ["normal"], 
  subsets: ["latin"], 
  display: "swap", 
  variable: "--font-inter", 
});
type Props = {}

const TestItem = ({ name, href, icon }: {
    name: string;
    href: string;
    icon: string;
}) => {
    return (
      <Link
        aria-label="Event Types"
        className="hover:bg-emphasis  hover:text-emphasis text-default group flex items-center rounded-md py-2 px-3 font-inter font-medium [&amp;[aria-current='page']]:text-emphasis mt-0.5 text-sm"
        aria-current="page"
        href={href}
      >
        <Image
          width={16}
          height={16}
          alt={name}
          src={icon}
          className="mr-2 object-contain relative max-h-[24px]"
        />
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0 ltr:mr-2 rtl:ml-2 [&amp;[aria-current='page']]:text-inherit" aria-hidden="true" aria-current="page"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> */}
        <span className="hidden font-medium  w-full justify-between lg:flex">
          <div className="flex text-default">{name}</div>
        </span>
      </Link>
    );
}

export default TestItem