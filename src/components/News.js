import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1

    }
    document.title = `News Monkey -${props.category}`
    // document.title=this.props.category
  }
  async updateNews() {
    this.setState({ loading: true })
    const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5052b8dd793249d689d539f86b368188&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handkePrevClick = async () => {

    this.setState({ page: this.state.page - 1, loading: false });
    this.updateNews();
  }
  handleNextClick = async () => {

    this.setState({ page: this.state.page + 1, loading: false });
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
 
    const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5052b8dd793249d689d539f86b368188&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
 
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  render() {
    return (

      <div className=' container my-3'>
        <h3 style={{ text: "center" }} >Top news</h3>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>)

            })}

          </div>
          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-info mx-3 my-3" onClick={this.handkePrevClick}> &larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark mx-3 my-3" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>

    )
  }
}
