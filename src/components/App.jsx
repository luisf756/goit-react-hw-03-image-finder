// import { nanoid } from 'nanoid';
import React from 'react';
// import { useState } from 'react';
import FinderBar from './finderForm/FinderBar';
import GalleryContent from './gallery/galleryContent/GalleryContent'

export default class App extends React.Component {
  state = {
    query: '',
  }
  
  searchFormSubmitHandler = (query) => {
    this.setState({ query });
  };

  render() {
    // const {  filter } = this.state;
    // const filterContacts = this.renderContacts();
    return (
      <div>
      <FinderBar onSubmit={this.searchFormSubmitHandler}></FinderBar>
      <section>
      <GalleryContent query={this.state.query}></GalleryContent>
      </section>
      
      </div>
      
    );
  }
}
