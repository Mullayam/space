import React, { type ReactNode } from 'react'
import Sidebar from './Sidebar/Sidebar'
import SidebarItem from './Sidebar/SidebarItem'
import { home, settings } from '@/utils/contants'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import SettingNav from './Sidebar/Settings/SettingNav'
import TestItem from './Sidebar/TestItem'
import SettingsSidebarItem from './Sidebar/Settings/SettingsSidebarItem'

type Props = {
    children: ReactNode
}
const inter = Inter({ subsets: ['latin'] })

const Layout = (props: Props) => {
    const router = useRouter()

    // Check if the current route is a Settings page
    const isSettingsPage = router.pathname.startsWith('/settings');

    return (
        <>
            <div className="divide-y divide-black"></div>
            <div className='min-h-screen flex flex-col'>
                <div className='flex flex-1'>
                    {isSettingsPage ? (
                        <SettingNav>
                            {settings.map(({ icon, name, subItem }, index) =>
                            (
                                <SettingsSidebarItem key={index} icon={icon} name={name} subItem={subItem} />
                            )
                            )}
                        </SettingNav>
                    ) : (
                        <Sidebar>
                            {home.map(({ name, href, icon }, index) => (
                                <SidebarItem key={index} icon={icon} name={name} href={href} />
                            ))
                            }
                        </Sidebar>)
                    }
                    <div className={`relative w-full ${inter.className} py-4 px-4 md:py-8 lg:px-12`}>
                        {props.children ?? null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;