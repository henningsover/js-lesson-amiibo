import React from 'react';
import './css/style.css'
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import StartPage from './pages/StartPage';
import GameSeriesPage from './pages/GameSeriesPage';
import AmiiboList from './components/AmiiboList';
import AmiiboDetailsPage from './pages/AmiiboDetailsPage';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path='/game-series/:gameseries' render={props => {
          return (
            <Layout>
              <AmiiboList {...props} />
            </Layout>
          )
        }}>
        </Route>

        <Route path='/amiibo-details/:id' render={props => {
          return (
            <Layout>
              <AmiiboDetailsPage {...props} />
            </Layout>
          )
        }}>
        </Route>

        <Route path='/game-series-list'>
          <Layout>
            <GameSeriesPage />
          </Layout>
        </Route>

        <Route path='/'>
          <Layout>
            <StartPage />
          </Layout>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
