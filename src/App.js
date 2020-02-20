import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [ 
        {
          name: 'Vazovskyi',
          id: '1',
          email: 'alias@mac.com'
        },
        {
          name: 'Drakula',
          id: '2',
          email: 'cyrus@gmail.com'
        }, 
        {
          name: 'Zombie',
          id: '3',
          email: 'tbusch@aol.com'
        },
        {
          name: 'Beatrix',
          id: '4',
          email: 'openldap@aol.com'
        },
        {
          name: 'Batman',
          id: '5',
          email: 'janneh@msn.com'
        }, 
        {
          name: 'Skywalker',
          id: '6',
          email: 'mrdvt@msn.com'
        },
        {
          name: 'Deadpool',
          id: '7',
          email: 'goresky@outlook.com'
        }, 
        {
          name: 'Spiderman',
          id: '8',
          email: 'sbmrjbr@mac.com'
        },{
          name: 'Darthwayder',
          id: '9',
          email: 'fudrucker@mac.com'
        }, 
        {
          name: 'Chubaka',
          id: '10',
          email: 'tskirvin@icloud.com'
        }
      ],
      searchFilter: ''
    };
  } 
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    let x = response.json();
    console.log(x);
  }
  ); 
}
  handleChange = (e) => { 
    this.setState({ searchFilter: e.target.value })
  };
  render() {
    const {monsters, searchFilter} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFilter.toLowerCase()))
    return (
      <div className="App">
        <h1>The Monsters</h1>
        <SearchBox placeholder='search monsters' handleChange={ this.handleChange } />
        <CardList monsters={filteredMonsters} />
      </div> 
    )
  }
}

export default App;
