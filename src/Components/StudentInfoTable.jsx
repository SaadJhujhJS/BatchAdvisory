import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoMdArrowDown } from "react-icons/io";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logoimg from "../images/foto_Perfil.png";
import { NavCommon } from "../common/NavCommon";
export const StudentInfoTable = () => {
  return (
    <>
    <NavCommon></NavCommon>
    <main className="max-w-[370px] mx-auto mt-4 p-4">
      <div className="py-6 bg-[#b4b4b4]  rounded-md">
        <div className="flex justify-between px-4 py-8">
        <h3 className="text-white text-left text-xl sm:text-xl font-semibold p-2">
          SP21-BSSE-7A
        </h3>
        <button className="p-3 bg-[#003459] text-white rounded-md flex gap-2 border-l-4 border-b-4 border-[#00171F] hover:bg-[#0b1f2e] hover:scale-95">View SOS <span className="mt-1"><BsArrowRightCircle/></span>
        </button>
        </div>
        <div className="flex justify-start items-start relative pb-4 px-4">
          <input
            type="text"
            placeholder="Search..."
            className="sm:w-full p-2 pl-10 outline-sky-300 shadow-md rounded-md"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute top-[40%] left-6 transform -translate-y-1/2 text-gray-500"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto text-white">
            <thead className="text-left">
              <tr className="border-b border-white bg-gray-500">
                <th> </th>
                <th className="px-6 py-2 flex gap-2">Name <span className="mt-1"><IoMdArrowDown/></span></th>
                <th className="px-6 py-2">CGPA</th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr className="border-b border-white hover:bg-slate-600">
                <td class="px-6">1</td>
                <td class="p-2 w-48 flex">
                  <img src={logoimg} alt="Logo" className="py-2"></img>
                  <div className="py-2">
                    <h5 className="px-2">Bilal Ahmad</h5>
                    <h5 className="pl-2 text-sm">SP21-BSE-004</h5>
                  </div>
                </td>
                <td class="p-2 text-center">3.42</td>
              </tr>
              <tr className="border-b border-white hover:bg-slate-600">
                <td class="px-6">1</td>
                <td class="p-2 w-48 flex">
                  <img src={logoimg} alt="Logo" className="py-2"></img>
                  <div className="py-2">
                    <h5 className="px-2">Bilal Ahmad</h5>
                    <h5 className="pl-2 text-sm">SP21-BSE-004</h5>
                  </div>
                </td>
                <td class="p-2 text-center">3.42</td>
              </tr>
              <tr className="border-b border-white hover:bg-slate-600">
                <td class="px-6">1</td>
                <td class="p-2 w-48 flex">
                  <img src={logoimg} alt="Logo" className="py-2"></img>
                  <div className="py-2">
                    <h5 className="px-2">Bilal Ahmad</h5>
                    <h5 className="pl-2 text-sm">SP21-BSE-004</h5>
                  </div>
                </td>
                <td class="p-2 text-center">3.42</td>
              </tr>
              <tr className="border-b border-white hover:bg-slate-600">
                <td class="px-6">1</td>
                <td class="p-2 w-48 flex">
                  <img src={logoimg} alt="Logo" className="py-2"></img>
                  <div className="py-2">
                    <h5 className="px-2">Bilal Ahmad</h5>
                    <h5 className="pl-2 text-sm">SP21-BSE-004</h5>
                  </div>
                </td>
                <td class="p-2 text-center">3.42</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-12">
       <ul>
       <li className='hover:underline cursor-pointer'><Link to="/course-info">Course Allocation</Link></li>
        </ul>
      </div>
    </main>
    </>
  );
};
