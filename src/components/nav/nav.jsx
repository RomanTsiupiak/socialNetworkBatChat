import React from "react";
import classes from './nav.module.css';
import {NavLink} from "react-router-dom";


const  Nav = (props) => {
    return (
        <div className={classes.nav}>
            <div>
                <NavLink to='/content' activeClassName={classes.active}>Profile</NavLink>
            </div>

            <div>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>

            <div>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>

           <div>
               <img src={props.icon}/>
           </div>

        </div>
    );
}

export default Nav;