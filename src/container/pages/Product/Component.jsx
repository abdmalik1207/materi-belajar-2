import { Component, Fragment } from "react";
import { connect, Connect } from "react-redux";
import CardProduct from "../../CardProduct/Component";
import "./Component.css";

class Product extends Component {
  // state = {
  //   order: 4,
  // };

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };

  render() {
    return (
      <Fragment>
        <div className="container">
          <p>Product</p>
          <hr style={{ margin: "30px 0px" }} />
          <div className="header">
            <div className="logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Grab_Logo.svg/2560px-Grab_Logo.svg.png" alt="" width="150px" />
            </div>
            <div className="troley">
              <img src="https://icon-library.com/images/basket-icon/basket-icon-14.jpg" alt="" />
              <div className="count">{/* {this.props.order} */ 0}</div>
            </div>
          </div>
          <CardProduct /*onCounterChange={(value) => this.handleCounterChange(value)} */ />
        </div>
      </Fragment>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// export default connect(mapStateToProps)(Product);
export default Product;
