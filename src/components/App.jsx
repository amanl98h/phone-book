import s from './App.module.css';
import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import ContactItem from "./ContactItem";
import Navbar from './Navbar/Navbar';

class App extends Component {
  state = {
    contacts: [

      {
        id: 1,
        name: "Лиэнн Грэм",
        email: "Sincere@april.biz",
        Street: "Кулас Лайт",
        city: "Гвенборо",
        number: "1-770-736-8031 ",

      },
      {
        id: 2,
        name: "Эрвин Хауэлл",
        email: "Шанна@melissa.tv",
        Street: "Виктор Плейнс",
        city: "Визокибург",
        number: "010-692-6593 ",
      },
      {
        id: 3,
        name: "Клементина Баух",
        email: "Натан@yesenia.net",
        Street: "Дуглас Расширение",
        city: "Маккензихейвен",
        number: "1-463-123-4447",
      },
      {

        id: 4,
        name: "Патриция Лебсак",
        email: "Julianne.OConner@kory.org",
        Street: "Хёгер Молл",
        city: "Южный Элвис",
        number: "493-170-9623",
      },
      {
        id: 5,
        name: "Челси Дитрих",
        email: "Lucio_Hettinger@annie.ca",
        Street: "Прогулки на лыжах",
        city: "Росковью",
        number: "(254)954-1289",
      },
      {
        id: 6,
        name: "Миссис Деннис Шулист",
        email: "Karley_Dach@jasper.info",
        Street: "Перекрёсток Норберто",
        city: "Южный Кристи",
        number: "1-477-935-8478 ",
      },
      {
        id: 7,
        name: "Куртис Вайснат",
        email: "Telly.Hoeger@billy.biz",
        Street: "Рекс Трейл",
        city: "Ховмут",
        number: "210.067.6132",
      },
      {
        id: 8,
        name: "Николас Рунольфсдоттир V",
        email: "Sherwood@rosamond.me",
        Street: "Саммит Эллсворта",
        city: "Алиявью",
        number: "586.493.6943 ",
      },
      {
        id: 9,
        name: "Гленна Райхерт",
        email: "Chaim_McDermott@dana.io",
        Street: "Дайна Парк",
        city: "Бартоломебери",
        number: "(775)976-6794 ",
      },
      {
        id: 10,
        name: "Клементина ДюБук",
        email: "Rey.Padberg@karina.biz",
        Street: "Кэтти Тернпайк",
        city: "Лебсакбери",
        number: "024-648-3804",
      }





      // {
      //   id: 'id-1',
      //   name: 'Rosie Simpson',
      //   number: '459-12-56'
      // },
      // {
      //   id: 'id-2',
      //   name: 'Hermione Kline',
      //   number: '443-89-12'
      // },
      // {
      //   id: 'id-3',
      //   name: 'Eden Clements',
      //   number: '645-17-79'
      // },
      // {
      //   id: 'id-4',
      //   name: 'Annie Copeland',
      //   number: '227-91-26'
      // },
    ],
    filter: '',
  };

  addContacts = data => {
    const { contacts } = this.state;


    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contact`)
      : this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedfilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();
    return (
      <div>
        <h2 className={s.title}>Phonebook</h2>
        <ContactForm onSubmit={this.addContacts} />
        <h3 className={s.title}>Contacts</h3>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList>
          <Navbar />
          <ContactItem contacts={visibleContact}
            onDeleteContact={this.deleteContact} />
        </ContactList>
      </div>
    );
  }
}

export default App;