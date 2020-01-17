import React from 'react';
import './society.style.css'

const Society = ({societyName,imageUrl,size})=>(
    <div className={`${size} menu-item`}>
        <div 
            className='background-image'
            style={
                {backgroundImage: `url(${imageUrl})`} 
            }
        />
        <div className='content'>
            <h1 className='title'>{societyName.toUpperCase()}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);
export default Society;