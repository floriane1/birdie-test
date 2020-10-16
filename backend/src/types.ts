export interface Event {
  id: string;
  event_type: string;
  care_recipient_id: string;
  timestamp: string;
  visit_id?: string;
  caregiver_id?: string;
  observation_event_id?: string;
  [key: string]: any;
}
