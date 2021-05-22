import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';
// import { getUserIn } from '../../redux/auth';
import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import PhonebookView from '../../views/PhonebookView';
const AppBar = ({ getUserIn }) => {
  console.log(getUserIn);
  return (
    <div>
      <div>
        {/* <NavLink to="/register" exact className={styles.link}>
          registration
        </NavLink>
        <NavLink to="/login" exact className={styles.link}>
          login
        </NavLink>
        <NavLink to="/contacts" exact className={styles.link}>
          PhonebookView
        </NavLink> */}

        {getUserIn ? <UserMenu /> : <AuthNav />}
      </div>
      <div>who are you</div>
      <PhonebookView />
    </div>
  );
};

const mapStateToProps = state => ({
  getUserIn: authSelectors.getUserIn(state),
});

export default connect(mapStateToProps)(AppBar);
