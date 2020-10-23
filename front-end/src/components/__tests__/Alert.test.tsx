import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Alert from '@App/components/Alert';
import { Event, EventType } from '@App/store//types';

const eventTestA: Event = {
  id: 'event-id-A',
  event_type: EventType.ALERT_RAISED,
  care_recipient_id: 'care-recipient-id-123',
  timestamp: new Date('2019-04-24T02:00:11.187Z'),
};

const eventTestB: Event = {
  id: 'event-id-B',
  event_type: EventType.ALERT_RAISED,
  care_recipient_id: 'care-recipient-id-123',
  timestamp: new Date('2019-05-24T02:00:11.187Z'),
};

const eventTestC: Event = {
  id: 'event-id-C',
  event_type: EventType.CONCERN_RAISED,
  care_recipient_id: 'care-recipient-id-123',
  timestamp: new Date('2019-06-24T02:00:11.187Z'),
  severity: 'high',
};

configure({ adapter: new Adapter() });

describe('Alert', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Alert
        events={[eventTestA, eventTestB, eventTestC]}
        alerts={[eventTestA, eventTestB]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
