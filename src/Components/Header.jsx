import React from "react";
import styles from "./Header.module.css"

function Header(){
    return(
        <div className="{styles.container}">
            <h1>Contact App</h1>
            <p>
                <a href="#">Contact Link</a> | React JS Project
            </p>
        </div>
    )
}

export default Header