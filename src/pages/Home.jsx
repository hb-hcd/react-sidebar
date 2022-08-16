import React from 'react'
import { HiMenu, HiUser, HiShoppingCart, HiHeart } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md"
import { BiMessageDetail } from "react-icons/bi"
import { DiGoogleAnalytics } from "react-icons/di"
import { AiFillFile, AiTwotoneSetting } from "react-icons/ai"
import { useState } from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
    const [open, setOpen] = useState(false)
    const menu = [
        { id: 1, icon: MdSpaceDashboard, title: "Dashboard", },
        { id: 2, icon: HiUser, title: "User", },
        { id: 3, icon: BiMessageDetail, title: "Messages", },
        { id: 4, icon: DiGoogleAnalytics, title: "Analytics", margin: true },
        { id: 5, icon: AiFillFile, title: "File Manager", },
        { id: 6, icon: HiShoppingCart, title: "Cart", },
        { id: 7, icon: HiHeart, title: "Saved", margin: true },
        { id: 8, icon: AiTwotoneSetting, title: "Settings", },
    ]
    return (
        <section className="flex">
            <div className={`bg-[#1d1d1d] min-h-screen w-72 ${open ? 'w-72' : 'w-20'} text-[#d1c5c5] px-4 duration-[0.4s]`}>
                <div className={`py-3 flex ${open ? 'justify-end' : 'translate-x-2 duration-75'}`}>
                    <HiMenu
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="flex flex-col mt-4 relative space-y-4">

                    {menu?.map((item) => (
                        <Link className={` ${item?.margin ? "mt-10" : " "
                            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                            key={item.id}
                            to={"/"}
                        >
                            <div>
                                <item.icon size={23} />
                            </div>
                            <h2 
                                style={{transitionDelay:`${item.id+3}00ms`}}
                                className={`whitespace-pre duration-300 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                                {item.title}
                            </h2>
                            <h2 className={`${open && 'hidden'} absolute opacity-0 left-40 bg-white px-2 whitespace-pre text-[#383737] text-lg rounded-md 
                             overflow-hidden group-hover:left-20 group-hover:opacity-100 duration-200`}>
                                {item.title}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="bg-[#beb7b7] text-xl font-semibold w-full p-5">
                React Tailwind
            </div>
        </section>
    )
}

export default Home