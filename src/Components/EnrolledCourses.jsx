import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { NavCommon } from "../common/NavCommon";

export const EnrolledCourses = () => {
  const courses = [
    {
      code: "CSC 101",
      title: "Introduction to ICT",
      hours: "3(2,1)",
      prerequisites: "-",
    },
    {
      code: "CSC 102",
      title: "Data Structures",
      hours: "4(3,1)",
      prerequisites: "CSC 101",
    },
    {
      code: "CSC 103",
      title: "Database Systems",
      hours: "3(2,1)",
      prerequisites: "CSC 101",
    },
    {
      code: "CSC 104",
      title: "Web Development",
      hours: "3(2,1)",
      prerequisites: "CSC 102",
    },
    {
        code: "CSC 102",
        title: "Data Structures",
        hours: "4(3,1)",
        prerequisites: "CSC 101",
      },
  ];
  return (
   <>
   <NavCommon></NavCommon>
    <main className="max-w-[900px] mx-auto mt-4 p-4">
      <div className="my-4 bg-[#b4b4b4]  rounded-md">
        <div className="flex justify-between py-4 px-4">
          <div>
            <h3 className="text-white text-left text-xl mb-2 sm:text-2xl">
              Enrolled Courses
            </h3>
            <p className="text-white">
              You can view Sos for this specific student
            </p>
          </div>
          <div className="mt-2">
          <button className="p-3 bg-[#003459] text-white rounded-md flex gap-2 border-l-4 border-b-4 border-[#00171F] hover:bg-[#0b1f2e] hover:scale-95">
            See SOS{" "}
            <span className="mt-1">
              <BsArrowRightCircle />
            </span>
          </button>
          </div>
        </div>
        <div className="overflow-x-auto flex justify-center">
          <table className="table-auto text-white">
            <thead className="text-left">
              <tr className="border-b border-white bg-gray-500">
                <th className="p-2">Course Code</th>
                <th className="p-2 w-80">Course Title</th>
                <th className="p-2">Credit Hours</th>
                <th className="p-2">Pre-requisites</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {courses.map((course, index) => (
                <tr
                  key={index}
                  className="border-b border-white hover:bg-slate-600"
                >
                  <td className="p-2">{course.code}</td>
                  <td className="p-2 w-80">{course.title}</td>
                  <td className="p-2">{course.hours}</td>
                  <td className="p-2">{course.prerequisites}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
   </>
  );
};
