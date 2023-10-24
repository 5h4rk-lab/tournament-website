
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeLogin from "./components/HomeLogin";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home";
import DisplayData from "./components/DisplayData";
import NeedHelp from "./components/NeedHelp";
import Account from "./components/Account";
import Winners from "./components/Winners";

function App() {
  return (
    
    <div className="App">
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
              <Route path="/create-event" element={<Home />} />
              <Route path="/upcoming-events" element={<DisplayData />} />
              <Route path="/need-help" element={<NeedHelp />} />
              <Route path="/account" element={<Account />} />
              <Route path="/winners/:id" element={<Winners />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;

