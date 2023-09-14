import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../Utils/utils";
import { PropTypes } from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      logOut: this.props.logOut,

      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ],

      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ]

    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key == 'h' && (event.ctrlKey || event.metaKey)) {
      alert('Logging you out')
      logOut()
    }
  }

  render() {
    const { isLoggedIn, listCourses, listNotifications } = this.state;
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <div className={css(styles.body)}>
            {isLoggedIn ?
              <BodySectionWithMarginBottom title={'Course list'}>
                <CourseList listCourses={listCourses} /> </BodySectionWithMarginBottom> :
              <BodySectionWithMarginBottom title={'Log in to continue'}>
                <Login />
              </BodySectionWithMarginBottom>}
            <BodySection title={'News from the School'}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque animi illo placeat laborum molestias rem beatae nostrum quasi reiciendis velit eligendi molestiae itaque tempore dolor, quisquam debitis nam atque laboriosam est nihil quia deserunt, dolorem maiores? Fuga delectus, eligendi odio aut iste officiis quae eos! Commodi facere quisquam laudantium illum error minima dolor earum a deleniti! Saepe consequatur perferendis voluptatum debitis sed, earum officia, at rerum reiciendis nesciunt dolorem numquam.</p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderTop: '3px solid #e1484c',
  },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { }
}

App.propType = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

export default App;
