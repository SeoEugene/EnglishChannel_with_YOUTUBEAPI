import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main';
import { fetchFromAPI } from '../utils/api'
import { Link } from 'react-router-dom';

const Today = () => {
    const [todayvideos, settodayvideos] = useState([]);

    // 비디오 가져오기
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videos = await fetchFromAPI(`search?type=video&part=snippet&q=english channel korean`)
                settodayvideos(videos.items);
                console.log(todayvideos);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };
        fetchVideos();
    }, [todayvideos]);

    return (
        <Main
            title="Today Video"
            description="오늘의 추천 영상"
        >
            <section id='today'>
                <h2>Today Video</h2>
                <div>
                    {/* <Swiper slidesPerView={5}> */}
                    {todayvideos.map((video, index) => (
                        <div className="today__inner" key={index}>
                            <div className="today__thumb">

                                <Link to={`/video/${video.id.videoId}`} style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}></Link>
                            </div>
                            <div className='today__text'>
                                <span className='today'>오늘의 픽</span>
                                <h3 className='title'>{video.snippet.title}</h3>
                                <p className='desc'>{video.snippet.description}</p>
                                <div className="info">
                                    <span className='author'></span>
                                    <span className='data'></span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* </Swiper> */}
                </div>

            </section>
        </Main >
    )
}

export default Today