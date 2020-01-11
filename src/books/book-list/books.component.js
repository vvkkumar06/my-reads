import React from 'react';
import BookComponent from '../book/book.component';

class BookListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state ={

    }
  }
  closeOtherBooksMenu = () => {
    this.props.closeOtherBooksMenu();
  }

  render(){
    const {title, forceClose} = this.props;
    return (
      <section>
        <h2>
          {title}
        </h2>
        <section className="books">
          <BookComponent forceClose={forceClose} closeOtherBooksMenu={this.closeOtherBooksMenu}/>
          <BookComponent forceClose={forceClose} closeOtherBooksMenu={this.closeOtherBooksMenu}/>
          <BookComponent forceClose={forceClose} closeOtherBooksMenu={this.closeOtherBooksMenu}/>
          <BookComponent forceClose={forceClose} closeOtherBooksMenu={this.closeOtherBooksMenu}/>
          <BookComponent forceClose={forceClose} closeOtherBooksMenu={this.closeOtherBooksMenu}/>
        </section>
      </section>
    );
  }
}

export default BookListComponent;