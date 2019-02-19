import React from 'react'
import {increaseNumber,decreaseNumber} from '../redux/actions'
import {connect} from 'react-redux'

class Number extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    // handleIncreaseNumber = () =>{
    //     let {number} = this.state;
    //     number = number + 1;
    //     this.setState({number});
    // }
    // handleDecreaseNumber = () =>{
    //     let a = this.state.number;
    //     a = a - 1;
    //     this.setState({number:a});
    // }
    
    render() {
       // const { number } = this.props;
        return (
            <div style={{ textAlign: 'center' }}>

                <h1>Count</h1>
                <div><a>{this.props.number}</a></div>
                <button onClick={this.props.increaseNumber}>+</button>
                <button onClick={this.props.decreaseNumber}>-</button>
            </div>
        );

    }

}
const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}

const mapActionsToProps =  {
    increaseNumber,
    decreaseNumber
}
export default connect(mapStateToProps, mapActionsToProps)(Number);