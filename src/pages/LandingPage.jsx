import React from 'react'
import Header from '../component/Header'
import SideBar from '../component/SideBar'
import MainSection from '../component/MainSection'

function LandingPage() {

  return (
    <div>
      <div className='h-[8.5vh]'>
        <Header />
      </div>
      <div className='flex flex-col h-[91.5vh] lg:flex-row'>
        <div className='w-full lg:w-1/5 h-[100%]'>
          <SideBar />
        </div>
        <div className='w-full lg:w-4/5'>
          <MainSection />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
