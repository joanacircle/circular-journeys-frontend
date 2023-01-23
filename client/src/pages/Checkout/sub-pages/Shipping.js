
function Shipping(props) {
  const { shippingDetail, setShippingDetail } = props

  const handleFieldChange = (e) => {
    const newShipping = { ...shippingDetail, [e.target.name]: e.target.value }
    setShippingDetail(newShipping)

    console.log(newShipping)
  }

  return (
    <>
      <h1>運送資訊 - Shipping</h1>
      <div>
        <label>姓名</label>
        <input
          type='text'
          name='name'
          value={shippingDetail.name}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label>住址</label>
        <input
          type='text'
          name='address'
          value={shippingDetail.address}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label>電話</label>
        <input
          type='text'
          name='phone'
          value={shippingDetail.phone}
          onChange={handleFieldChange}
        />
      </div>
    </>
  )
}

export default Shipping
