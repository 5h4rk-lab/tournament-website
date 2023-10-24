import './Account.css';
import AppNavbar from "./AppNavbar";
import { Button, Card, ListGroup } from "react-bootstrap"; 
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Account() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <AppNavbar />
      <div className="container account-container">
        <div className="text-center mt-5">
          <h1 className="display-4 account-title">My Account</h1>
          <p className="lead account-welcome">Welcome, {user && user.email}</p>
        </div>
        <div className="row mt-4">
          <div className="col-md-8 offset-md-2">
            <Card className="account-card">
              <Card.Body>
                <Card.Title className="text-center">Events Created</Card.Title>
                <ListGroup>
                  {data.map((item, index) => (
                    <Card key={index} className="mb-4 event-card">
                      <Card.Body>
                        <Card.Title className="event-name">Tournament Name: {item.tournamentName}</Card.Title>
                      </Card.Body>
                    </Card>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 mt-4">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
}

export default Account;
