import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import c from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const filteredData = contacts.filter(item =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={c.contactList}>
      {filteredData.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
