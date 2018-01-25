import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import SideBarNav from '../components/SideBarNav';
import postDashboardPage from '../components/PostDashboardPage';
import addPostPage from '../components/AddPostPage';
import editPostPage from '../components/EditPostPage';
import settingsPage from '../components/SettingsPage';
import notFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <SideBarNav />
      <Switch>
        <Route path='/' component={postDashboardPage} exact={true} />
        <Route path='/create' component={addPostPage} />
        <Route path='/edit/:id' component={editPostPage} />
        <Route path='/settings' component={settingsPage} />
        <Route component={notFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
