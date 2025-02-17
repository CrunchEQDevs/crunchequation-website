import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardNews from './CardNews';
import { usePosts } from "../utils/PostProvider";
import SkeletonCardNews from './CardNews/SkeletonCardNews';

const News = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const [swiperRef, setSwiperRef] = useState(null);
  const { posts, images, loading } = usePosts();
  const filteredPosts = posts.slice(0,11);

  return (
    <section className="bg-blackBg pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className='w-full py-8 flex items-center justify-center lg:justify-start gap-1'>
          <h2 className='font-bold'>
            BLOG
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div>
            {loading ? (<SkeletonCardNews/>) : (
            <Swiper
              onSwiper={setSwiperRef}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              centeredSlides={false}
              spaceBetween={30}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {filteredPosts.map((news) => (
                <SwiperSlide className='pb-6 w-full' key={news.id}>
                  <CardNews
                    id={news.id}
                    image={images[news.id]}
                    title={news.title?.rendered.replace(/\u00A0/g, ' ')}
                    post={news}
                    slug={news.slug}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;


