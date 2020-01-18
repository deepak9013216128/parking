import React from 'react';
import Society from '../society/society.component';
import './directory.style.css'

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            societies:[
                {
                    societyName: 'KALANDI WELFARE SOCIETY',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6XyC6z-79bZQKv6ih7dbSfW-ZQPyY37ydsNoQAFZtPu8YkWtP',
                    id: 1,
                    linkUrl: 'society/1'
                },
                {
                    societyName: 'NEW LAJPAT RAI MARKET (P.G MKT) TRADERS ASSOCIATION',
                    imageUrl: 'https://img.staticmb.com/mbcontent/images/uploads/2014/09/boisar-thane.jpg',
                    id: 2,
                    linkUrl: 'society/2'
                },
                {
                    societyName: 'GYAN SHRI EDUCATIONAL WELFARE SOCIETY',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlC6cS9FW8sTfA909i_f-hIDVoo0Qm8g2I66aE3bXJaExloIp2',
                    id: 3,
                    linkUrl: 'society/3'
                },
                {
                    societyName: 'TIRAHA BEHRAM KHAN TRADER ASSOCIATION',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYbQbRYHXaE8fUUQpntwNcHo6PSGcmtJuKXvQX0wsji6uJQ1yO',
                    size: 'large',
                    id: 4,
                    linkUrl: 'society/4'
                },
                {
                    societyName: 'TERAPANTH PROFESSIONAL FORUM',
                    imageUrl: 'https://img1.ebuild.in/ebuild.in/imksp23841_290/marble-arch-by-morphogenesis1.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'society/5'
                }
            ]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.societies.map(({id,...otherSocietyProps}) =>
                        <Society key={id} {...otherSocietyProps}/>    
                    )
                }
            </div>
        )
    }
}

export default Directory;