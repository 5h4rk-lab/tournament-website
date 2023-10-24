import React from "react";
import AppNavbar from "./AppNavbar";

const styles = {
  container: {
    backgroundsize: "auto",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat", 
    minHeight: "100",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Arial, sans-serif",
    letterSpacing: "2px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",
  },
};

const HomeLogin = () => {
  return (
    <div style={styles.container}>

      <AppNavbar />
      <h1 style={styles.heading}>

        Welcome to the Dragon Ball Z themed Tournament Zone.
      </h1>
    </div>
  );
};

export default HomeLogin;
