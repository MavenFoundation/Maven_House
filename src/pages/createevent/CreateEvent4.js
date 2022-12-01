import EventCard from '@components/eventcard/EventCard'
import React from 'react'

const CreateEvent4 = ({ form }) => {
    return (
        <div>
            <header className=" px-4">
                <div className="create-post-wrapper text-white mt-6 px-0 sm:px-4">
                    <h2 className="md:text-2xl text-xl font-semibold">Review the details</h2>
                    <div className=" mt-6">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="grid grid-cols-1 gap-3 bg-[#212329] md:p-4 p-1 py-4 rounded-3xl live-preview">
                                <div className="">
                                    <div className="pl-2">
                                        <h3 className="md:text-2xl text-xl  font-semibold">Event Name</h3>
                                        <div className=" mt-4 flex gap-2">
                                            <button type="submit"
                                                className="bg-[#444444]  rounded-3xl text-[10px] px-2 text-white">Type</button>
                                            <button type="submit"
                                                className="bg-[#444444]  rounded-3xl text-[10px] px-2 text-white">Category</button>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between md:flex-row flex-col gap-3 px-2">
                                        <div>
                                            <div className="  overflow-hidden bg-white rounded-xl md:h-[280px]">
                                                <img src="/images/createevent/bhubhan-bam-wallpapaer.png" className="object-cover h-full w-full"
                                                    alt="" />
                                            </div>
                                            <div className=" mt-3">
                                                <textarea name="" placeholder="Short Description here...." id=""
                                                    className=" text-gray-900 rounded-md w-full py-2 px-3 h-[48px] resize-none " ></textarea>
                                            </div>
                                        </div>
                                        <div className="md:h-[280px] py-3 px-2 md:w-[140px] w-full flex md:flex-col flex-row justify-evenly items-center gap-2 bg-white rounded-xl">
                                            <div className="w-[125px] tablet:w-[195px] md:w-[125px] tablet:h-[100px] h-[50px] bg-slate-500 rounded-xl overflow-hidden "><img src="/images/createevent/bhubhan-bam-wallpapaer.png" className="object-cover h-full w-full"
                                                alt="" /></div>
                                            <div className="w-[125px] tablet:w-[195px] md:w-[125px] tablet:h-[100px] h-[50px] bg-slate-500 rounded-xl overflow-hidden"><img src="/images/createevent/bhubhan-bam-wallpapaer.png" className="object-cover h-full w-full"
                                                alt="" /></div>
                                            <div className="w-[125px] tablet:w-[195px] md:w-[125px] tablet:h-[100px] h-[50px] bg-slate-500 rounded-xl overflow-hidden"><img src="/images/createevent/bhubhan-bam-wallpapaer.png" className="object-cover h-full w-full"
                                                alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:ml-[18%] md:ml-[6%] mt-7 md:mt-0">
                                <h3>Event Card</h3>
                                <EventCard />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default CreateEvent4