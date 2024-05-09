import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Browser from './Browser'
import { userAdd } from '../utility/userSlice';
import { useDispatch } from 'react-redux';

const Body = () => {
  const dispatch=useDispatch();

useEffect(()=>{
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
  
    
    const {uid,displayName,email}=user
    console.log(uid,displayName,email)
   
   dispatch(userAdd({uid,displayName,email}))

    // ...
  } else {
    // User is signed out
    // ...
  }
});
},[])
 
      
const appRoute=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browser",
        element:<Browser/>
    }
])

  return (
    <div>
        <RouterProvider router={appRoute}>
            

           

        </RouterProvider>
    </div>
  )
}

export default Body