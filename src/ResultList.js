import React, { Component } from 'react'

export default class ResultList extends Component {
  render() {
    const {category,allElements} = this.props
    return (
      <div>
        <ul>
            {allElements.filter(item => item.category === category).map(
                (item,index)=>
                <li key={index}>{item.name}</li>
                )}
        </ul>
      </div>
    )
  }
}
