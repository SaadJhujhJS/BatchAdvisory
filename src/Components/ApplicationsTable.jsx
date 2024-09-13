import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IoMdArrowDown } from "react-icons/io";
import logoimg from "../images/foto_Perfil.png";
import { NavCommon } from "../common/NavCommon";
export default function ApplicationTable() {
  return (
    <>
    <NavCommon></NavCommon>
    <main className="max-w-[900px] mx-auto mt-4 p-4">
      <div className="my-4 bg-[#b4b4b4]  rounded-md">
      <h3 className="text-white text-left text-xl sm:text-2xl pb-8 pl-4">
        Recent Applications
      </h3>
      <div className="flex justify-start items-start relative pb-4 pl-4">
        <input
          type="text"
          placeholder="Search..."
          className="sm:w-1/2 p-2 pl-10 outline-sky-300 shadow-md rounded-md"
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
              <th className="p-2 flex gap-2">Name <span className="mt-1"><IoMdArrowDown/></span></th>
              <th className="p-2">Subject</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr className="border-b border-white hover:bg-slate-600">
              <td class="px-4">1</td>
              <td class="p-2 w-44 flex">
                <img src={logoimg} alt="Logo" className="py-2"></img>
                <div className="py-2">
                  <h5 className="px-2">Bilal Ahmad</h5>
                  <h5 className="pl-2 text-sm">SP21-BSE-004</h5>
                </div>
              </td>
              <td class="p-2 w-1/2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </td>
              <td class="p-2 ">
                <button className="text-blue-600 bg-white rounded-xl px-2 w-24">
                  Pending
                </button>
              </td>
            </tr>
            <tr className="border-b border-white hover:bg-slate-600">
              <td class="px-4">1</td>
              <td class="p-2 w-44 flex">
                <img src={logoimg} alt="Logo" className="py-2"></img>
                <div className="py-2">
                  <h5 className="px-2">Bilal Ahmad</h5>
                  <h5 className="pl-2 text-sm">SP21-BSE-004</h5>
                </div>
              </td>
              <td class="p-2 w-1/2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </td>
              <td class="p-2 ">
                <button className="text-green-600 bg-green-200 rounded-xl px-2 w-24">
                  Approved
                </button>
              </td>
            </tr>
            <tr className="border-b border-white hover:bg-slate-600">
              <td class="px-4">1</td>
              <td class="p-2 w-44 flex">
                <img src={logoimg} alt="Logo" className="py-2"></img>
                <div className="py-2">
                  <h5 className="px-2">Bilal Ahmad</h5>
                  <h5 className="pl-2 text-sm">SP21-BSE-004</h5>
                </div>
              </td>
              <td class="p-2 w-1/2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </td>
              <td class="p-2 ">
                <button className="text-red-600 bg-red-200 rounded-xl px-2 w-24">
                  Rejected
                </button>
              </td>
            </tr>
            <tr className="border-b border-white hover:bg-slate-600">
              <td class="px-4">1</td>
              <td class="p-2 w-44 flex">
                <img src={logoimg} alt="Logo" className="py-2"></img>
                <div className="py-2">
                  <h5 className="px-2">Bilal Ahmad</h5>
                  <h5 className="pl-2 text-sm">SP21-BSE-004</h5>
                </div>
              </td>
              <td class="p-2 w-1/2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </td>
              <td class="p-2 ">
                <button className="text-blue-600 bg-white rounded-xl px-2 w-24">
                  Pending
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      </main>
    </>
  );
}
