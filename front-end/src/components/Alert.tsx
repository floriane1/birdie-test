import * as React from 'react';
import styled from 'styled-components';
import { Event } from '@App/store/types.ts';
import Title from './Title';
import SubTitle from './SubTitle';
import { CheckCircle, ExclamationTriangle } from '@styled-icons/fa-solid';

type AlertProps = {
  events: Event[];
  alerts: Event[];
};

const AlertContainer = styled.div`
  width: 85%;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 30px 0px;
`;

const IconContainer = styled.div`
  margin-right: 20px;
  svg {
    width: 90px;
    height: 90px;
  }
`;

const RedExclamationTriangle = styled(ExclamationTriangle)`
  color: #ff0000;
`;
const GreenCheckCircle = styled(CheckCircle)`
  color: #39d576;
`;

const Alert = ({ events, alerts }: AlertProps) => {
  return (
    <AlertContainer>
      <IconContainer>
        {alerts.length > 0 ? <RedExclamationTriangle /> : <GreenCheckCircle />}
      </IconContainer>
      <div>
        {events.length > 0 && (
          <Title>
            {alerts.length}
            {alerts.length > 1 ? ' alerts have ' : ' alert has '}
            been raised since {events[events.length - 1].timestamp}
          </Title>
        )}
        {alerts.length > 0 && (
          <SubTitle>
            {alerts.length > 1 ? 'The last one was ' : 'It was '}
            {alerts[0].timestamp}
          </SubTitle>
        )}
      </div>
    </AlertContainer>
  );
};

export default Alert;
