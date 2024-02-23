import React from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Divider } from '@mui/material';
import { profileImageUrl } from '../utils/AllData';

function TopCard() {
    return (
        <div className='flex flex-col gap-2 pb-2 boxShadow'>

            <div className='p-3 pb-0 flex justify-between items-center'>
                <h1 className='font-bold text-xs lg:text-lg text-gray-600'>Package Executive Dashboard</h1>

                <div className='flex items-center gap-1 lg:gap-3'>
                    <p className='font-semibold text-xs sm:text-sm text-black' >Welcome Apsar Shaikh</p>
                    <img className="w-6 h-6 lg:w-8 lg:h-8 rounded-full" src={profileImageUrl} alt="" />
                    <div className="relative">
                        <NotificationsNoneOutlinedIcon
                            sx={{
                                color: 'blue',
                            }}
                            className='w-6 h-6 lg:w-8 lg:h-8 '
                        />
                        <p className="bg-red-600 rounded-full absolute -top-[0.15rem] -right-[0.05rem] lg:-right-[0.07rem] w-3 h-3 lg:w-4 lg:h-4  flex items-center justify-center text-white text-[0.6rem] lg:text-[0.7rem]">
                            1
                        </p>
                    </div>

                </div>
            </div>
            <Divider />

            <section className='p-4 lg:p-7 pb-0 flex justify-between items-center gap-4 lg:gap-0'>
                <h1 className='font-bold text-xs lg:text-lg text-gray-600'>Empanelment Case Requests</h1>
                <p className="italic text-xs lg:text-[1rem] font-bold text-blue-600">View Assigned Grade</p>
            </section>


            <section className='p-7 flex lg:flex-row flex-col flex-wrap justify-between items-start gap-6'>
                <div className='flex flex-row items-center lg:flex-col gap-2 lg:gap-3 '>
                    <h1 className='text-sm lg:text-md font-[500]'>THCP Code : </h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>312568</p>
                </div>
                <div className=' flex flex-row items-center lg:flex-col gap-2 lg:gap-3 '>
                    <h1 className='text-sm lg:text-md font-[500]'>Case Id : </h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>1-56894524</p>
                </div>
                <div className=' flex flex-row items-center lg:flex-col gap-2 lg:gap-3'>
                    <h1 className='text-sm lg:text-md font-[500]'>Case Date : </h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>29 Jun 2023</p>
                </div>
                <div className=' flex flex-row items-center lg:flex-col gap-2 lg:gap-3 '>
                    <h1 className='text-sm lg:text-md font-[500]'>Zone :</h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>North</p>
                </div>
                <div className=' flex flex-row items-center lg:flex-col gap-2 lg:gap-3'>
                    <h1 className='text-sm lg:text-md font-[500]'>Provider Name : </h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>
                        12548 - Apollo Hospital
                        Nerul, Navi Mumbai
                    </p>
                </div>
                <div className='  flex flex-row items-center lg:flex-col gap-2 lg:gap-3 '>
                    <h1 className='text-sm lg:text-md font-[500]'>Status :</h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>Work flow Created</p>
                </div>
                <div className=' flex flex-row items-center lg:flex-col gap-2 lg:gap-3'>
                    <h1 className='text-sm lg:text-md font-[500]'>Last Assigned :</h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>Amit Kumar</p>
                </div>
            </section>
        </div>
    )
}

export default TopCard
