import React from 'react';
import './book.style.scss'
import PopUpComponent from '../popup/popup.component';
import { FaSortDown } from 'react-icons/fa';

class BookComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isControlMenuOpen: false
        }
    }

    controlOnClickHandler = () => {
        this.props.closeOtherBooksMenu();
        this.setState({
            isControlMenuOpen: !this.state.isControlMenuOpen
        })
    }



    render() {
        const {isControlMenuOpen} = this.state;
        return(
            <article className="book">
                <div className="cover">
                    <img  alt="title" src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" />
                    <div className="control" onClick={this.controlOnClickHandler}>
                        <FaSortDown color="#fff" size="20px" style={{marginBottom: "5px"}}/>
                        {isControlMenuOpen && (<PopUpComponent />)}
                    </div>
                </div>
                <p className="title">The world of abstract art</p>
                <p className="author">Emily Robbins</p>
                
            </article>
        );
    }

    getDerivedStateFromProps(props, state){
     props.forceClose && this.setState({
         isControlMenuOpen: false
     });
   }
}

export default BookComponent;