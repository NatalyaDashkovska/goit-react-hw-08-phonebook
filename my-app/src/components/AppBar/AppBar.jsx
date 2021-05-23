import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';

import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

const AppBar = ({ getUserIn }) => {
  return (
    <div className={styles.AppBar}>
      <div className={styles.menu}>
        <NavLink to="/" exact className={styles.link}>
          Main
        </NavLink>
        {getUserIn && (
          <NavLink to="/contacts" exact className={styles.link}>
            Phonebook
          </NavLink>
        )}
      </div>
      <div>{getUserIn ? <UserMenu /> : <AuthNav />}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  getUserIn: authSelectors.getUserIn(state),
});

export default connect(mapStateToProps)(AppBar);
