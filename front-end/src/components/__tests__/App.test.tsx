import * as React from 'react';
import { shallow, configure } from 'enzyme';
// import * as sinon from 'sinon';
import * as Adapter from 'enzyme-adapter-react-16';
import { App } from '@App/components/app/App';
import { Provider } from 'react-redux';
import store from '@App/store';
import { fetchEventsRequest } from '@App/store/actions';

configure({ adapter: new Adapter() });

describe('App', () => {
  const props = {
    events: [],
    alerts: [],
    loading: false,
    error: false,
    errorMessage: '',
    fetchEventsRequest,
  };
  it('renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('calls componentDidMount', () => {
    const mockHook = jest.spyOn(App.prototype, 'componentDidMount');
    mockHook.mockImplementation(() => {});
    shallow(<App {...props} />);
    expect(mockHook.mock.calls.length).toBe(1);
  });
});
