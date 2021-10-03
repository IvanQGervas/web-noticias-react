import React, { Component } from "react";
import axios from "axios";

// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Masonry from 'react-masonry-css'

// import cogoToast from 'cogo-toast';

import Card from '../Card'

class ListNews extends Component {

  state = {
    news: [...this.props.news]
  }

  removeFunction = (index) => {
    const updatedNews = this.state.news.filter((el, i) => i !== index)
    this.setState({ news: updatedNews })
  };

  async componentDidMount() {
    const res = await axios.get(process.env.REACT_APP_URL)
    const data = await res.data.articles

    this.setState({ news: [...this.state.news, ...data] })
  }

  render() {
    const breakpointColumnsObj = {
      default: 3,
      1024: 2,
      630: 1
    };
    console.log(this.state.news);
    return (
      // <div>
      // { this.state.news.map((el, index) => <Card removeFunction={() => this.removeFunction(index)} value={el} key={index} />) }
      // </div>
      <div className="list-news">
        <div className="list-news--container">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {this.state.news.map((el, index) => <Card removeFunction={() => this.removeFunction(index)} value={el} key={index} />)}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default ListNews;
