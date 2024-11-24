import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';

const Newsboard = ({ category }) => {

  const [article, setArticles] = useState([])

  
  // let key_ = process.env.API_KEY
  // console.log(key_)

  useEffect(() => {


    let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${process.env.API_KEY}`;

    fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
  }, [category])



  return (
    <>
      <div className='mainBoard'>

        <div className='NewsBoardMain d-flex text-center flex-wrap container'>
          {
            article.filter(news_ => news_.title !== "[Removed]").map((news_, index) => {
              return <Newsitem key={index} title={news_.title} description={news_.description}
                src={news_.urlToImage} url={news_.url} />
            })
          }

        </div>
        
      </div>
    </>
  )
}

export default Newsboard
