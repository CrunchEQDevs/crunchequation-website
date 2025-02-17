import { createContext, useContext, useState, useEffect } from 'react';

const PostsContext = createContext();

export const usePosts = () => useContext(PostsContext);

// URLs para carregar posts de acordo com o idioma
const BASE_URLS = {
    pt: 'https://crunchequation.com/wp_old/wp-json/wp/v2/posts?_embed&per_page=10&wpml_language=pt-pt',
    en: 'https://crunchequation.com/wp_old/wp-json/wp/v2/posts?_embed&per_page=10&wpml_language=en'
};

// Função para buscar posts
const fetchPostsWithImages = async (language) => {
    try {
        // Usa a URL do idioma especificado ou fallback para inglês se não existir
        const url = BASE_URLS[language] || BASE_URLS['en'];
        const response = await fetch(url);

        if (!response.ok) throw new Error('API response error');

        return await response.json();
    } catch (error) {
        console.error('Error fetching posts: ', error);
        return [];
    }
};

// Função para buscar autores
const fetchAuthors = async (authorIds) => {
    if (authorIds.length === 0) return {};

    try {
        const response = await fetch(`https://crunchequation.com/wp_old/wp-json/wp/v2/users?include=${authorIds.join(',')}`);

        if (!response.ok) throw new Error('Error fetching authors');

        const authors = await response.json();
        return authors.reduce((acc, author) => {
            acc[author.id] = author.name;
            return acc;
        }, {});
    } catch (error) {
        console.error('Error fetching authors: ', error);
        return {};
    }
};

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [images, setImages] = useState({});
    const [authors, setAuthors] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

    // Atualiza os posts sempre que o idioma mudar
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const fetchedPosts = await fetchPostsWithImages(language);
                setPosts(fetchedPosts);

                // Processar imagens
                const imageUrls = fetchedPosts.reduce((acc, post) => {
                    if (post.yoast_head_json?.og_image?.[0]?.url) {
                        acc[post.id] = post.yoast_head_json.og_image[0].url;
                    }
                    return acc;
                }, {});
                setImages(imageUrls);

                // Buscar autores
                const authorIds = [...new Set(fetchedPosts.map(post => post.author).filter(id => id))];
                const authorData = await fetchAuthors(authorIds);
                setAuthors(authorData);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [language]);

    // Função para trocar o idioma dinamicamente e carregar os posts em tempo real
    const changeLanguage = (newLanguage) => {
        if (newLanguage !== language) {
            setLanguage(newLanguage);
            localStorage.setItem('language', newLanguage);
        }
    };

    return (
        <PostsContext.Provider value={{ 
            posts, 
            images, 
            authors, 
            loading, 
            error, 
            language,
            changeLanguage
        }}>
            {children}
        </PostsContext.Provider>
    );
};
