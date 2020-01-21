import React from 'react';
import {society,database} from '../../firebase/firebase.utils';

import SOCIETY_DATA from './society-page.data';
import './society-page.style.css'

import SocietyPreview from '../../component/society-preview/society-preview.component';

class SocietyPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections: null
        }
    }
    componentDidMount(){
        const societyRef = database().ref('society/');
        societyRef.on('value', (snapshot)=> {
          const data = snapshot.val()
          this.setState({collections:data})
        });
        
    }
    render(){
        const {collections}=this.state;
        const data = this.props.match.params.id;
        if (!this.state.collections) {
            return (
                <div className="loader loading"></div>
            );
        }
        return (
            <div className='society-page'>
            {
                collections.map(({id,...otherCollectionProps}) =>{
                    if(parseInt(data) === parseInt(id) || parseInt(data) === 0)
                    return <SocietyPreview key={id} {...otherCollectionProps}  />  
                })
            }
            </div>
        )
    }
}

export default SocietyPage;