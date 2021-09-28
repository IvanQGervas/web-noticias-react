import React, { Component } from "react";
import Card from '../Card'

class ListNews extends Component {

  state = {
    news: [this.props.news]
  }

  render() {
    return (
      <div>
        {this.state.news.map(el => <Card  />)}
      </div>
    );
  }
}

export default ListNews;
