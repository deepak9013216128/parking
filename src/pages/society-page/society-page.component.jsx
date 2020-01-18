import React from 'react';

import SOCIETY_DATA from './society-page.data';

import SocietyPreview from '../../component/society-preview/society-preview.component';


class SocietyPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections : SOCIETY_DATA
        }
    }
    render(){
        const {collections}=this.state;
        return (
            <div className='Society-page'>
            {
                collections.map(({id,...otherCollectionProps}) =>(
                    <SocietyPreview key={id} {...otherCollectionProps} />
                ))
            }
            </div>
        )
    }
}

export default SocietyPage;