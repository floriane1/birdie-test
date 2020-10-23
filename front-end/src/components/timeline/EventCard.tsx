import * as React from 'react';
import {
  ExclamationTriangle,
  Syringe,
  Utensils,
  NotesMedical,
  Toilet,
  Pills,
  CalendarCheck,
  CalendarMinus,
  CalendarPlus,
  CalendarTimes,
  Smile,
  SignInAlt,
  SignOutAlt,
  Meh,
  MehBlank,
  Frown,
} from '@styled-icons/fa-solid';
import { Body } from '@styled-icons/ionicons-outline';
import { LocalDrink, Schedule } from '@styled-icons/material';
import { MentalHealth } from '@styled-icons/remix-fill';
import { StyledIcon } from '@styled-icons/styled-icon';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { Event, EventType } from '@App/store/types.ts';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface EventCardProps {
  event: Event;
}

const colors = {
  red: '#ff0000',
  green: '#39D576',
  orange: '#ffa500',
  grey: '#a9a9a9',
  white: '#ffffff',
};

interface EventAttributes {
  color: string;
  icon: StyledIcon;
}

const eventAttributes = (event: Event): EventAttributes => {
  const { event_type } = event;
  switch (event_type) {
    case EventType.ALERT_QUALIFIED:
      return { color: colors.red, icon: ExclamationTriangle };
    case EventType.ALERT_RAISED:
      return { color: colors.red, icon: ExclamationTriangle };
    case EventType.CATHETER_OBSERVATION:
      return { color: colors.grey, icon: Syringe };
    case EventType.CHECK_IN:
      return { color: colors.green, icon: SignInAlt };
    case EventType.CHECK_OUT:
      return { color: colors.green, icon: SignOutAlt };
    case EventType.CONCERN_RAISED:
      return { color: colors.red, icon: ExclamationTriangle };
    case EventType.FLUID_INTAKE_OBSERVATION:
      return { color: colors.grey, icon: LocalDrink };
    case EventType.FOOD_INTAKE_OBSERVATION:
      return { color: colors.grey, icon: Utensils };
    case EventType.GENERAL_OBSERVATION:
      return { color: colors.grey, icon: NotesMedical };
    case EventType.INCONTINENCE_PAD_OBSERVATION:
      return { color: colors.grey, icon: Toilet };
    case EventType.MEDICATION_SCHEDULE_CREATED:
      return { color: colors.green, icon: Schedule };
    case EventType.MEDICATION_SCHEDULE_UPDATED:
      return { color: colors.green, icon: Schedule };
    case EventType.MENTAL_HEALTH_OBSERVATION:
      return { color: colors.grey, icon: MentalHealth };
    case EventType.NO_MEDICATION_OBSERVATION_RECEIVED:
      return { color: colors.red, icon: NotesMedical };
    case EventType.PHYSICAL_HEALTH_OBSERVATION:
      return { color: colors.grey, icon: Body };
    case EventType.REGULAR_MEDICATION_MAYBE_TAKEN:
      return { color: colors.orange, icon: Pills };
    case EventType.REGULAR_MEDICATION_NOT_TAKEN:
      return { color: colors.red, icon: Pills };
    case EventType.REGULAR_MEDICATION_PARTIALLY_TAKEN:
      return { color: colors.orange, icon: Pills };
    case EventType.REGULAR_MEDICATION_TAKEN:
      return { color: colors.green, icon: Pills };
    case EventType.TASK_COMPLETED:
      return { color: colors.green, icon: CalendarCheck };
    case EventType.TASK_COMPLETION_REVERTED:
      return { color: colors.red, icon: CalendarMinus };
    case EventType.TASK_SCHEDULE_CREATED:
      return { color: colors.green, icon: CalendarPlus };
    case EventType.TOILET_VISIT_RECORDED:
      return { color: colors.grey, icon: Toilet };
    case EventType.VISIT_CANCELLED:
      return { color: colors.red, icon: CalendarTimes };
    case EventType.VISIT_COMPLETED:
      return { color: colors.green, icon: CalendarCheck };
    case EventType.MOOD_OBSERVATION:
      const moodIcon = (mood: string) => {
        switch (mood) {
          case 'happy':
            return Smile;
          case 'okay':
            return Meh;
          case 'sad':
            return Frown;
          default:
            return MehBlank;
        }
      };
      const moodColor = (mood: string) => {
        switch (mood) {
          case 'happy':
            return colors.green;
          case 'okay':
            return colors.orange;
          case 'sad':
            return colors.red;
          default:
            return colors.grey;
        }
      };
      return { color: moodColor(event.mood), icon: moodIcon(event.mood) };
    default:
      return { color: colors.grey, icon: NotesMedical };
  }
};

export const EventCard = ({ event }: EventCardProps) => {
  const { id, event_type, timestamp } = event;
  const eventTitle: string =
    event_type.charAt(0).toUpperCase() + event_type.slice(1).replace(/_/g, ' ');
  const Icon = eventAttributes(event).icon;
  return (
    <VerticalTimelineElement
      date={dayjs(timestamp).format('dddd, MMMM D, h:mm A')}
      iconStyle={{
        color: colors.white,
        background: eventAttributes(event).color,
      }}
      icon={<Icon />}
      contentStyle={{
        padding: '0 16px',
        borderTop: `6px solid ${eventAttributes(event).color}`,
      }}
      key={id}
    >
      <h3 style={{ marginBottom: 0 }}>{eventTitle}</h3>
      {event.note && <p>Note: {event.note}</p>}
      {event.task_schedule_note && <p>Note: {event.task_schedule_note}</p>}
      {event.task_definition_description && (
        <p>Description: {event.task_definition_description}</p>
      )}
      {event.volume_ml && <p>Volume: {event.volume_ml}mL</p>}
      {event.meal && <p>Meal: {event.meal}</p>}
      {event.fluid && <p>Type of fluid: {event.fluid}</p>}
      {event.observed && <p>Observed: {event.observed ? 'yes' : 'no'}</p>}
      {event.medication_failure_reason && (
        <p>Reason: {event.medication_failure_reason}</p>
      )}
      {event.severity && <p>Severity: {event.severity}</p>}
      {event.alert_severity && <p>Severity: {event.alert_severity}</p>}
      {event.consumed_volume_ml && <p>Volume: {event.consumed_volume_ml}mL</p>}
      {event.pad_condition && <p>Condition: {event.pad_condition}</p>}
    </VerticalTimelineElement>
  );
};
