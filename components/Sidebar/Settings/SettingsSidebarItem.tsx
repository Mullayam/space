import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

interface NavItem {
    icon: string
    name: string
    subItem: {
        href: string
        name: string
    }[]
}
const SettingsSidebarItem: React.FC<NavItem> = ({ icon, name, subItem }) => {

    const router = useRouter();
    return (
        <div className='max-w-[208px]'>
            <div className="h-10 px-2 w-full flex">
                <Image
                    alt={name}
                    height={25}
                    width={25}
                    src={icon}
                    className="rounded-full my-auto w-[16px] h-[16px] "
                />
                <span
                    className="my-auto mx-[10px] leading-5 text-default text-sm font-medium"
                >
                    {name}
                </span>
            </div>

            {
                subItem?.map((item, index) =>
                (
                    <Link
                        key={index}
                        href={item.href}
                        className={`text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default max-w-[156px] group flex flex-row items-center rounded-md px-3 py-[10px] ml-7 max-w-6 mr-5 rtl:ml-5 my-0.5 h-7 false font-inter ${(router.pathname === item.href) ? "bg-gray/25" : ""}`}>
                        {item.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default SettingsSidebarItem