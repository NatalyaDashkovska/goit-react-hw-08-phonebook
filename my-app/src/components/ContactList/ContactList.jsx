import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
import { connect } from 'react-redux';
const ContactList = ({ contacts, onDeleteCard }) => {
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <p className={styles.content}>
              {name} : {number}
            </p>
            <button className={styles.button} onClick={() => onDeleteCard(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { contacts: phonebookSelectors.getVisibleContacts(state) };
};

const mapDispatchToProps = dispatch => ({
  onDeleteCard: id => dispatch(phonebookOperations.deleteCard(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
