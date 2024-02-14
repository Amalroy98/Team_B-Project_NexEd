import React from 'react'
import { Link,useLocation, useNavigate  } from 'react-router-dom';
import Header from '../Header/Header';
import { FooterContainer } from '../pages/home-style';
import Footer from '../components/Footer/Footer';

export default function Dashboard(props) {
    const navigate = useNavigate();
  const location = useLocation();
  const myProp = location.state?.myProp || null;
  const renderComponents = ()=>{
    if(myProp.role=="Admin"){
       return <ul>
       <li>
        <Link to="/AddStudent">Add student</Link>
      </li>
      <li>
        <Link to="/AddTeacher">Add teacher</Link>
      </li>
      <li>
        <Link to="/editClass"> Edit Class</Link>
      </li>
      <li>
        <Link to="/Examination">Exam</Link>
      </li>
      <li>
        <Link to="/Get-Student">Get student</Link>
      </li>
      <li>
        <Link to="/AssignTeacher">AssignTeacher</Link>
      </li>
      <li>
        <Link to="/GetAllAssign">Get all assign</Link>
      </li>
      <li>
        <Link to="/GetClass">Get class</Link>
      </li>
      <li>
        <Link to="/Communication">Communication</Link>
      </li>
      <li>
        <Link to="/GetNotification">GetNotification</Link>
      </li>
     
      <li>
        <Link to="/getTeachers">Get All Teachers</Link>
      </li>
    
       </ul>
          }
          else if(myProp.role=="Teacher"){
           return <ul>
             <li>
             <Link to="/Examination">Examination</Link>
           </li>
            <li>
             <Link to="/Result">Add Marks</Link>
           </li>
           <li>
             <Link to="/AddAttendanceStudent">AddAttendanceStudent</Link>
           </li>
           <li>
             <Link to="/GetAssignById">GetTeacherByClsId</Link>
           </li>
           <li>
             <Link to="/ClassByTeacherId">GetClassByTeacherId</Link>
           </li>
           <li>
             <Link to="/GetNotification">GetAnnouncement</Link>
           </li>
          
           <li>
             <Link to="/GetAllAssign">GetAllAssign</Link>
           </li>
           <li>
        <Link to="/mark">Mark</Link>
      </li>
           <li>
             <Link to="/GetMark">GetMark</Link>
           </li>
         
            </ul>
            }
            else if(myProp.role=="Student"){
              return <ul>
               <li>
                <Link to="/GetAllStudent">Get Student </Link>
              </li>
               <li>
                <Link to="/GetExam">GetExam</Link>
              </li>
               <li>
                <Link to="/GetNotification">GetNotification</Link>
              </li>
              <li>
                <Link to="/GetMark">GetMark</Link>
              </li>
              <li>
                <Link to="/Result1">Result Report</Link>
              </li>
               </ul>
               }
  }

 const dashboardTitle1=()=>{
let dashboardTitle = ""
if(myProp.role=="Admin"){
  dashboardTitle="Admin Dashboard"
}else if(myProp.role=="Student"){
  dashboardTitle="Student Dashboard"
}else if(myProp.role=="Teacher"){
  dashboardTitle="Teacher Dashboard"
}

return dashboardTitle;
  }
  return (
    <>
    <Header/>
        <div>
          <header>
            <h1>{dashboardTitle1()}</h1>
            {/* <h1>ABC School</h1> */}
          </header>
          <nav>
                {renderComponents()}
          </nav>
          <main>
          </main>
          {/* Outlet is like a placeholder and all requested routes are render to Outlet element  */}
        </div>
        <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
      );
}
