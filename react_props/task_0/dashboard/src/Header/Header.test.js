import Header from "./Header";
import { shallow } from "enzyme";

describe('<Header />'), () => {
  it('it renders Header without crashing'), () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  }
}
