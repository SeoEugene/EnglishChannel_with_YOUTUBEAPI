import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VideoSearch from '../components/video/VideoSearch'
import { fetchFromAPI } from '../utils/api'
import Main from '../components/section/Main';



const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
        setLoading(true);
    }, [searchId]);


    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)

            .then((data) => {

                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items])
                console.log(data)
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error fetching data", error);
                setLoading(false);
            })
    }

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    }

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';


    return (
        <Main
            title="서치하는 공간"
            description="흥미가 생길만한 영상을 골라보아요"
        >
            <section id='searchPage'>
                <h2>😀 <em>{searchId}</em> 검색 결과입니다.</h2>

                <div className={`video__inner ${channelPageClass}`}>
                    <VideoSearch videos={videos} />
                </div>

                <div className="video__more">
                    <button onClick={handleLoadMore}>더 보기</button>
                </div>
            </section>
        </Main >

    )

}
export default Search