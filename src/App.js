import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ResultList from './ResultList';


export default class App extends Component {
  constructor(){
    super()
    this.state = {searchedWord: ""}

    this.data = [{name:"tomato",category:"vegetable"},
    {name:"apple",category:"fruit"},
    {name:"peach",category:"fruit"},
    {name:"potato",category:"vegetable"},
    {name:"onion",category:"vegetable"},
    {name:"tomato",category:"vegetable"},
    {name:"kiwi",category:"fruit"},
    {name:"watermelon",category:"fruit"},
    {name:"pumpkin",category:"vegetable"}
  ]
  }
  handleState = (word)=>{
    this.setState({searchedWord:word})
  }
  render() {
    return (
      <div>
        <SearchBar setSearched={this.handleState} />
        {this.state.searchedWord.length>6 && `the searched word is: ${this.state.searchedWord} ` }
        <ResultList category={this.state.searchedWord} allElements={this.data}  />
      </div>
    )
  }
}

