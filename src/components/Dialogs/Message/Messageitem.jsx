
import React from "react";
import classNames from "classnames";

const Message = (props) => {
    return (
        <div className={classNames("message__item-m",{"message__item-me": props.id === 2 })}>
            <div>{props.message}</div>
        </div>
    )
}

export  default  Message;