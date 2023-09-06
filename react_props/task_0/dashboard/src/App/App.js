import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notification/Notifications";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';

const App = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? <CourseList /> : <Login />}
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
        </div>
        <Footer />
      </div>
    </>
  )
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
