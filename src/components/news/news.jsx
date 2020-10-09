import React from "react";
import classes from './news.module.css';
import New from "./new/new";

const News = (props) => {

    return (
        <div className={classes.news}>
            <New message='Gotham City looking for a Batman!'
                 photo='https://steamuserimages-a.akamaihd.net/ugc/1008148769628328822/7F1103831135F21ACEDF0D567D9DC064EE3287C1/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'/>
                 <New message='Capitan James Gordon is shot!' photo = 'https://comicvine1.cbsistatic.com/uploads/scale_medium/3/31666/3236708-dtc_cv25_slsbj4pk86_.jpg'/>
        </div>
    );
}
export default News;