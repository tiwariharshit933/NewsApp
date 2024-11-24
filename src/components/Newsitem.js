import React from 'react';
import fallbackImg from '../images/download.jpeg'


const Newsitem = ({ title, description, src, url },{currentItems}) => {

    return (
        <>
            <div className="card cardStyle" id='cardStyle'>
            {/* {currentItems && currentItems.map((title, description, src, url) => ( */}
                <a href={url} rel="noreferrer" target='_blank'>
                    <h5 className="card-title customCSS">{title}</h5>
                    <div className="card-body">
                        <div className='textflex d-flex flex-row'>
                            <div className='imageBox'>
                                {src ? <img src={src} className="card-img-top" alt="NoImage" /> : <img src={fallbackImg} className="card-img-top" alt="NoImage" />}
                            </div>
                            <p className="card-text body_custom">{description ? description : "Due to some reasons content is not showing. Please click on it to read news."}</p>
                        </div>
                    </div>
                </a>

            {/* ))} */}
            </div>
        </>
    )
}

export default Newsitem
