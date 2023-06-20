// import { nanoid } from 'nanoid';
import React from 'react';
// import { useState } from 'react';
import FinderBar from './finderForm/FinderBar';
import GalleryContent from './gallery/galleryContent/GalleryContent'

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  renderContacts = () => {
    
    // console.log(this.state);
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  rellenar = values => {
    //console.log(values);
    // const { id, name, number } = this.state;

    const contact = {
      id: values.id,
      name: values.name,
      number: values.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  filterList=(e)=>{
    this.setState({ filter: e.currentTarget.value });
  }
  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  render() {
    // const {  filter } = this.state;
    // const filterContacts = this.renderContacts();
    return (
      <div>
      <FinderBar></FinderBar>
      <GalleryContent></GalleryContent>
      </div>
      
    );
  }
}

// nanoid
// import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"


// const Button = props => {
//   const { kind, ...other } = props;
//   const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
//   return <button className={className} {...other} />;
// };