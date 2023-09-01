import App from './App';
import { shallow } from 'enzyme';

describe('App component to tests', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div with the class App-header', () => {
    const appHeader = wrapper.find('.App-header');
    expect(appHeader).toHaveLength(1);
  });

  it('renders a div with the class App-body', () => {
    const appBody = wrapper.find('.App-body');
    expect(appBody).toHaveLength(1);
  });

  it('renders a div with the class App-footer', () => {
    const appFooter = wrapper.find('.App-footer');
    expect(appFooter).toHaveLength(1);
  });
});
