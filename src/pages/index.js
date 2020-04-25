import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [
                {
                    name: 'Frankenstein',
                    id: '21'
                },
                {
                    name: 'Dracula',
                    id: '22'
                },
                {
                    name: 'Zombie',
                    id: '23'
                },

            ]
        };
    }
    render() {
        return (
            <section className="Home">
                {
                   this.state.monsters.map(
                   monster => <h1 key={monster.id}> { monster.name } </h1>
                    )
                }
            </section>
        );
    }
}

export default Home;