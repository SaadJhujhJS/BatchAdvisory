import React from "react";
import { Link } from 'react-router-dom'
import { NavCommon } from "../common/NavCommon";
import Sosimg from "../images/Sosimage.png";
import { BsArrowRightCircle } from "react-icons/bs";
export const SeeSos = () => {
  return (
    <>
      <NavCommon></NavCommon>
      <main className="bg-[#b4b4b4]">
        <div className="flex flex-col justify-center items-center py-12">
          <div>
            <img src={Sosimg} alt="Sos" />
          </div>
          <div>
            <p className="text-center text-white">
              No SOS Available. Please Upload or <br />
              <span className="text-center">ask admin for it</span>
            </p>
            <button className="p-3 bg-[#003459] text-white rounded-md flex gap-2 border-l-4 border-b-4 border-[#00171F] hover:bg-[#0b1f2e] hover:scale-95 mx-auto my-4">
            <Link to="/student-info">See SOS</Link>
              <span className="mt-1">
                <BsArrowRightCircle />
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
