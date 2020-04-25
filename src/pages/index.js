import React, { Component } from 'react';

import { CardList } from '../components/card-list';
import SearchBox from '../components/search-box';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            serachField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }

    handleChange = e => {
        this.setState({ serachField: e.target.value });
    }

    render() {
        const { monsters, serachField } = this.state;

        const filteredMonster = monsters.filter(monster =>
            monster.name.toLowerCase().includes(serachField.toLowerCase())
        )
        return (
            <section className="monsters-home">
                <h1 className="monster-title">Monsters Rolodex</h1>
                <div className="input-search">
                    <SearchBox 
                        placeholder={'search monsters'}
                        handleChange={this.handleChange} 
                    />
                </div>
                <CardList monsters={filteredMonster}/>
            </section>
        );
    }
}

export default Home;