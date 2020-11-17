import React from 'react';

const getStyle = props => {
    if(props.message.msgError)
        return "card-panel red red-text text-darken-3 center-align";
    else
        return "card-panel blue blue-text text-darken-3 center-align";
}


const Message =  props => {
    return(
        <div className={getStyle(props)}>
            {props.message.msgBody}
        </div>
    );
}

export default Message;
