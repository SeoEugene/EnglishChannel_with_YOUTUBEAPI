import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import Main from '../components/section/Main';

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet, statistics&id=${videoId}`)
            .then((data) => {
                setVideoDetail(data.items[0]);
                console.log(data);
            })
    }, [videoId]);


    return (
        <Main
            title="비디오를 볼 수 있어요"
            description="비디오를 보아요"
        >
            <section id="videoPage">
                <h2 className='blind'>비디오</h2>
                {videoDetail && (
                    <div className="video__view">
                        <h2 className='video__title'>{videoDetail.snippet.title}</h2>

                        <div className="video__play">
                            <ReactPlayer
                                playing={true}
                                width='100%'
                                height='80vh'
                                // style={{ position: "absolute", top: 0, left: 0 }}
                                url={`https://www.youtube.com/watch?v=${videoId}`} />
                        </div>

                        <div className="video__info">
                            <div className='id'>
                                {videoDetail.snippet.channelTitle}
                            </div>
                            <div className='count'>
                                <span className='view'>{videoDetail.statistics.viewCount}</span>
                                <span className='like'>{videoDetail.statistics.likeCount}</span>
                                <span className='comment'>{videoDetail.statistics.commentCount}</span>
                            </div>
                        </div>
                        <div className="video__desc">
                            {videoDetail.snippet.description}
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Video