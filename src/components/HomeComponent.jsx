import React from "react";

export const HomeComponent = (props) => {
  // console.log("props", props);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJ28L2VYX2po_C6jnN1MOJp9x57boQAZUzQy19pd754QJVWPICpXvD-YHL4uCxTsUxlk&usqp=CAU"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">APPLE IPHONE</h5>
          <p className="card-text">NO description</p>
          <button
            onClick={() => {
              props.addToCarthandler({ id: 1, name: "apple1", price: 2000 });
            }}
            className="btn btn-primary"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJ28L2VYX2po_C6jnN1MOJp9x57boQAZUzQy19pd754QJVWPICpXvD-YHL4uCxTsUxlk&usqp=CAU"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">APPLE IPHONE</h5>
          <p className="card-text">NO description</p>
          <button
            onClick={() => {
              props.addToCarthandler({ id: 2, name: "apple2", price: 2000 });
            }}
            className="btn btn-primary"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
