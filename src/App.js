import React, { Component } from 'react'
import './App.css'
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    this.search = this.search.bind(this);
    this.searchResult = this.searchResult.bind(this);
  }

  componentDidMount(){
    fetch('./data.json')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}) )
  }

  search(e){
    this.setState({searchField: e.target.value}, () => this.searchResult())
  }

  searchResult(){
    const {monsters, searchField} = this.state;
    if(searchField.length) {
      return monsters.filter(monster =>  {
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
      })
    }
    return monsters
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.search} />
        {this.searchResult().length ? <CardList monsters={this.searchResult()}/> : <h1>No matches</h1>}
      </div>
    );
  }
}
