import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/api';
import { useParams } from 'react-router-dom';
import Main from '../components/section/Main';


const Channel = () => {
    const { channelId } = useParams();                          // 채널 아이디 가져오기
    const [channelDetail, setChannelDetail] = useState();       // 정보보기
    const [channelVideo, setChannelVideo] = useState([]);       // 비디오보기
    const [loading, setLoading] = useState(true);               // 로딩
    const [nextPageToken, setNextPageToken] = useState(null);   // 더보기

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
                setChannelVideo(videoData.items);
                setNextPageToken(videoData.nextPageToken);
            } catch (error) {
                console.log("Eroor -> ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchResults();
    }, [channelId])

    const loadMoreVideos = async () => {
        if (nextPageToken) {
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
            setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
            setNextPageToken(videosData?.nextPageToken);
        }
    }

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main
            title="English Channel"
            description="영어를 접하기 쉬운 채널"
        >
            <section id='channelPage' className={channelPageClass}>
                {channelDetail && (
                    <div className="channel__inner">
                        <div className="channel__header">
                            <div className='backImg' style={{ backgroundImage: channelDetail ? `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` : 'none' }}>
                            </div>
                            <div className='useImg'><img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.brandingSettings.channel.title} /></div>
                            <div className="nickname">{channelDetail.brandingSettings.channel.title}</div>
                        </div>

                        <div className="channel__info">
                            <div className="channel__video">
                                {channelVideo.map((video, index) => (
                                    <div className="video__inner" key={index}>
                                        <div className="video__thumbnails" style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }} alt={video.snippet.title}></div>
                                        <div className="video__title">
                                            {video.snippet.title}
                                        </div>
                                        {/* <div className="video__desc">
                                        {video.snippet.description}
                                    </div> */}
                                    </div>
                                ))}

                            </div>
                            <div className="channel__more">
                                {nextPageToken && <button onClick={loadMoreVideos}>더 보기</button>}
                            </div>
                        </div>
                    </div>

                )
                }
            </section >
        </Main>
    )
}

export default Channel