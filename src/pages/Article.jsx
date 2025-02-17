import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../utils/PostProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GiPlainCircle } from "react-icons/gi";
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Article = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const { posts, images, authors, language } = usePosts();
  const [post, setPost] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundPost = posts.find((p) => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      const imageUrl = foundPost.yoast_head_json?.og_image?.[0]?.url;
      setCurrentImage(imageUrl);
    } else if (posts.length > 0) {
      toast.info(t('language_changed'), {
        position: "bottom-center",
        autoClose: 1000,
        icon: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: 'w-[90%] md:w-auto text-center bg-blackBg text-primary !important',
        style: {
          maxWidth: '500px',
          margin: '0 auto',
          background: '#DB7C22',
          color: '#282828',
          fontWeight: 'bold'
        },
        progressStyle: {
          background: '#DB7C22'
        },
        closeButton: {
          style: {
            color: '#DB7C22'
          }
        }
      });

      const translatedPost = posts.find(p => 
        p.date_gmt === post?.date_gmt
      );
      
      if (translatedPost) {
        setPost(translatedPost);
        const imageUrl = translatedPost.yoast_head_json?.og_image?.[0]?.url;
        setCurrentImage(imageUrl);
        
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(slug, translatedPost.slug);
        navigate(newPath);
      } else {
        toast.error(t('article_not_found'), {
          position: "bottom-center",
          autoClose: 1000,
          className: 'w-[90%] md:w-auto text-center bg-blackBg text-primary !important',
          style: {
            maxWidth: '500px',
            margin: '0 auto',
            background: '#DB7C22',
            color: '#282828'
          },
          progressStyle: {
            background: '#DB7C22'
          },
          closeButton: {
            style: {
              color: '#DB7C22'
            }
          }
        });
        navigate(`/${language}/blog/`);
      }
    }
  }, [slug, posts, language, post, navigate, t]);

  // Adicione um useEffect para lidar com a mudança de idioma
  useEffect(() => {
    const handleLanguageChange = () => {
      const translatedPost = posts.find(p => p.slug === slug);
      if (translatedPost) {
        setPost(translatedPost);
        const imageUrl = translatedPost.yoast_head_json?.og_image?.[0]?.url;
        setCurrentImage(imageUrl);
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(slug, translatedPost.slug);
        navigate(newPath);
      } else {
        // Se não houver tradução, busque o artigo em inglês
        const fallbackPost = posts.find(p => p.slug === slug && p.language === 'en');
        if (fallbackPost) {
          setPost(fallbackPost);
          const imageUrl = fallbackPost.yoast_head_json?.og_image?.[0]?.url;
          setCurrentImage(imageUrl);
          const currentPath = window.location.pathname;
          const newPath = currentPath.replace(slug, fallbackPost.slug);
          navigate(newPath);
        }
      }
    };

    handleLanguageChange();
  }, [i18n.language]);

  if (!post) {
    return null;
  }

  const authorPost = (postAuthorId) => {
    if (!authors || !postAuthorId) return t('Unknown Author');
    return authors[postAuthorId] || t('Unknown Author');
  };

  const formattedDate = (postDate) => {
    const date = new Date(postDate);
    const year = date.getFullYear();
    const namesMonth = [
      t('jan'),
      t('feb'),
      t('mar'),
      t('apr'),
      t('may'),
      t('jun'),
      t('jul'),
      t('aug'),
      t('sep'),
      t('oct'),
      t('nov'),
      t('dec'),
    ];

    const month = namesMonth[date.getMonth()];
    const day = date.getDate();
    return `${day} ${t('de')} ${month} ${year}`;
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className=" lg:pb-20 pb-10 bg-pretoQuase100 text-white">
        <div className=" mx-auto w-full gap-8 flex flex-col items-center justify-center relative after:absolute after:top-0 z-50 after:-z-10 after:left-0 after:max-w-7xl after:w-full after:h-full after:md:bg-logoOpacity after:md:bg-contain after:bg-none after:bg-center  after:bg-no-repeat after:content-['']">
          <div className='flex flex-col h-72 lg:h-[450px] w-full relative items-center'>
            <div className="absolute z-10 after:absolute after:top-0 after:left-0 after:w-full  after:h-full after:bg-bgOpacity w-full px-0 h-full flex justify-center items-center">
            <img
              key={currentImage || images[post.id]} // Força a recarga da imagem
              src={currentImage || images[post.id]}
              alt={post.title.rendered}
              className="object-cover w-full h-full"
            />
            </div>
            <div className="absolute py-5 gap-3 z-20 max-w-5xl w-full bottom-0 flex flex-col items-center justify-center">
              <h1 className="w-full text-center lg:px-0 px-2 text-xl lg:text-start md:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
                {post.title.rendered}
              </h1>
              <div className="w-full flex gap-5 items-center justify-center lg:text-base text-xs lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="text-laranja">
                    <GiPlainCircle size={8} />
                  </div>
                  <span>{authorPost(post.author)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-laranja">
                    <GiPlainCircle size={8} />
                  </div>
                  <p>{formattedDate(post.date)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md px-6 md:px-0 w-full md:max-w-2xl lg:max-w-5xl text-lg leading-relaxed">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.rendered
                  .replace(/<br\s*\/?>/gi, "")
                  .replace(/<h4/g, '<h4 class="h4-article"')
                  .replace(/<h5/g, '<h5 class="h5-article"')
                  .replace(/<li/g, '<li class="li-article"')
                  .replace(/<p/g, '<p class="p-article"'),
              }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
