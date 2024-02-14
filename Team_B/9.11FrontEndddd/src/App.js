// import React, { Fragment } from "react";
// import Header from "./Header/Header";
// import { FooterContainer } from "./Footer/home-style";
// import Footer from "./Footer/Footer";
// import HeroSection from "./Hero-Section/HeroSection";


// const Home = () => {
//   return (
//     <Fragment>
//       <Header />
//       <HeroSection />
//       <FooterContainer>
//         <Footer />
//       </FooterContainer>
//     </Fragment>
//   );
// };

// export default Home;



import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{ Height: "100vh", overflow: "hidden" }}>
      <Home />
    </div>
  );
}

export default App;

















// import logo from './logo.svg';
// import "./App.css";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import AddStudent from './Admin/Add-Student';
// import AddTeacher from './Admin/Add-teacher';
// import AdminDashboard from './Admin/Admin-dashboard';
// import GetStudents from './Admin/Get-Student';
// import Register from './User/Register';
// import GetTeachers from './Admin/TeacherGetAll';

// import Login from './User/Login';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import GetAllStudent from './Admin/Get-Student';
// import AddClass from './Admin/AddClass';
// import GetClass from './Admin/GetClass';
// import UpdateClass from './Admin/EditClass';
// import AssignTeacher from './Admin/AssignTeacher';
// import GetAllAssign from './Admin/GetAllAssign';
// import GetAssignById from './Admin/GetTeacherByClsId';
// import ClassByTeacherId from  './Admin/GetClassByTeacherId';
// import Examination from './Admin/Exam';
// import GetExam from './Admin/GetExam';
// import Result from './Admin/Mark';
// import Dashboard from './User/Dashboard';
// function App() {
//   return (
//     <div className="App">


//       <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="dashboard" element={<Dashboard />} />
//       <Route path="Register" element={<Register/>}/>
//       <Route path="Add-Student" element={<AddStudent/>}/>
//       <Route path="Get-Student" element={<GetAllStudent/>}/>
//       <Route path="Add-teacher" element={<AddTeacher />} />
//        <Route path="TeacherGetAll" element={<GetTeachers />} /> 
//        <Route path="AddClass" element={<AddClass/>}/>
//        <Route path="GetClass" element={<GetClass/>}/>
//        <Route path="EditClass" element={<UpdateClass/>}/>
//        <Route path="AssignTeacher" element={<AssignTeacher/>}/>
//        <Route path="GetAllAssign" element={<GetAllAssign/>}/>
//        <Route path="GetAssignById" element={<GetAssignById/>}/>
//       <Route path="Exam" element={<Examination/>}/>
//        <Route path="GetClassByTeacherId" element={<ClassByTeacherId/>}/>
//       <Route path="GetExam" element={<GetExam/>}/>
//       <Route path="Mark" element={<Result/>}/>
      
//       </Routes>      
//       </BrowserRouter>
   
//     </div>
//   );
// }

// export default App;
