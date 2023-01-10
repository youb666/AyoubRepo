import React, { Component } from 'react'

export default class SearchBar extends Component {
    // constructor(props){
    //     super(props)
    //     // this.handleSubmit = this.handleSubmit.bind(this);
    // }
    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.setSearched(e.target.keyword.value)
        console.log(e.target.keyword.value)
    }
  render() {
    return (
      <div>
        <h1>this is the search bar component</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Enter a keyword :</label>
            <input name='keyword' />
            <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}
