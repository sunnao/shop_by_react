import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const OrderBtn = styled.button`
box-shadow: 0px 10px 14px -7px grey;
	background:black;
  border : none;
	border-radius:5px;
	color:#ffffff;
	padding: 7px 80px;
`

const Detail = (props) => {
  let {id} = useParams();
  let detailProduct = props.candles.find((data) => data.id === Number(id))

  // params의id가 props.candles.id에 해당하는게 없으면 없는상품이라고 알려주기
  if(!detailProduct){
  // if(!(props.candles.hasOwnProperty(id))){
    return <div style={{ marginTop:'200px' }}>해당 상품이 존재하지 않습니다.</div>
  }
  return (
  <div className="container">
    <div className="row">
      
      <div className="col-md-6">
        <img src={process.env.PUBLIC_URL +`/Candle${Number(id)+1}.jpg`} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{detailProduct.title}</h4>
        <p>{detailProduct.content}</p>
        <p>{detailProduct.price.toLocaleString()}원</p>
        <OrderBtn>주문하기</OrderBtn>
      </div>
    </div>
  </div> 
  )
}

export default Detail;