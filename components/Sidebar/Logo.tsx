import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
    return (
      <header className="items-center mb-6 justify-between lg:flex md:hidden">
        <Link className="px-2" href={"/"}>
          <h3 className="inline logo">
            <strong>
              <Image
                width={74}
                height={30}
                className="w-auto h-6"
                title="cal"
                src="https://learn-manifest-files-enjoys.b-cdn.net/assets/space-dark.png"
                alt="cal.com"
              />
            </strong>
          </h3>
        </Link>
        <div className="flex space-x-2 rtl:space-x-reverse">
          <button className="text-default group text-sm py-2 px-3 font-medium lg:p-1 lg:hover:bg- rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 flex-shrink-0 text-inherit"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </header>
    );
}

export default Logo