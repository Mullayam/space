import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    href: string;
    name: string;
    icon: string;
}

const SidebarItem = (props: Props) => {
    return (
        <Link href={props.href}>
            <button
                className="w-full py-2 px-3 mt-0.5 hover:bg-emphasis group text-[14px] justify-start flex h-fit rounded-md text-emphasis"
            >
                <Image fill alt={props.name} src={props.icon}
                    className="svg_icon text-[14px] leading-5 mr-2 my-auto flex-shrink-0 ltr:mr-2 stroke-2 rtl:ml-2 max-h-[17px] "
                />
                <span className="font-medium text-start justify-between lg:flex leading-5 text-emphasis text-[0.875rem] my-auto">
                    {props.name}
                </span>
            </button>
        </Link>

    )
}

export default SidebarItem;