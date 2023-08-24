import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Container, Title, SubTitle } from './App.styled';

import { setContacts, deleteContact } from 'redux/slice';
import { useDispatch, useSelector } from 'react-redux';

// const useLocalStorage = (key, defValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, window.JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// };

const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useLocalStorage('filter', '');

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export { App };
