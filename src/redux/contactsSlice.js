import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../components/ContactList/contacts.json';

const initialState = {
  items: [...initialContacts],
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;

export const selectContacts = state => state.contacts.items;
