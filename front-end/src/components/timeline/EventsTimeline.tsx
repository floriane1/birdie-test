import * as React from 'react';
import styled from 'styled-components';
import { Event } from '@App/store/types.ts';
import { EventCard } from '@App/components/timeline/EventCard.tsx';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type EventsTimelineProps = {
  events: Event[];
};

const TimelineContainer = styled.div`
  height: 65%;
  width: 85%;
  position: relative;
`;

export const EventsTimeline = ({ events }: EventsTimelineProps) => {
  return (
    <TimelineContainer>
      {events.length > 0 && (
        <VerticalTimeline layout="1-column">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          ;
        </VerticalTimeline>
      )}
    </TimelineContainer>
  );
};
