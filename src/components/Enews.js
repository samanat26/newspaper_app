import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types';


export class Enews extends Component {

    static defaultProps = {
        country : 'in' ,
        pageSize : 9,
        category : 'general'
    }
        static propTypes = {
            country : PropTypes.string,
            pageSize : PropTypes.number,
            category : PropTypes.string

        }


    constructor() {
        super();
        // console.log("calling constructor");
        this.state = {
            articles: [],
            loading: false,
            page : 1,
            
        }
    }

    async updateNews (){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa6c3f49fd3e448483047adaceff5d7b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState ({loading : true});
        let data= await fetch(url); //it returns a promise
        let parsedData = await data.json();
        this.setState ({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading : false
        });
    }

//life cycle method first constructor run , then render async componentDidMount func run
    async componentDidMount(){ 
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa6c3f49fd3e448483047adaceff5d7b&page=1&pageSize=${this.props.pageSize}`;
        // this.setState ({loading : true});
        // let data= await fetch(url); //it returns a promise
        // let parsedData = await data.json();
        // this.setState ({
        //     articles : parsedData.articles,
        //     totalResults : parsedData.totalResults,
        //     loading : false
        // });
        this. updateNews ();

    }

    handlePrevClick = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa6c3f49fd3e448483047adaceff5d7b&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        // this.setState ({loading : true});
        // let data= await fetch(url); //it returns a promise
        // let parsedData = await data.json();
        // this.setState ({
        //     page : this.state.page -1,
        //     articles : parsedData.articles,
        //     loading : false});
        this.setState ({
                page : this.state.page -1
            });
          this.updateNews ();
    } 
    

    handleNextClick = async ()=>{
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) //to check either the next pg is blank or not
        //  {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa6c3f49fd3e448483047adaceff5d7b&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        //     this.setState ({loading : true});
        //     let data= await fetch(url); //it returns a promise
        //     let parsedData = await data.json();
        //     this.setState ({
        //         page : this.state.page +1,
        //         articles : parsedData.articles,
        //         loading : false});
        //  }
        this.setState ({
            page : this.state.page +1
        });
        this. updateNews ();
        }
            
        


    render() {
        return (
            <div className="container my-4"  style={{margin:"35px,0px"}}>
                <h1 className="text-center">Top Headlines - Breaking News </h1>
                {/* if state.loading is true show Spinner */}
                {this.state.loading&&<Spinner/>} 
                <div className="row">
                    {/* map works as a loop or !this.state.loading false hai toh map kro wrna don't show anything */}
                    {!this.state.loading && this.state.articles.map((element)=> {
                        return (
                        <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description= {element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        {/* <NewsItem title={element.title?element.title.slice(0 , 44):""} description= {element.description?element.description.slice(0, 85):""} imageUrl={element.urlToImage} newsUrl={element.url}/> */}

                    </div>)
                 })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

            </div>
           
        )
    }
}

export default Enews
