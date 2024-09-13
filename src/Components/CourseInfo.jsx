import React from "react";
import { NavCommon } from "../common/NavCommon";
import { Link } from 'react-router-dom'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Courseimg from '../images/CourseAllocation.png'
export const CourseInfo = () => {
  return (
    <>
      <NavCommon></NavCommon> 
      <main className="bg-[#b4b4b4] max-w-[900px] mx-auto rounded-md my-2">
        <div className="flex flex-wrap justify-center items-center gap-4 py-2">
          <div>
            <img src={Courseimg} alt="Logo" width={200} height={200}></img>
          </div>
          <div className="text-white">
            <h3 className="font-semibold">Course Allocation</h3>
            <p className="my-1">
              Allocate Courses till 5th <br />
              February
            </p>
            <button className="p-3 bg-[#003459] text-white rounded-md flex gap-2 border-l-4 border-b-4 border-[#00171F] hover:bg-[#0b1f2e] hover:scale-95">
            <Link to="/see-sos">See SOS</Link>
              <span className="mt-1">
                <HiMiniArrowUpRight />
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
