import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    render() {
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                        counter={counter}
                    >
                        <h5>Counter #{counter.id}</h5>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;