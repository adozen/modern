import React from 'react';
import ReactDOM from 'react-dom';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: props.names || []
        };
    }

    add() {
        const elem = this.refs.input;
        const name = elem.value;
        if (name) {
            elem.value = '';
            this.state.names.push(name);
            this.setState({});
        } else {
            elem.focus();
        }
    }

    del(i) {
        this.state.names.splice(i, 1);
        this.setState({});
    }

    render() {
        return (
            <div className="todo">
                <div>
                    <input
                        ref="input"
                        placeholder="Type member name">
                    </input>
                    <button
                        className="btn"
                        onClick={this.add.bind(this)}>
                        Add member
                    </button>
                </div>
                <ul>
                    {
                        this.state.names.map((name, i) => {
                            return (
                                <li key={i}>
                                    <span>Member name: {name}</span>
                                    <button
                                        className="btn"
                                        onClick={this.del.bind(this, i)}>
                                        Remove member
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}