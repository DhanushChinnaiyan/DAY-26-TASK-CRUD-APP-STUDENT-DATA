import React from 'react';
import {AppBar,Button,Toolbar} from '@mui/material'
import { useHistory } from 'react-router-dom';




const Base = ({title,children}) => {
   const history = useHistory()

  const logoutMethod = () => {
    localStorage.removeItem("user-name")
    history.push("/dashboard")
  }


    return(
         <div className='mainComponent base'>


            <AppBar position='static'>
                <Toolbar variant='dense'>



                    <Button color='inherit'
                    onClick={()=>history.push("/dashboard")}
                    >

                        <div>Dashboard</div>

                    </Button>




                    <Button color='inherit'
                    onClick={()=>history.push("/students-list")}
                    >

                        <div>Studen List</div>

                    </Button>




                    <Button color='inherit'
                     onClick={()=>history.push("/add-data")}
                     >

                        <div>Add Data</div>

                    </Button>

                </Toolbar>
            </AppBar>



            <header>
                <h1>{title}</h1>
            </header>

            <div>
                {children}
            </div>

         </div>

    )
}

export default Base