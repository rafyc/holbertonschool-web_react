import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notification/Notifications";

const App = () => {
  <>
    <Notifications />
    <div className="App">
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <Footer />
    </div>
  </>
}

export default App;
