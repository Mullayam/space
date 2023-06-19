import React from "react";

import { useRouter } from "next/router";
import { FiKey } from "react-icons/fi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { HiCode } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";
import { Input } from "@/components/AdminPanel/Input";
import Menubar from "@/components/Editor/Menubar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import QuillEditor from "@/components/Editor/QuillEditor";
import DropDown from "@/components/ui/DropDown";

const Create = () => {

    return (
        <>
            <div className="max-w-[950px] flex-auto max-h-[950px] min-w-full overflow-hidden">
                <form className="border border-emphasis  rounded-lg p-4">
                    <div className="flex flex-row justify-around items-center max-w-full">
                        <div className="flex flex-col relative">
                            <div className="w-full h-[37px] m-3">
                                <Input className="min-w-max" type="text" placeholder="Company Name" />
                            </div>
                            <div className="w-full h-[37px] m-3">
                                <Input className="min-w-max max-w-[350px]" type="text" placeholder="Tagline" />
                            </div>
                            <div className="w-full h-[37px] m-3">
                                <Input className="min-w-max max-w-[350px]" type="text" placeholder="Tags" />
                            </div>
                            {/* <div className="w-full h-[37px] m-3">
                                <Input className=" max-w-[350px]" type="text" placeholder="Tagline" />
                            </div>
                            <div className="w-full h-[37px] m-3">
                                <Input className="max-w-[350px]" type="text" placeholder="Tags" />
                            </div> */}
                        </div>
                        <div className="overflow-y-hidden  w-full max-w-[550px] h-[190px] max-h-[190px]">
                            <QuillEditor />
                            {/* <Menubar placeholder="Tags" /> */}
                        </div>
                    </div>

                    {/* Removed the checkbox for now */}

                    <div className="flex flex-row justify-around mt-6">
                        <div className="max-w-[750px] w-[750px] h-[400px] max-h-[400px] overflow-hidden scrollbar-thin m-2 my-auto ">
                            {/* <Input className="min-" placeholder="Company Description" /> */}
                            <QuillEditor/>
                            {/* <Menubar placeholder="Company Description" /> */}
                        </div>
                        <div className="flex flex-col items-center ">
                            <div className="h-[90px] mb-5 text-white rounded-full w-[90px] bg-black">
                                Logo URL
                            </div>

                            <div className="w-[120px] h-[37px] m-2">
                                <Input placeholder="Logo URL" />
                            </div>

                            <div className="w-[120px] min-w-[120px] h-[37px] m-2">
                                {/* <label htmlFor="">No. of E</label> */}
                                <DropDown

                                    text={"No. of E"}
                                    options={["1-10", "11-25", "26-50", "51-100", "100+"]}
                                />
                            </div>
                            <div className="w-[120px] h-[37px] m-2">
                                <Input className="text-sm w-[120px] max-w-[120px]" placeholder="No of M" />
                                {/* <DropDown text="No. of M"
                                options={["1-10", "11-25", "26-50", "51-100", "100+"]} /> */}
                            </div>
                            <div className="w-[92px] min-w-[120px] h-[37px] m-2">
                                <Input type="text" placeholder="Funding" />
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[320px] h-[340px] max-h-[340px] m-2">
                            {/* <Menubar placeholder="About Company" /> */}
                        </div>

                        <div className="w-[550px] h-[340px] max-h-[340px] m-2">
                            {/* <Menubar placeholder="description" /> */}
                        </div>
                    </div>

                    <div className="flex justify-end w-[875px]">

                    </div>
                </form>
            </div>
        </>
    );
};

export default Create;
