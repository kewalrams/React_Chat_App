import React from 'react';
import ContactTab from './ContactTab';



function ContactList({ contacts, searchfield }) {
  // need contact tab component
  return (
    <>
      <div className="contactscreen contactlist">
        {contacts.map((contact, index) => {
          if (contact.chatlog.length > 0) {
            return <ContactTab contact={contact} searchfield={searchfield} key={index} />
          }
        }

        )}

      </div>
    </>
  );
}

export default ContactList;
