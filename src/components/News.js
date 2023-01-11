import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=  (props)=>{
      const [articles,setArticles]=useState([])
      const [loading,setLoading]=useState(true)
      const [page,SetPage]=useState(1)
      const [totalResults,setTotalResults]=useState(0)
      

  const  updateNews= async()=> {
    props.setProgress(10)
    setLoading(true)
    const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5052b8dd793249d689d539f86b368188&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(50)
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
  }
//listen to the input empty array
  useEffect(()=>{
    document.title = `News Monkey -${props.category}`
    updateNews();
  }, [])

  const handkePrevClick = async () => {

    SetPage(page-1)
    updateNews();
  }
 const  handleNextClick = async () => {

    SetPage(page+1)
    updateNews();
  }
 const fetchMoreData = async () => {


    const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5052b8dd793249d689d539f86b368188&page=${page+1}&pageSize=${props.pageSize}`;
    SetPage(page+1)
    setLoading( true )
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

 

  };

    return (

      <div className=' container my-3'>
        <h3 style={{ text: "center" }} >Top news</h3>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>)

            })}

          </div>
          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between ">
          <button disabled={page <= 1} type="button" className="btn btn-info mx-3 my-3" onClick={handkePrevClick}> &larr;Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark mx-3 my-3" onClick={handleNextClick}>Next &rarr;</button>
        </div>

      </div>

    )
  
}



News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News