import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ contacts, onDeleteContact }) {
  return contacts.map(({ name, number, email, city, id }) => (
    <li key={id} className={s.item}>
      <span className={s.name}>
        <span className={s.item_name}>{name}</span>
        <span className={s.item_numbre}>{number}</span>
      </span>
      <span className={s.email}>
        <span className={s.item_email}>{email}</span>
        <span className={s.item_city}>{city}</span>
      </span>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  ));
}

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
