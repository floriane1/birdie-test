import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Title from '@App/components/Title';

configure({ adapter: new Adapter() });

describe('Title', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Title>Welcome to the Birdie platform</Title>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
