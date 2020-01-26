import React from 'react';
import {withRouter} from 'react-router-dom';
import './society.style.css'

const Society = ({societyName,imageUrl,size,history,linkUrl,match})=>(
    <div className={`${size} society`} 
        onClick={()=>(history.push(`${match.url}${linkUrl}`))}
    
    >
        <div 
            className='background-image'
            style={
                {backgroundImage: `url(${imageUrl})`} 
            }
        />
        <div className='content'>
            <h1 className='societyName'>{societyName.toUpperCase()}</h1>
        </div>
    </div>
);
export default withRouter(Society);