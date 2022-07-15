import * as React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Dashboard from "./component/dashboard";
import Users from "./component/users";
import User from "./component/User";
import NoMatch from "./component/NoMatch";

function App() {

  let activeStyle = {
    backgroundColor: "black",
    color: "white"
  };

  return (
    <div>
       <nav>
        <ul>
          <li>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/">Home</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/about">About</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/users">User</NavLink>
          </li>
        </ul>
      </nav>
    
      <Routes>
        <Route >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} >
            <Route path=":id" element={<User />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
          
    
        </Route>
      </Routes>
    </div>
  );
}

export default App;





