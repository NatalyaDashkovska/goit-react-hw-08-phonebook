import React, { Component } from 'react';
import { connect } from 'react-redux';
//https://connections-api.herokuapp.com
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import AppBar from './components/AppBar';
import styles from './index.module.css';
import { Switch, Router, Route } from 'react-router-dom';
import { phonebookOperations, phonebookSelectors } from './redux/phonebook';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import PhonebookView from './views/PhonebookView';
import HomeView from './views/HomeView';

import { authOperations } from './redux/auth';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        {/* <RegisterView /> */}
        {/* <LoginView /> */}
        {/* <PhonebookView /> */}
        {/* <HomeView /> */}
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={PhonebookView} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
