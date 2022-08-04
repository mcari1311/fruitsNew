const React = require('react') 

class Show extends React.Component {
    render() {
        const fruit = this.props.fruit 
        return (
            <div> 
                <h1>show page</h1>
                <h2> The {fruit.name} is {fruit.color} <br />
                {fruit.readyToEat? 'It is ready to eat' : 'It is not ready to eat... Cant touch this' }
                </h2>
                </div>

        )
    }
}

module.exports = Show 