import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EventsList from "../EventsList/EventsList.jsx";
import CreateEvent from "../CreateEvent/CreateEvent";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import Login from "../Login/Login.jsx";

const Routing = () => {

   const [user, setUser] = useState(null)

 return <>
    <Routes>
       {
          user ? (
            <>
               
            </>
          ) : null
       }
      <Route path="/event/create" element={<CreateEvent/>}/>
      <Route path="/event/:id" element={<CreateEvent/>}/>
      <Route path="/events" element={<EventsList />} />
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/reset" element={<ResetPassword />} />
    </Routes>
 </>
}

export default Routing;