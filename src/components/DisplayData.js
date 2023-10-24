import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import AppNavbar from "./AppNavbar";

function DisplayData() {
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

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  };

  return (
    <div className='mt-4'>
      <AppNavbar/>
      <h1 className="text-center display-title mb-4">Upcoming Events</h1>
      {data.map((item, index) => (
        <div key={index} className="card mb-4 event-card">
          <div className="card-body">
            <h5 className="card-title event-name">Tournament Name: {item.tournamentName}</h5>
            <p className="card-text event-date">Start Date: {formatDate(item.startDate)}</p>
            <p className="card-text event-date">End Date: {formatDate(item.endDate)}</p>
            <p className="card-text event-description">Description: {item.description}</p>
            <Link to={`/winners/${item._id}`} className="btn btn-primary event-link">
              Join the event
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayData;

