import { Component } from "react";
import "../src/components/style.scss";
import "./App.css";
import Category from "./components/Category";
import Items1 from "./components/Items1";
import Order from "./components/Order";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "맛있는 추억",
      categories: [
        {
          categoryId: 1,
          categoryName: "맛있는 추억",
        },
        {
          categoryId: 2,
          categoryName: "튀김",
        },
      ],
      categoryItems1: [
        {
          itemId: 1,
          itemName: "부산국제시장 떡볶이(밀가래떡)",
          itemPrice: 8900,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR008/M00427/1620354409item_700X700_toJPEGBot.jpg",
        },
        {
          itemId: 2,
          itemName: "쫑라면",
          itemPrice: 3000,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00179/1596180154item_700X700_toJPEGBot.jpg",
        },
        {
          itemId: 3,
          itemName: "계란찜",
          itemPrice: 5900,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00179/1596180154item_700X700_toJPEGBot.jpg",
        },
        {
          itemId: 4,
          itemName: "엄마손주먹밥",
          itemPrice: 4000,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00180/1596180192item_700X700_toJPEGBot.jpg",
        },
        {
          itemId: 5,
          itemName: "밥",
          itemPrice: 1000,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/C00089/1600410691item_700X700_toJPEGBot.jpg",
        },
        {
          itemId: 6,
          itemName: "찹쌀바삭치즈누룽지",
          itemPrice: 3000,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR005/C00148/1604145260item_700X700_toJPEGBot.jpg",
        },
      ],
      categoryItems2: [
        {
          itemId: 7,
          itemName: "치즈갈릭감자",
          itemPrice: 6900,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00184/1596181048item_700X700_toJPEGBot.jpg",
        },
        {
          itemId: 8,
          itemName: "튀김쥐포",
          itemPrice: 4500,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00186/1596181076item_700X700_toJPEGBot.jpg",
        },
        {
          itemId: 9,
          itemName: "대만우유튀김",
          itemPrice: 4900,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR005/C00094/1605329843item_700X700.png",
        },
        {
          itemId: 10,
          itemName: "대왕치즈볼",
          itemPrice: 6900,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00185/1596181071item_700X700_toJPEGBot.jpg",
        },
        {
          itemId: 11,
          itemName: "진미채튀김",
          itemPrice: 7500,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00188/1596181089item_700X700_toJPEGBot.jpg",
        },
        {
          itemId: 12,
          itemName: "어니언링",
          itemPrice: 5500,
          itemSoldOutFlag: false,
          itemImageUrl:
            "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00187/1596181082item_700X700_toJPEGBot.jpg",
        },
      ],
    };
  }
  render() {
    const items1 = document.querySelector(".items1");
    const items2 = document.querySelector(".items2");
    // if (this.state.mode === "맛있는 추억") {
    //   items1.style.display = "block";
    //   items2.style.display = "none";
    // } else if (this.state.mode === "튀김") {
    //   items1.style.display = "none";
    //   items2.style.display = "block";
    // }
    return (
      <div className="App">
        <div>
          <Category
            data={this.state.categories}
            onChangeMat={function () {
              this.setState({ mode: "맛있는 추억" });
            }.bind(this)}
            onChangeKim={function () {
              this.setState({ mode: "튀김" });
            }.bind(this)}
          />
          {/* <section>
            <div className="category-container">
              <button
                className=""
                onClick={function () {
                  this.setState({
                    mode: "튀김",
                  });
                }.bind(this)}
              >
                {this.state.categories[0].categoryName}
              </button>
              <button
                className=""
                onClick={function () {
                  this.setState({
                    mode: "맛있는 추억",
                  });
                }.bind(this)}
              >
                {this.state.categories[1].categoryName}
              </button>
            </div>
          </section> */}
          <Items1
            data1={this.state.categoryItems1}
            data2={this.state.categoryItems2}
            // onChangePage={function () {
            //   const items1 = document.querySelector(".items1");
            //   const items2 = document.querySelector(".items2");
            //   if (this.state.mode === "맛있는 추억") {
            //     console.log(items1);
            //   } else if (this.state.mode === "튀김") {
            //     console.log(items2);
            //   }
            // }.bind(this)}
          />
        </div>
        <div>
          <Order
            data1={this.state.categoryItems1}
            data2={this.state.categoryItems2}
          />
        </div>
      </div>
    );
  }
}

export default App;
