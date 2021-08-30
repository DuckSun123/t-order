import { Component } from "react";
import "./style.scss";

class Order extends Component {
  render() {
    const data1 = this.props.data1;
    const data2 = this.props.data2;
    return (
      <section>
        <nav>
          <h1>장바구니</h1>
          <div>
            <p>{data1[0].itemName}</p>
            <div>
              <p>+ n개 -</p>
              <p>{data1[0].itemPrice}</p>
            </div>
            <div>합계</div>
          </div>
          <div>
            <p>닫기버튼</p>
            <p>주문하기 버튼</p>
          </div>
        </nav>
      </section>
    );
  }
}

export default Order;
