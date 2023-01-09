import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News  extends Component {

  constructor(){
    super();

    this.state={
      articles:[],
      loading:false
    }
  }
 async componentDidMount(){
    let url=" https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5052b8dd793249d689d539f86b368188";
    let data = await fetch(url);
    let parsedData= await data.json();

    this.setState({articles:parsedData.articles});

  }
  render() {
    return (
     
      <div className='mx-3  my-3'>
        <h3>Top news</h3>

        <div className="row">
        {this.state.articles.map((element)=>{
          return (
          <div className="col-md-3"  key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>)

        })}
           
        </div>
      </div>
      
    )
  }
}
