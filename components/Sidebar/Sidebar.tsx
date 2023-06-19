import React, { type ReactNode } from 'react'
import Logo from './Logo';
import TestItem from './TestItem';

import { useRouter } from 'next/router'
import { Inter } from 'next/font/google';

import { home } from '../../utils/contants';

type Props = {
    children: ReactNode;
    isLoading?: boolean;
}
const inter = Inter({
    weight: ["500"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});
const Sidebar = (props: Props) => {
    const router = useRouter();

    return (
        <div className='relative'>
            <aside
                className={`desktop-transparent bg-muted border-muted top-0 hidden h-full max-h-screen min-w-14 flex-col overflow-y-auto overflow-x-hidden border-r md:sticky md:flex lg:w-56 lg:px-4`}>
                <div className='h-full flex-col justify-between py-3 lg:pt-6'>
                    {/*  {props.isLoading ? (
                    <Skeleton className='rounded-full w-full h-10' />
                ) : (
                    router.pathname === "/" ? ( */}
                    <Logo />
                    { /*    ) : (
                        <button
                            onClick={() => {
                                router.back()
                            }}
                            className="w-full mb-[26px] h-[24px] flex px-[24px] my-auto items-center rounded-md justify-start text-[0.875rem] text-emphasis hover:bg-subtle">
                            <BiLeftArrowAlt
                                className="my-auto"
                                fontSize={20}
                            />
                            <span className="mx-6 font-semibold">
                                Back
                            </span>
                        </button>)
                )} */}
                    <div className={`text-emphasis ${inter.className}`}>
                        {home.map(({ name, href, icon }, index) => (
                            <TestItem key={index} icon={icon} name={name} href={href} />
                        ))
                        }
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar;