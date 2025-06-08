import css from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { BeatLoader } from 'react-spinners';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { selectLoading } from './redux/contactsSlice';
import { selectError } from './redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      {loading ? (
        <BeatLoader size={15} color="#000" loading={true} />
      ) : error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Failed to load contacts. Please try again later.
        </Alert>
      ) : (
        <>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </>
      )}
    </div>
  );
}
