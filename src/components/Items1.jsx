import { Component } from "react";
import "./style.scss";

class Items1 extends Component {
  render() {
    const data1 = this.props.data1;
    const data2 = this.props.data2;

    return (
      <section className="items-container">
        <div className="items1-box">
          {data1.map((item1) => {
            const {
              itemId,
              itemName,
              itemPrice,
              itemSoldOutFlag,
              itemImageUrl,
            } = item1;
            return (
              <div
                key={itemId}
                className="items1"
                // onChangePage={function () {
                //   const items1 = document.querySelector(".items1");
                //   const items2 = document.querySelector(".items2");
                //   this.props.onChangePage();
                // }}
              >
                <img src={itemImageUrl} alt="음식사진" className="item-img" />
                <div className="item-text">
                  <p className="item-name">{itemName}</p>
                  <p className="item-price">{itemPrice}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="items2-box">
          {data2.map((item2) => {
            const {
              itemId,
              itemName,
              itemPrice,
              itemSoldOutFlag,
              itemImageUrl,
            } = item2;
            return (
              <div key={itemId} className="items2">
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

export default Items1;
