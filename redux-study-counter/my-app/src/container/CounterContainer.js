import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement, reset } from '../store/modules/counter';

const mapStateToProps = ({ counter }) => ({
    number: counter.number,
});

const mapDispatchToProps = {increment, decrement, reset};

class CounterContainer extends Component {
    handleIncrement = () => {
        this.props.increment();
    };
    handleDecrement = () => {
        this.props.decrement();
    };
    handleReset = () => {
        this.props.reset();
    };

    render(){
        const { number } = this.props;
        return(
            <Counter
                value={number}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onReset={this.handleReset}
            />
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);