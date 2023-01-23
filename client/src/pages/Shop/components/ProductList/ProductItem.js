import React from 'react'

function ProductItem(props) {
  const { id, name, picture, price, tags } = props.product
  return (
    <>
      <tr>
        <td className="number text-center">{id}</td>
        <td className="image">
          <img src={picture} alt="" />
        </td>
        <td className="product">
          <strong>{name}</strong>
        </td>
        <td className="rate text-right">{tags}</td>
        <td className="price text-right">${price}</td>
      </tr>
    </>
  )
}

export default ProductItem
