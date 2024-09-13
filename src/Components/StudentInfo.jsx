import React from 'react'
import { NavCommon } from '../common/NavCommon'
import studentimg from '../images/Studentphoto.png'
export const StudentInfo = () => {
  return (
    <>
    <NavCommon></NavCommon>
    <main className="bg-[#b4b4b4] max-w-[900px] mx-auto rounded-md my-2">
        <div className="flex flex-wrap justify-center items-center gap-4 py-2">
          <div>
            <img src={studentimg} alt="Logo"></img>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-lg">BILAL AHMAD</h3>
            <span className="text-sm">
                SP21-BSE-004
            </span>
            <h5 className='py-1'>Program <span className='font-semibold text-lg'>BSSE</span></h5>
            <h5 className='py-1'>CGPA <span className='font-semibold text-lg'>3.48</span></h5>
          </div>
        </div>
      </main>
    </>
  )
}
