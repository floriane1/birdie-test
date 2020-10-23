import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { EventsTimeline } from '@App/components/timeline/EventsTimeline';
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

configure({ adapter: new Adapter() });

describe('EventsTimeline', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<EventsTimeline events={[eventTestA, eventTestB]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
