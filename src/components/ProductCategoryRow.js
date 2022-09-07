import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.category;

    return (
      <tr>
        <th colSpan='2'>
          {category}
        </th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
