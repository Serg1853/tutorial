import { Component } from "react";



class Counter extends Component {
  state = {
    value: 0,
  };
  handleClickIncrement = () =>
    this.setState(prevState => ({ value: prevState.value + 1 }));

  handleClickDecrement = () =>
        this.setState(prevState => ({ value: prevState.value - 1 }));
    
    render() {
        return (
            <div className="container">
                <h5 className="text">Counter</h5>
            <p className="text">{this.state.value}</p>
            <button onClick={this.handleClickIncrement} className="">
              +
            </button>
            <button onClick={this.handleClickDecrement} className="">
              -
            </button>
          </div>
        );
    }
}
export default Counter;