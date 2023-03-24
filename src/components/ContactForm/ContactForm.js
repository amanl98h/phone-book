import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    email: '',
    city: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
      email: '',
      city: '',
    });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };

  render() {
    const { name, number, email, city } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <span className={s.inputs}>
          <span className={s.inputes}>
            <label className={s.label}>
              Name
              <input
                className={s.input}
                type="text"
                onChange={this.handleChange}
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>

            <label className={s.label}>
              Number
              <input
                className={s.input}
                type="tel"
                onChange={this.handleChange}
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
          </span>
          <span className={s.inputes}>

            <label className={s.label}>
              Email
              <input
                className={s.input}
                type="text"
                onChange={this.handleChange}
                name="email"
                value={email}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[@-gmil-.-com]*)*$"
                title="email may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>

            <label className={s.label}>
              City
              <input
                className={s.input}
                type="text"
                onChange={this.handleChange}
                name="city"
                value={city}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="city may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
          </span>
        </span>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  email: PropTypes.string,
  city: PropTypes.string,
};
export default ContactForm;
