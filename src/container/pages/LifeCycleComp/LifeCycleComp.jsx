import React, { Component } from "react";
import { connect, Connect } from "react-redux";
import "./LifeCycleComp.css";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");
    console.log("nextProps: ", nextProps);
    console.log("this state: ", this.state);
    console.groupEnd();
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="container">
        <p>Life Cycle Component</p>
        <hr style={{ margin: "30px 0px" }} />
        <button className="btn" onClick={this.changeCount}>
          Component Button {this.state.count}
        </button>
        <hr style={{ margin: "30px 0px" }} />
        <p>Total Order: {/*this.props.order*/ 0}</p>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// export default connect(mapStateToProps)(LifeCycleComp);
export default LifeCycleComp;
