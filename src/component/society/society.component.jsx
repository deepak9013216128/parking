import React from 'react';
import './society.style.css'

const Society = ({societyName,imageUrl,size})=>(
    <div className={`${size} society`}>
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
export default Society;