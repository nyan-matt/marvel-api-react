import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import DefaultLayout from '../layouts/DefaultLayout';
import HomeView from '../views/Home'
import CharacterView from '../views/Character'
import FoOhFoView from '../views/FoOhFo'
// import PeopleView from 'views/People'
// import ProfileView from 'views/Profile'
// import FilmView from 'views/Film'
// import SpeciesView from 'views/Species'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomeView} />
    <Route exact path="/characters/:id" component={CharacterView} />
    <Route exact path="/abc" component={HomeView} />
    <Route component={FoOhFoView} />
  </Switch>
)

export default Routes
