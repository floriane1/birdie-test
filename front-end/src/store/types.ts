export interface Event {
  id: string;
  event_type: EventType;
  care_recipient_id: string;
  timestamp: Date;
  visit_id?: string;
  caregiver_id?: string;
  observation_event_id?: string;
  // tslint:disable-next-line:no-any
  [key: string]: any;
}

export enum EventType {
  ALERT_QUALIFIED = 'alert_qualified',
  ALERT_RAISED = 'alert_raised',
  CATHETER_OBSERVATION = 'catheter_observation',
  CHECK_IN = 'check_in',
  CHECK_OUT = 'check_out',
  CONCERN_RAISED = 'concern_raised',
  FLUID_INTAKE_OBSERVATION = 'fluid_intake_observation',
  FOOD_INTAKE_OBSERVATION = 'food_intake_observation',
  GENERAL_OBSERVATION = 'general_observation',
  INCONTINENCE_PAD_OBSERVATION = 'incontinence_pad_observation',
  MEDICATION_SCHEDULE_CREATED = 'medication_schedule_created',
  MEDICATION_SCHEDULE_UPDATED = 'medication_schedule_updated',
  MENTAL_HEALTH_OBSERVATION = 'mental_health_observation',
  MOOD_OBSERVATION = 'mood_observation',
  NO_MEDICATION_OBSERVATION_RECEIVED = 'no_medication_observation_received',
  PHYSICAL_HEALTH_OBSERVATION = 'physical_health_observation',
  REGULAR_MEDICATION_MAYBE_TAKEN = 'regular_medication_maybe_taken',
  REGULAR_MEDICATION_NOT_TAKEN = 'regular_medication_not_taken',
  REGULAR_MEDICATION_PARTIALLY_TAKEN = 'regular_medication_partially_taken',
  REGULAR_MEDICATION_TAKEN = 'regular_medication_taken',
  TASK_COMPLETED = 'task_completed',
  TASK_COMPLETION_REVERTED = 'task_completion_reverted',
  TASK_SCHEDULE_CREATED = 'task_schedule_created',
  TOILET_VISIT_RECORDED = 'toilet_visit_recorded',
  VISIT_CANCELLED = 'visit_cancelled',
  VISIT_COMPLETED = 'visit_completed',
}
