import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { getEventsSorted, getAlertsRaised } from '@App/store/selectors';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchEventsRequest } from '@App/store/actions';
import { CARE_RECIPIENT_DEFAULT_ID } from '@App/store/config';

import Title from '@App/components/Title';
import Logo from '@App/components/Logo';
import Alert from '@App/components/Alert';

import { EventsTimeline } from '@App/components/timeline/EventsTimeline';
const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppState {}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F4F4F4;
    font-family: sans-serif;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  componentDidMount(): void {
    this.props.fetchEventsRequest(CARE_RECIPIENT_DEFAULT_ID);
  }

  public render() {
    const { loading, error, errorMessage, events, alerts } = this.props;
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Logo src={LogoUrl} />
          <Title>Welcome to the Birdie platform</Title>

          {loading && <Title>Loading...</Title>}
          {error && <Title>Something went wrong: {errorMessage}</Title>}

          {!loading && <Alert events={events} alerts={alerts} />}
          {!loading && events && <EventsTimeline events={events} />}
        </AppContainer>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    events: getEventsSorted()(state),
    alerts: getAlertsRaised()(state),
    loading: state.events.loading,
    error: state.events.error,
    errorMessage: state.events.errorMessage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchEventsRequest: (careRecipientId: string) =>
    dispatch(fetchEventsRequest(careRecipientId)),
});

export type AppProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(App);
