import React from 'react'
import Header from './Header';

type Props = {
    children: React.ReactNode
}

const SettingsWrapper = (props: Props) => {
    return (
        <>
            <div className="flex items-center md:mb-6 md:mt-0 lg:mb-8 mb-0"></div>
            <div className='flex flex-1 flex-col '>
                <div className='flex flex-1 [&>*]:flex-1'>
                    <div className='mx-auto max-w-full justify-center md:max-w-3xl'>
                        <Header/>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingsWrapper;