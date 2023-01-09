import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News  extends Component {
  articles= [
    {
        "source": {
            "id": "news24",
            "name": "News24"
        },
        "author": "Khanyiso Tshwaku",
        "title": "Proteas show steel to earn gritty draw, avoid series whitewash against Aussies",
        "description": "The Proteas snapped a four-match losing streak when they drew the third Test against Australia at the Sydney Cricket Ground on Sunday.",
        "url": "https://www.news24.com/sport/cricket/proteas/proteas-show-steel-to-earn-gritty-draw-avoid-series-whitewash-against-aussies-20230108",
        "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/520/7b9921dc36db4dc3959b98c07d82453b.jpg",
        "publishedAt": "2023-01-08T08:34:57+00:00",
        "content": "The Proteas snapped a four-match losing streak when they drew the third Test against Australia at the Sydney Cricket Ground on Sunday.\r\nAfter being bowled out for 255 in response to Australia's 475/4… [+1471 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
  constructor(){
    super();
    console.log("hi i am constructor news component");
    this.state={
      articles:this.articles,
      loading:false
    }
  }
  render() {
    return (
      
      <div className='mx-3  my-3'>
        <h3>Top news</h3>

        <div className="row">
        {this.state.articles.map((element)=>{
          return (
          <div className="col-md-3"  key={element.url}>
          <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>)

        })}
           
        </div>
      </div>
      
    )
  }
}
