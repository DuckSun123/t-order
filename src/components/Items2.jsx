import { Component } from "react";
import "./style.scss";
import { categoryItems2 } from "./structure";

class Items2 extends Component {
  render() {
    return (
      <section className="items-container">
        <div className="items-box">
          {categoryItems2.map((item) => {
            const {
              itemId,
              itemName,
              itemPrice,
              itemSoldOutFlag,
              itemImageUrl,
            } = item;
            return (
              <div key={itemId} className="items">
                <img src={itemImageUrl} alt="음식사진" className="item-img" />
                <div className="item-text">
                  <p className="item-name">{itemName}</p>
                  <p className="item-price">{itemPrice}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Items2;
