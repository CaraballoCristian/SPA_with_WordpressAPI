const NAME = "css-tricks",
    DOMAIN = `https://${NAME}.com`,
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    PER_PAGE = 20, 
    POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
    HOME = `${API_WP}/posts?_embed&per_page=1`,
    POST = `${API_WP}/posts?slug=`,
    ID = `${API_WP}/posts`,
    USER = `${API_WP}/users`,
    SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1;

export default{
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    PER_PAGE,
    POSTS,
    POST,
    HOME,
    ID,
    USER,
    SEARCH,
    page
}
