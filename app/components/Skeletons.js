const postCardLoader = () => {
    return `
    <article  class="loader-post-card">
        <div class="loader-post-card-top">
            <div class="loader-post-card-top-img skeleton"></div>
        </div>      

        <div class="loader-post-card-bottom">
            <div class="loader-post-card-bottom-text">
                <div class="loader-post-card-bottom-text-title skeleton"></div>
                <div class="loader-post-card-bottom-text-title2 skeleton"></div>
                <div class="loader-post-card-bottom-text-link skeleton"></div>
            </div>
            <div class="loader-post-card-bottom-author">
                <div class="loader-post-card-bottom-author-img skeleton">
                <div class="loader-post-card-bottom-author-figcaption">
                    <div class="loader-post-card-bottom-author-figcaption-h3 skeleton"></div>
                    <div class="loader-post-card-bottom-author-figcaption-date skeleton" datetime=""></div>
                </div>
            </div>
        </div > 
    </article>
`;
}
const searchCardLoader = () => {
    return `
    <article class="loader-search-card">
        <div class="loader-search-card-body">
            <div class="loader-search-card-body-author">
                <div class="loader-search-card-body-author-img skeleton"></div>
                <div class="loader-search-card-body-author-text">
                    <div class="loader-search-card-body-author-text-name skeleton"></div>
                    <div class="loader-search-card-body-author-text-date skeleton"></div>
                </div>
            </div>
            <div class="loader-search-card-body-content">
                <div class="loader-search-card-body-content-title skeleton"></div>
                <div class="loader-search-card-body-content-subtitle skeleton"></div>
                <div class="loader-search-card-body-content-link skeleton"></div>
            </div>
        </div>
    </article>
`;
}
const postLoader = () => {
    return `
    <section class="loader-post-section">

        <div class="loader-post-section-header">
            <div class="loader-post-section-header-left">
                <div class="loader-post-section-header-left-title skeleton"></div>
                <div class="loader-post-section-header-left-author">
                    <div class="loader-post-section-header-left-author-img skeleton"></div> 
                    <div class="loader-post-section-header-left-author-text">
                        <div class="loader-post-section-header-left-author-text-name skeleton"></div>
                        <div class="loader-post-section-header-left-author-text-date skeleton"></div>
                    </div>    
                </div>            
            </div>
            <div class="loader-post-section-header-right"></div>
        </div>

        <div class="loader-post-section-content">
            <div class="loader-post-section-content-main">
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
                <div class="loader-post-section-content-main-text skeleton"></div>
            </div>
            <div class="loader-post-section-content-aside">
                <div class="loader-post-section-content-aside-title skeleton"></div>
                <div class="loader-post-section-content-aside-post">
                    <div class="loader-post-section-content-aside-post-text">
                        <div class="loader-post-section-content-aside-post-text-title skeleton"></div>
                        <div class="loader-post-section-content-aside-post-text-date skeleton"></div>
                    </div>
                    <div class="loader-post-section-content-aside-post-img skeleton"></div>
                </div>
                <div class="loader-post-section-content-aside-post">
                    <div class="loader-post-section-content-aside-post-text">
                        <div class="loader-post-section-content-aside-post-text-title skeleton"></div>
                        <div class="loader-post-section-content-aside-post-text-date skeleton"></div>
                    </div>
                    <div class="loader-post-section-content-aside-post-img skeleton"></div>
                </div>
                <div class="loader-post-section-content-aside-post">
                    <div class="loader-post-section-content-aside-post-text">
                        <div class="loader-post-section-content-aside-post-text-title skeleton"></div>
                        <div class="loader-post-section-content-aside-post-text-date skeleton"></div>
                    </div>
                    <div class="loader-post-section-content-aside-post-img skeleton"></div>
                </div>
                <div class="loader-post-section-content-aside-post">
                    <div class="loader-post-section-content-aside-post-text">
                        <div class="loader-post-section-content-aside-post-text-title skeleton"></div>
                        <div class="loader-post-section-content-aside-post-text-date skeleton"></div>
                    </div>
                    <div class="loader-post-section-content-aside-post-img skeleton"></div>
                </div>
                <div class="loader-post-section-content-aside-post">
                    <div class="loader-post-section-content-aside-post-text">
                        <div class="loader-post-section-content-aside-post-text-title skeleton"></div>
                        <div class="loader-post-section-content-aside-post-text-date skeleton"></div>
                    </div>
                    <div class="loader-post-section-content-aside-post-img skeleton"></div>
                </div>
                <div class="loader-post-section-content-aside-post">
                    <div class="loader-post-section-content-aside-post-text">
                        <div class="loader-post-section-content-aside-post-text-title skeleton"></div>
                        <div class="loader-post-section-content-aside-post-text-date skeleton"></div>
                    </div>
                    <div class="loader-post-section-content-aside-post-img skeleton"></div>
                </div>
                    
            </div>
        </div>
    </section>  
    ` 
}

export default{
    postCardLoader,
    searchCardLoader,
    postLoader,
}