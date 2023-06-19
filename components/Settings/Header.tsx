import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="mx-auto block justify-between pt-8 sm:flex">
            <div className="border-subtle mb-8 flex w-full items-center border-b pb-6">
                <div>
                    <h1 className="font-cal text-emphasis mb-1 text-xl font-bold leading-5 tracking-wide">
                        Profile
                    </h1>
                    <p className="text-default text-sm ltr:mr-4 rtl:ml-4">
                        Manage settings for your Cal.com profile
                    </p>
                </div>
                <div className="ms-auto flex-shrink-0"></div>
            </div>
        </header>
    )
}

export default Header