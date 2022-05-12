import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link to={`/catalog/${props.label}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="img" />
          <img src={props.img02} alt="img" />
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price">
            {props.price}
            <span className="product-card__price__old">
                <del>250$</del>
            </span>
        </div>
      </Link>
      <div className="product-card__btn">
          <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
          >
          choose to buy
          </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default ProductCard;
