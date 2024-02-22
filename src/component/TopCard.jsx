import React from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Divider } from '@mui/material';
import { profileImageUrl } from '../utils/AllData';

function TopCard() {
    return (
        <div className='flex flex-col gap-2 pb-2 boxShadow '>
            <div className='p-3 pb-0 flex justify-between items-center'>
                <h1 className='font-bold text-lg text-gray-600'>Package Executive Dashboard</h1>

                <div className='flex items-center gap-3'>
                    <p className='font-semibold text-sm text-black' >Welcome Apsar Shaikh</p>
                    <img className="w-8 h-8 rounded-full" src={profileImageUrl} alt="" />
                    <div className="relative">
                        <NotificationsNoneOutlinedIcon
                            sx={{
                                color: 'blue',
                                width: '2rem',
                                height: '2rem'
                            }}
                        />
                        <p className="bg-red-600 rounded-full absolute -top-[0.15rem] -right-[0.07rem] w-4 h-4  flex items-center justify-center text-white text-[0.7rem]">
                            1
                        </p>
                    </div>

                </div>
            </div>
            <Divider />
            <section className='p-7 pb-0 flex justify-between items-center'>
                <h1 className='font-bold text-lg text-gray-600'>Empanelment Case Requests</h1>
                <p className="italic text-md font-bold text-blue-600">View Assigned Grade</p>
            </section>
            <section className='p-7 flex justify-between items-start gap-6'>
                <div className=' flex flex-col gap-3 '>
                    <h1 className='text-md font-[500]'>THCP Code : </h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>312568</p>
                </div>
                <div className=' flex flex-col gap-3 '>
                    <h1 className='text-md font-[500]'>Case Id : </h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>1-56894524</p>
                </div>
                <div className=' flex flex-col gap-3 '>
                    <h1 className='text-md font-[500]'>Case Date : </h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>29 Jun 2023</p>
                </div>
                <div className=' flex flex-col gap-3 '>
                    <h1 className='text-md font-[500]'>Zone :</h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>North</p>
                </div>
                <div className=' flex flex-col gap-3 w-[15%]'>
                    <h1 className='text-md font-[500]'>Provider Name : </h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>
                        12548 - Apollo Hospital
                        Nerul, Navi Mumbai
                    </p>
                </div>
                <div className=' flex flex-col gap-3 '>
                    <h1 className='text-md font-[500]'>Status :</h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>Work flow Created</p>
                </div>
                <div className=' flex flex-col gap-3 '>
                    <h1 className='text-md font-[500]'>Last Assigned :</h1>
                    <p className='opacity-70 text-sm text-gray-600 font-[500]'>Amit Kumar</p>
                </div>
            </section>
        </div>
    )
}

export default TopCard
