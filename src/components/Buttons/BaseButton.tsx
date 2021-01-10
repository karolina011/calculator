import React from "react";
import '../../App.css';


export interface IButton {
    type: string,
    title: string
}

function BaseButton(prop: IButton) {

    return (
        <button className={prop.type}>{prop.title}</button>
    )

}

export default BaseButton;