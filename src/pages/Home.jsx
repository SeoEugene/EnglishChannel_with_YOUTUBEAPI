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
    const [channelVideo1, setChannelVideo1] = useState([]);
    const [channelVideo2, setChannelVideo2] = useState([]);
    const [channelVideo3, setChannelVideo3] = useState([]);
    const [channelVideo4, setChannelVideo4] = useState([]);

    // 데이터 가져오기
    useEffect(() => {
        const v1 = "UC91ipvI9CR1_s1KATHvzATw";
        const v2 = "UCOgGAfSUy5LvEyVS_LF5kdw";
        const v3 = "UCiTCEqdWFfDy_0BnGttBmDQ";
        const v4 = "UCqJODva8CJ_JTbi5ssC2L-g";

        const fetchResults = async () => {
            try {
                const videosData1 = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`)
                const videosData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`)
                const videosData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`)
                const videosData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`)
                setChannelVideo1(videosData1.items);
                setChannelVideo2(videosData2.items);
                setChannelVideo3(videosData3.items);
                setChannelVideo4(videosData4.items);
                // console.log(videosData1.items);
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


            <VideoSlider videos={channelVideo1} name1='v1' name2='Yoora Jung' />
            <VideoSlider videos={channelVideo2} name1='v2' name2='영국남자 Korean Englishman' />
            <VideoSlider videos={channelVideo3} name1='v3' name2='융나YoongNa' />
            <VideoSlider videos={channelVideo4} name1='v4' name2='Michelle Choi' />
        </Main >
    )
}

export default Home