import { useParams } from 'react-router-dom';

const Detail = (props) => {
  let {id} = useParams();

  // params의id가 props.candles.id에 해당하는게 없으면 없는상품이라고 알려주기
  if(!(props.candles.hasOwnProperty(id))){
    return <div style={{ marginTop:'200px' }}>해당 상품이 존재하지 않습니다.</div>
  }
  return (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src={process.env.PUBLIC_URL +`/Candle${Number(id)+1}.jpg`} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{props.candles[id].title}</h4>
        <p>{props.candles[id].content}</p>
        <p>{props.candles[id].price.toLocaleString()}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
  )
}

export default Detail;