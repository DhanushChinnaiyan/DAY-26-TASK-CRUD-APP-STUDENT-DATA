
import { useState } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import AddStudents from './COMPONENTS/addstudent';
import Dashboard from './COMPONENTS/dashboard';
import { EditStudents } from './COMPONENTS/editstudent';
import { StudentsDetails } from './COMPONENTS/studentdetail';
import { StudentProfile } from './COMPONENTS/studentprofile';
import data from './DATA/data'

function App() {

  const[studentsData,setStudentsData]=useState(data)
  return (
    <div className="App">
      <Switch>
           <Route path="/dashboard">
              <Dashboard/>
           </Route>
           <Route exact path="/">
            <Redirect to = "/dashboard"/>
           </Route>
           <Route path="/add-data">
              <AddStudents
              studentsData={studentsData}
              setStudentsData={setStudentsData}
              
              />
           </Route>
          <Route path="/students-list">
              <StudentsDetails
              studentsData={studentsData}
              setStudentsData={setStudentsData}
              />
          </Route>
          <Route path="/student/:id">
            <StudentProfile
            studentsData={studentsData}
            />
          </Route>

          <Route path="/edit/:id">
            <EditStudents
            studentsData={studentsData}
            setStudentsData={setStudentsData}
            />
          </Route>
      </Switch>
    </div>
  );
}

export default App;


