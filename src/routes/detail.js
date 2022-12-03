const Detail = (props) => {
  return (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src={process.env.PUBLIC_URL +`/Candle1.jpg`} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{props.candlesData[0].title}</h4>
        <p>{props.candlesData[0].content}</p>
        <p>{props.candlesData[0].price.toLocaleString()}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
  )
}

export default Detail;