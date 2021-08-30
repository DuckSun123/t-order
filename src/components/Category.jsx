import "./style.scss";
import { Component } from "react";

class Category extends Component {
  render() {
    const data = this.props.data;
    return (
      <section>
        <div className="category-container">
          <button
            className=""
            onClick={function () {
              this.props.onChangeMat();
            }.bind(this)}
          >
            {data[0].categoryName}
          </button>
          <button
            className=""
            onClick={function () {
              this.props.onChangeKim();
            }.bind(this)}
          >
            {data[1].categoryName}
          </button>
          {/* {data.map((category) => {
            return (
              <div key={category.categoryId} className="category-box">
                <button className="">{category.categoryName}</button>
              </div>
            );
          })} */}
        </div>
      </section>
    );
  }
}

export default Category;
