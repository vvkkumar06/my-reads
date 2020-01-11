import React from 'react';
import './App.scss';
import HeaderComponent from './header/header.component';
import BookListComponent from './books/book-list/books.component';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forceClose: false
    }
  }
  closeOtherBooksMenu = () => {
    this.setState({
      forceClose: true
    })
  }
  render() {
    const {forceClose} = this.state;
    return (
      <div className="app">
        <HeaderComponent />
        <main>
          <BookListComponent forceClose={forceClose} closeOtherBooksMenu= {this.closeOtherBooksMenu} title="Currently Reading"/>
          <BookListComponent forceClose={forceClose} closeOtherBooksMenu= {this.closeOtherBooksMenu} title="Want To Read"/>
          <BookListComponent forceClose={forceClose} closeOtherBooksMenu= {this.closeOtherBooksMenu} title="Read"/>
        </main>
      </div>
    );
  }
}

export default App;
