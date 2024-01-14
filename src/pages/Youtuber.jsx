import React from 'react'
import { youtuberText } from '../data/youtuber'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main';


const Youtuber = () => {
    return (
        <Main
            title="English Youtuber"
            description="한국어 영어에 능통한 유튜버들입니다."
        >
            <section id='youtuber' className='page'>
                <h2>English Channel Youtubers</h2>
                <div className='youtuber__inner'>
                    {
                        youtuberText.map((youtuber, index) => (

                            <div className="youtuber">
                                <div className='youtuber__img'>
                                    <Link to={`/channel/${youtuber.channelId}`}>
                                        <img src={youtuber.img} alt={youtuber.author} />
                                    </Link>
                                </div>
                                <div className="youtuber__info">{youtuber.author}</div>
                            </div>
                        ))
                    }
                </div >
            </section >
        </Main>
    )
}

export default Youtuber