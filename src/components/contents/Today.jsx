import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../../utils/api'
import { Link } from 'react-router-dom';


const Today = () => {
    const [todayvideos, settodayvideos] = useState(null);

    // 비디오 가져오기
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videos = await fetchFromAPI(`search?type=video&part=snippet&q=english channel korean`)
                settodayvideos(videos.items[0]);
                console.log(todayvideos);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };
        fetchVideos();
    }, []);

    if (!todayvideos) {
        // 데이터가 아직 로딩 중이면 로딩 상태를 표시하거나 아무것도 표시하지 않음
        return <p>Loading...</p>;
    }

    return (
        <section id='today' className='bgcyellow'>
            <h2>Today Video</h2>
            <div className="today__inner">
                <div className="today__thumb">
                    <Link to={`/video/${todayvideos.id.videoId}`} style={{ backgroundImage: `url(${todayvideos.snippet.thumbnails.high.url})` }}></Link>
                </div>

                <div className='today__text'>
                    <span className='today'>오늘의 픽</span>

                    <h3 className='title'>{todayvideos.snippet.title}</h3>
                    <p className='desc'>
                        {todayvideos.snippet.description}
                    </p>
                    <div className="info">
                        <span className='author'></span>
                        <span className='data'></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today