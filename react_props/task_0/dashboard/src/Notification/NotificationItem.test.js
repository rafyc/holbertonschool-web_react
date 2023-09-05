import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('Notifications component tests', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it(' it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.html()).toEqual(`<li data-priority="default">test</li>`)
  })

  it(' it renders the correct html for html props', () => {
    const wrapper = shallow(<NotificationItem type='default' html='lolo' />);
    expect(wrapper.html()).toEqual('<li data-priority="default">lolo</li>')
  })
});
