import React, { useState } from 'react'
import SideBar from '../component/SideBar'
import MainSection from '../component/MainSection';
import logo from "../assets/ClaimZippy.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function LandingPage() {

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div>
      <div className='h-[8.5vh]'>
        <nav className='flex items-center px-8 shadow-lg'>
          {
            isExpanded ?
              <CloseIcon className='cursor-pointer' onClick={() => setIsExpanded(!isExpanded)} sx={{ color: 'blue', width: '2.5rem', height: '2.5rem' }} />
              :
              <MenuIcon className='cursor-pointer' onClick={() => setIsExpanded(!isExpanded)} sx={{ color: 'blue', width: '2.5rem', height: '2.5rem' }} />
          }
          <div className='w-full flex items-center justify-center'>
            <img src={logo} alt="" />
          </div>
        </nav>
      </div>
      <div className='flex flex-col h-[91.5vh] lg:flex-row'>
        {
          isExpanded &&
          <div className='w-full lg:w-1/5 h-[100%]'>
            <SideBar isExpanded={isExpanded} />
          </div>
        }

        <div className={'w-full  ' + (isExpanded === false ? "lg:w-full" : "lg:w-4/5")}>
          <MainSection isExpanded={isExpanded} />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
