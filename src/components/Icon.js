import React from 'react';

// import react icons
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa';

/**
 * according to the parameter value Icon will render an icon
 */
const Icon = ({name}) => {
    switch(name) {
        case 'circle':
            return <FaRegCircle className="icon"/>
        case 'cross':
            return <FaTimes className="icon"/>
        default:
            return <FaPen className="icon"/>
    }
};

export default Icon;


