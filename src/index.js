import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import createBrowserHistory from 'history/createBrowserHistory'
import HomeContainer from './containers/HomeContainer/HomeContainer'
import CharacterView from './views/Character/Character'
import CharacterListView from './views/CharacterList/CharacterList'
import ComicListView from './views/ComicList/ComicList'
import ComicView from './views/Comic/Comic'
import SeriesListView from './views/SeriesList/SeriesList'
import SeriesView from './views/Series/Series'
import FoOhFoView from './views/FoOhFo/FoOhFo'
import './index.scss';

const history = createBrowserHistory()

const MOUNT_NODE = document.getElementById('root')
const appElement = (
    <Router history={history}>
      <AppContainer>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/characters" component={CharacterListView} />
        <Route path="/characters/:id" component={CharacterView} />
        <Route exact path="/comics" component={ComicListView} />
        <Route path="/comics/:id" component={ComicView} />
        <Route exact path="/series" component={SeriesListView} />
        <Route path="/series/:id" component={SeriesView} />
        <Route component={FoOhFoView} />
      </Switch>
      </AppContainer>
    </Router>

)
ReactDOM.render(appElement, MOUNT_NODE)
