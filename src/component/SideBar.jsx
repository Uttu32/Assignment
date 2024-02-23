import React, { useState } from 'react';
import PieChart from '../assets/svgSection/pieChart.svg';
import Task from "../assets/svgSection/Task.svg";
import Network from "../assets/svgSection/Network.svg";
import NonNetwork from "../assets/NonNetwork.png";
import Document from "../assets/svgSection/Document.svg"
import Profile from "../assets/svgSection/Profile.svg"
import Audit from "../assets/svgSection/Audit.svg"
import Support from "../assets/svgSection/Support.svg"
import Search from "../assets/svgSection/Search.svg"

function SideBar() {
    const [sideBarSelected, setSideBarSelected] = useState("Task Queue");

    const data = [
        {
            logo: PieChart,
            name: "Dashboard",
        },
        {
            logo: Task,
            name: "Task Queue",
        },
        {
            logo: Network,
            name: "Network Providers",
        },
        {
            logo: NonNetwork,
            name: "Non Network Providers",
        },
        {
            logo: Document,
            name: "My Documents",
        },
        {
            logo: Profile,
            name: "Profile",
        },
        {
            logo: Audit,
            name: "Audit Trail",
        },
        {
            logo: Support,
            name: "Support",
        },
        {
            logo: Search,
            name: "Search",
        },
    ];

    return (
        <div className='py-1 shadow-2xl h-[100%] w-full flex flex-col '>
            {
                data?.map((ele, id) => {
                    return (
                        <div
                            key={id}
                            onClick={() => setSideBarSelected(ele.name)}
                            className={'px-3 pl-[30%] lg:pl-3 cursor-pointer py-2 flex items-center gap-3 ' + (sideBarSelected === ele.name ? "bg-blue-600 text-white"
                                : "text-gray-600")}
                        >
                            <img className='w-6 h-6' src={ele.logo} alt="" />
                            <h1 className="text-md font-semibold ">
                                {ele.name}
                            </h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideBar
