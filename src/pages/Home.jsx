import React, { useEffect, useState } from 'react'
import Today from '../components/contents/Today'
import Youtuber from '../components/contents/Youtuber'
import { fetchFromAPI } from '../utils/api';

import Main from '../components/section/Main'
import VideoSlider from '../components/video/VideoSlider'
// import axios from 'axios'

const Home = () => {
    // 1. 채널 값을 가져온다.
    // 2. 채널 값에 해당하는 동영상 데이터를 가져와 출력한다.
    //      - API를 이용

    //useState : 상태가 변경되면 React는 해당 컴포넌트를 다시 렌더링
    // useEffect : 데이터 가져오기, 구독 설정, 타이머 설정 등과 같은 작업을 수행

    // 채널 값이 변경
    const [channelVideo, setChannelVideo] = useState([]);

    // 데이터 가져오기
    useEffect(() => {
        const v1 = "UC91ipvI9CR1_s1KATHvzATw";

        const fetchResults = async () => {
            try {
                const videosData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`)
                setChannelVideo(videosData.items);
                console.log(videosData.items);
            } catch (error) {
                console.error('Error fetching video data:', error)
            }
        }
        fetchResults();
    }, [])

    return (
        <Main
            title="영어 유튜버"
            description="영어 유튜버 모음 사이트에 오신것을 환영합니다."
        >
            <Today />
            <Youtuber />

            <VideoSlider videos={channelVideo} title='최신 영상' name='v1' />
        </Main >
    )
}

export default Home