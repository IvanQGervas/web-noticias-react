import React, { Component } from "react";
import axios from "axios";


import cogoToast from 'cogo-toast';

import Card from '../Card'

class ListNews extends Component {

  state = {
    news: [...this.props.news]
  }

  removeFunction = (index) => {
    this.setState({ news: this.state.news.filter((el, i) => i !== index) })
  };

  async componentDidMount() {
    const res = await axios.get(process.env.REACT_APP_URL)
    const data = await res.data.articles

    this.setState({ news: [...this.state.news, ...data] })
  }

  render() {
    // cogoToast.success("Success!");
    console.log(this.state.news);
    return (
      <div>
        {this.state.news.map((el, index) => <Card removeFunction={() => this.removeFunction(index)} value={el} key={index} />)}
      </div>
    );
  }
}

export default ListNews;
