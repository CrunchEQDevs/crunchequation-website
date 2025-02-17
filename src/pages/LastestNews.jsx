import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/index.jsx';
import Footer from '../components/Footer/index.jsx';
import CardNews from '../components/CardNews';
import { usePosts } from '../utils/PostProvider';
import SkeletonCardNews from '../components/CardNews/SkeletonCardNews';

const LastestNews = () => {
  const { posts, images, loading, language } = usePosts();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [language]);

  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <div className=' mx-auto h-full px-4 py-8 bg-blackBg'>
        <div className='lg:py-8'>
          <h2 className="text-white text-center text-3xl lg:text-4xl font-bold mb-6">BLOG</h2>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-screen lg:max-w-screen-2xl lg:mx-auto">
            {[...Array(6)].map((_, index) => (
              <SkeletonCardNews key={index} />
            ))}
          </div>
        ) : currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-screen-2xl lg:mx-auto">
            {currentPosts.map((news) => (
              <CardNews
                key={news.id}
                id={news.id}
                image={images[news.id]}
                title={news.title?.rendered.replace(/\u00A0/g, ' ')}
                post={news}
                slug={news.slug}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-dvh">
            <p className="text-white text-xl">No posts available</p>
          </div>
        )}

        {/* Paginação */}
        {currentPosts.length > 0 && (
          <div className="flex justify-center mt-6">
            <ul className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`px-3 py-1 border ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'text-orange-500'} cursor-pointer`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LastestNews;
