import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { shallow } from 'enzyme';

describe('Notifications component tests', () => {
  it('should render NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const childWrapper = wrapper.find(NotificationItem);
    expect(childWrapper.exists()).toBe(true);
  });

  it('should render right component x3', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const childWrapper = wrapper.find(NotificationItem);
    expect(childWrapper).toHaveLength(3)
  })

  it('should render li', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const childWrapper = wrapper.find(NotificationItem);
    expect(childWrapper.first().html()).toEqual('<li data-priority="default">New course available</li>')
  })
});
