import Image from 'next/image';
/* import { Input } from '@/components/ui/input' */
import {Input} from '@/components/AdminPanel/Input';
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import QuillEditor from '@/components/Editor/QuillEditor';
import { Label } from '@/components/ui/label';
import SettingsWrapper from '@/components/Settings/SettingsWrapper';

type Props = {}

const Profile = (props: Props) => {
    return (
        <SettingsWrapper>
            <>
                <div className="flex">
                    <Image
                        height={64}
                        width={64}
                        alt={"Profile Pic"}
                        className="w-16 h-16 rounded-full"
                        src="https://www.gravatar.com/avatar/fallback?s=160&d=mp&r=PG"
                    />
                    {/* <Button/> */}
                    <button className="w-[130px] h-9 font-medium rounded-md border-[1px] my-auto mx-[16px] text-[0.875rem] border-lightgray">
                        Change Avatar
                    </button>
                </div>

                <div className='mt-8'>
                    <h1 className="my-[5px] text-[0.875rem] font-medium">
                        Username
                    </h1>
                    <div className="flex rounded-md">
                        <span className="border-default bg-muted text-subtle hidden h-[35] items-center rounded-l-md border border-r-0 px-3 text-sm md:inline-flex">cal.com/</span>
                        <div className='w-full relative'>
                            <Input
                                className="hover:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default min-h-9 disabled:bg-subtle block py-2 px-3 focus:border-neutral-300  focus:ring-neutral-800 focus:ring-offset-1 disabled:cursor-not-allowed w-full mb-0 mt-0 rounded-md rounded-l-none font-sans text-sm leading-4 focus:!ring-0 border focus:border border-l-default"
                            />
                        </div>
                    </div>
                </div>

                {/* <LabelInput
                    text="Full name"
                /> */}
                <div className='mt-8'>
                    <Label className='text-emphasis mb-2 block text-sm font-medium'>
                        Full Name
                    </Label>
                    <Input placeholder='Full name' />
                </div>

                <div>
                    <Label className='text-emphasis mb-2 block text-sm font-medium'>Email</Label>
                    <Input placeholder='Email' />
                </div>


                {/* /* <LabelInput
                    text="Email"
                /> */ }
                <h1 className="text-default text-[0.875rem]">
                    You may need to log out and back in to see any change take effect
                </h1>
                <h1 className="mt-[30px] font-[500] text-[0.875rem] mb-[10px]">
                    About
                </h1>
                <div className="h-fit scrollbar-thin max-w-[764px] overflow-x-hidden overflow-y-scroll">
                    <QuillEditor/>
                    {/* <Menubar placeholder="what not" /> */}
                </div>

                <div className="border-b border-emphasis">
                    <button
                        className="bg-[#eaeaea]  text-[0.875rem] hover:cursor-not-allowed text-[#9999] w-[81px] h-[35px] rounded-md my-[23px]"
                        disabled >
                        Update
                    </button>
                </div>

                <div>
                    <h1 className=" text-[0.875rem] font-semibold pt-[28px]"
                    >Danger Zone</h1>
                    <button className="py-[6px] text-[0.875rem] px-[8px] mt-[15px] rounded-md flex border-[1px] border-lightgray border-md">
                        <AiOutlineDelete
                            className="my-auto mr-2"
                        />
                        <span>Delete Account</span>
                    </button>
                </div>
            </>
        </SettingsWrapper >
    )
}

export default Profile;