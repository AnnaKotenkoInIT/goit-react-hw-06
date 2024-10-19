import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import c from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={c.contactItem}>
      <div className={c.contactCard}>
        <p className={c.contactTitle}>
          <FaUser className={c.contactIcon} />
          {name}
        </p>
        <p className={c.contactTitle}>
          <FaPhoneAlt className={c.contactIcon} />
          {number}
        </p>
      </div>
      <button
        className={c.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
