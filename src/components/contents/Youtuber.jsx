import React from 'react'
import { youtuberText } from '../../data/youtuber'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const youtuber = () => {
    return (

        <section id='youtuber'>
            <div className='youtuber__inner'>
                <h2>English Channel Youtubers</h2>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        400: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        800: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 20
                        },
                        1600: {
                            slidesPerView: 6,
                            spaceBetween: 20
                        },
                    }}
                >
                    {youtuberText.map((youtuber, index) => (
                        <SwiperSlide>
                            <div className="youtuber">
                                <div className='youtuber__img'>
                                    <Link to={`/channel/${youtuber.channelId}`}>
                                        <img src={youtuber.img} alt={youtuber.author} />
                                    </Link>
                                </div>
                                <div className="youtuber__info">{youtuber.author}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    )
}

export default youtuber