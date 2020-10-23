import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Logo from '@App/components/Logo';

const LogoUrl = require('@App/components/app/logo.svg');

configure({ adapter: new Adapter() });

describe('Logo', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Logo src={LogoUrl} />);
    expect(wrapper).toMatchSnapshot();
  });
});
