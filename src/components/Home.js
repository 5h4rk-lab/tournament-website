import React, { useState } from 'react';
import axios from 'axios';
import AppNavbar from "./AppNavbar";


function Home() {
    const [msg, setMsg] = useState('');
    const [tournamentName, setTournamentName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            alert("Submitted");

            await axios.post("http://localhost:8000/", {
                msg,
                tournamentName,
                startDate,
                endDate,
                description,
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='home-container'>
            <AppNavbar />
            <h1 className="home-title">Create a New Event</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className='home-form' action='POST' onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setTournamentName(e.target.value)}
                                placeholder='Tournament Name'
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="date"
                                className="form-control"
                                onChange={(e) => setStartDate(e.target.value)}
                                placeholder='Start Date'
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="date"
                                className="form-control"
                                onChange={(e) => setEndDate(e.target.value)}
                                placeholder='End Date'
                            />
                        </div>
                        <div className="form-group mb-3">
                            <textarea
                                name="text"
                                className="form-control"
                                onChange={(e) => setMsg(e.target.value)}
                                placeholder='Add the additional notes'
                                rows="5"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <textarea
                                name="text"
                                className="form-control"
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder='Instructions for the tournament'
                                rows="5"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary home-submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
