import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Container, Main, Header } from './components'
import * as Pages from './pages'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Main>
          <Router>
            <Header />
            <Suspense fallback={<Pages.LoadingRoute />}>
              <Switch>
                <Redirect exact from="/" to="/new-mission" />
                <Route path="/new-mission">
                  <Pages.NewMission />
                </Route>
                <Route path="/upcoming">
                  <Pages.Upcoming />
                </Route>
                <Route path="/history">
                  <Pages.History />
                </Route>
                <Route path="/page-not-found">
                  <Pages.PageNotFound />
                </Route>
                <Redirect to="/page-not-found" />
              </Switch>
            </Suspense>
          </Router>
        </Main>
      </Container>
    </QueryClientProvider>
  )
}

export default App
