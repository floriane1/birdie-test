import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { EventCard } from '@App/components/timeline/EventCard';
import { Event, EventType } from '@App/store//types';

const eventTestA: Event = {
  id: 'event-id-A',
  event_type: EventType.ALERT_RAISED,
  care_recipient_id: 'care-recipient-id-123',
  timestamp: new Date('2019-04-24T02:00:11.187Z'),
};

configure({ adapter: new Adapter() });

describe('EventCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<EventCard event={eventTestA} />);
    expect(wrapper).toMatchSnapshot();
  });
});
