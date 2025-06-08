import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { FaUser, FaPhone } from 'react-icons/fa';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.info}>
        <p className={css.name}>
          <FaUser />
          {name}
        </p>

        <p className={css.number}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
