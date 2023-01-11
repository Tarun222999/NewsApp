import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        //Array destructuring
        let {title,description,imageUrl,newsUrl,author,date}=this.props

        return (
            <div className=' container'>
                <div className="card my-3" >
                    <img src={!imageUrl?"https://img.etimg.com/thumb/msid-96836000,width-1070,height-580,imgsize-120772/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {author?author:"Unkown"} on {date}</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">ReadMore</a>
                        </div>
                </div>
            </div>
        )
    }
}
