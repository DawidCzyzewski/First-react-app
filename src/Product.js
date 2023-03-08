// import App from "./App";
import PropTypes from "prop-types";

// const Product = (props) => {
//   const { price, name, description, button } = props;

const Product = ({
  shouldRenderChildren = false,
  children,
  header = "Product information",
  price = 0,
  name,
  description,
  button,
}) => {
  return (
    <div>
      {/* <React.Fragment id={1}> */}
      {/* <h2>Product inforsmation</h2> */}
      <h2>{header}</h2>
      <h5>Name: {name}</h5>
      <div>Price: {price} zł</div>
      <p>{description}</p>
      <button>{button}</button>
      {shouldRenderChildren && children}
      {/* </React.Fragment> */}
    </div>
  );
};

Product.propTypes = {
  header: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  shouldRenderChildren: PropTypes.bool,
};

export default Product;

// tak ogólnie można renderować za pomocą:
// ReactDOM.createRoot(document.getElementById("root")).render(<Product />);
// Ale już raczej nikt tak nie robi.
