import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import SubTitle from '@App/components/SubTitle';

configure({ adapter: new Adapter() });

describe('SubTitle', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SubTitle>Welcome to the Birdie platform</SubTitle>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
