import React, { Component } from 'react';

import { CardList } from '../components/card-list';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            serachField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }

    render() {
        const { monsters, serachField } = this.state;

        const filteredMonster = monsters.filter(monster =>
            monster.name.toLowerCase().includes(serachField.toLowerCase())
        )
        return (
            <section className="Home">
                <input 
                    type="search" 
                    placeholder="searche monters" 
                    onChange={e => this.setState({ serachField: e.target.value })}
                />
                <CardList monsters={filteredMonster}/>
            </section>
        );
    }
}

export default Home;