import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const VideoSlider = ({ videos, name1, name2 }) => {
    return (
        <section id={name1}>
            <h3>{name2}</h3>
            <div className="video__slider">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                    className={`mySwiper-${name1}`}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        1600: {
                            slidesPerView: 5,
                            spaceBetween: 20
                        }
                    }}
                >
                    {videos.map((video, key) => (
                        <SwiperSlide key={key}>
                            <div className="video">
                                <div className="video__thumb play__icon">
                                    <Link
                                        to={`/video/${video.id.videoId}`}
                                        style={{ backgroundImage: `url(${video.snippet.thumbnails.high && video.snippet.thumbnails.high.url})` }}
                                    >
                                    </Link>
                                </div>
                                <div className="video__info">
                                    <h3 className='title'>
                                        <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                                    </h3>
                                    <div className='info'>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>

    )
}

export default VideoSlider