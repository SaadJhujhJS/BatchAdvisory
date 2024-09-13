import React from 'react'
import codesandbox from '../images/CodesandboxLogo.png'
import threecircles from '../images/CirclesThreePlus.png'
import gitpullrequest from '../images/GitPullRequest.png'
import mailbox from '../images/Mailbox.png'
import { NavCommon } from '../common/NavCommon'
export const Navbar = () => {
  return (
      <>
      <NavCommon></NavCommon>
      <div className='w-1/4 h-screen bg-[#03314B]'>
      <div className='text-2xl text-white px-4 py-8 flex gap-2'>
        <img src={codesandbox} alt="" />
        <h3>Serve With Ease</h3>
      </div>
      <ul className='px-4 text-xl'>
        <li className='my-8 p-2 text-[#9E9E9E] flex gap-2 hover:scale-95 duration-200 cursor-pointer'><img src={threecircles} alt="" /> Dashboard</li>
        <li className='my-8 p-2 text-white flex gap-2 hover:scale-95 duration-200 cursor-pointer'><img src={gitpullrequest} alt="" />Allocate Courses</li>
        <li className='my-8 p-2 text-[#9E9E9E] flex gap-2 hover:scale-95 duration-200 cursor-pointer'> <img src={mailbox} alt="" />Applications</li>
      </ul>
    </div>
      </>
  )
}
