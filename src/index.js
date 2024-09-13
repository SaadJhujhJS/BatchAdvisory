import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './Components/LoginPage';
import { Navbar } from './Components/Navbar';
import ApplicationTable from './Components/ApplicationsTable';
import { StudentInfoTable } from './Components/StudentInfoTable';
import { EnrolledCourses } from './Components/EnrolledCourses';
import { CourseInfo } from './Components/CourseInfo';
import { SeeSos } from './Components/SeeSos';
import { StudentInfo } from './Components/StudentInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
let routes=createBrowserRouter(
  [
    {
      path:'/',
      element:<LoginPage></LoginPage>
    },
    {
      path:'nav-bar',
      element:<Navbar></Navbar>
    },
    {
      path:'applications',
      element:<ApplicationTable></ApplicationTable>
    },
    {
      path:'student-info-table',
      element:<StudentInfoTable></StudentInfoTable>
    },
    {
      path:'enrolled-courses',
      element:<EnrolledCourses></EnrolledCourses>
    },
    {
      path:'course-info',
      element:<CourseInfo></CourseInfo>
    },
    {
      path:'see-sos',
      element:<SeeSos></SeeSos>
    },
    {
      path:'student-info',
      element:<StudentInfo></StudentInfo>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
