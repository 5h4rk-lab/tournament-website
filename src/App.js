// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
// import Home from "./components/Home";
// import DisplayData from "./components/DisplayData";
// import NeedHelp from "./components/NeedHelp";
// import Account from "./components/Account";
// import Winners from "./components/Winners";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container">
//             <Link className="navbar-brand" to="/">My App</Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarNav"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link to="/create-event" className="nav-link">
//                     Create an Event
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/upcoming-events" className="nav-link">
//                     Upcoming Events
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/need-help" className="nav-link">
//                     Need Help
//                   </Link>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <Link to="/account" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">
//                     Account
//                   </Link>
//                   <div className="dropdown-menu">
//                     <Link to="/account" className="dropdown-item">
//                       My Account
//                     </Link>
//                     <Link to="/my-events" className="dropdown-item">
//                       My Events
//                     </Link>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/create-event" element={<Home />} />
//           <Route path="/upcoming-events" element={<DisplayData />} />
//           <Route path="/need-help" element={<NeedHelp />} />
//           <Route path="/account" element={<Account />} />
//           <Route path="/winners/:id" element={<Winners />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeLogin from "./components/HomeLogin";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/homelogin"
                element={
                  <ProtectedRoute>
                    <HomeLogin />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
