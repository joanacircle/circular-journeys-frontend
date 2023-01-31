function Summary({ totalNumber = 0, totalPrice = 0 }) {
  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col pl-0">共 {totalNumber} 項目</div>
        </div>

        <div className="row  bt-1-ptb-2v">
          <div className="col">總價</div>
          <div className="col text-right">{totalPrice}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  )
}

export default Summary
