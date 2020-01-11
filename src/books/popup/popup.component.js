import React from 'react';
import './popup.style.scss';
import { FaCheck } from 'react-icons/fa'
const PopUpItems = [
    "Move to...",
    "Currently Reading",
    "Want to Read",
    "Read",
    "None"
]
class PopUpComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        let {items} = this.props;
        items = items ? items : PopUpItems;
        return (
            <div className="menu-items">
                {items.map((item, index) => (
                    <p key={index}>
                        <FaCheck size="12px" style={{marginRight: "5px"}}/>
                        {item}
                    </p>
                ))}
            </div>
        );
    }
}

export default PopUpComponent;