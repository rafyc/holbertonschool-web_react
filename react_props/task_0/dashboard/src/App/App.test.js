import App from "./App";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notification/Notifications";
import { shallow } from "enzyme";

const testComponentForNotifications = (componentName) => {
  it(`should render the ${componentName} component`, () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(componentName).exists()).toBe(true);
  });
};

testComponentForNotifications(Header);
testComponentForNotifications(Footer);
testComponentForNotifications(Login);
testComponentForNotifications(Notifications);
