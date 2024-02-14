import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "../About-us/AboutUs.jsx";
import App from "../../App.js";
import Home from "../../pages/Home.jsx";
import Newsletter from "../Newsletter/Blog.jsx";
import Login from "../login/login.jsx";
import GetTeacherByClsId from "../../Admin/GetTeacherByClsId.js";
import AddStudent from "../../Admin/Add-Student.js";
import Dashboard from "../../User/Dashboard.js";
import Register from "../../User/Register.js"
import AddTeacher from "../../Admin/Add-teacher.js";
import Examination from "../../Admin/Exam.js";
import Result from "../../Admin/Mark.js";
import Communication from "../../Admin/Announcement.js";
import GetNotification from "../../Admin/GetAnnouncement.js";
import AddAttendanceStudent from "../../Teacher/AddSAttendance.js"; 
import AddAttendanceTeacher from "../../Admin/AddTeacherAttendance.js"; 
import ForgetPass from "../../User/ForgetPass.js";
import Verify from "../../User/recover.js";
import Contact from "../../../src/components/Contact.jsx"
import Mark from "../../Admin/Mark.js"
import GetTeachers from "../../Admin/TeacherGetAll.js";
import UpdateClass from "../../Admin/EditClass.js";
import GetAllStudent from "../../Admin/Get-Student.js";
import GetAllAssign from "../../Admin/GetAllAssign.js";
import AssignTeacher from "../../Admin/AssignTeacher.js";
import GetClass from "../../Admin/GetClass.js";
import GetMark from "../../Student/GetMark.js";
import GetExam from "../../Student/GetExam.js";
import Result1 from "../../Student/Report.js";
import {GetStudentById, ModifyStudent, GetAllStudents} from "../../Teacher/Student-Crud.js";



const router = createBrowserRouter([
  { path: "/about", element: <AboutUs /> },
  { path: "/home", element: <Home /> },
  { path: "/blog", element: <Newsletter /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  {path:"/ForgetPass",element:<ForgetPass/>},
  {path:"/Verify",element:<Verify/>},
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/GetAssignById", element: <GetTeacherByClsId /> },
  { path: "/AddStudent", element: <AddStudent/> },
  { path: "/Register", element: <Register/> },
  {path: "/AddTeacher", element:<AddTeacher/>},
  {path: "/Examination", element:<Examination/>},
  {path :"/Result",element:<Result/>},
  {path:"/Communication",element:<Communication/>},
  {path:"/GetNotification",element:<GetNotification/>},
  {path:"/AddAttendanceStudent",element:<AddAttendanceStudent/>},
  {path:"/AddAttendanceTeacher",element:<AddAttendanceTeacher/>},
  {path:"/mark",element:<Mark/>},
  {path:"/getTeachers",element:<GetTeachers/>},
  {path:"/editClass",element:<UpdateClass/>},
  {path:"/Get-Student",element:<GetAllStudent/>},
  {path:"/GetAllAssign",element:<GetAllAssign/>},
  {path:"/GetClass",element:<GetClass/>},
  {path:"/GetStudentsbyId",element:<GetStudentById/>},
  {path:"/GetAllStudents",element:<GetAllStudents/>},
  {path:"/ModifyStudent",element:<ModifyStudent/>},
  {path:"/AssignTeacher",element:<AssignTeacher/>},
  {path:"/GetMark",element:<GetMark/>},
  {path:"/GetAllStudent", element:<GetAllStudent/>},
  {path:"/GetExam", element:<GetExam/>},
  {path:"/Verify",element:<Verify/>},
  {path:"/Result1",element:<Result1/>}

 
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
