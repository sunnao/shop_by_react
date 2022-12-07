import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';


export const Btn = styled.button`
box-shadow: 0px 10px 14px -7px grey;
	background:black;
  border : none;
	border-radius:5px;
	color:#ffffff;
	padding: 7px 80px;
`

export const Detail = (props) => {
  
  let {id} = useParams();
  let detailProduct = props.candles.find((data) => data.id === Number(id));
  let [alertDiv, setAlertDiv]=useState(true);
  let [num, setNum]=useState('')
  
  // 2초 뒤에 alert state를 false로 변경함.
  // useEffect의 두번째 파라미터로 []넣으면 처음 mount될 때만 실행됨. 이후 재렌더링시 실행X
  useEffect(()=>{
    let a = setTimeout(()=>{setAlertDiv(false)},2000)
    return ()=>{clearTimeout(a)} /* -> useEffect 동작 전에 실행 (cleanup function), unmount 될 때 실행 */
  },[num])

  useEffect(()=>{
    if(isNaN(num)===true){
      return alert('숫자만 입력 가능합니다.')
    }
  })


  // params의id가 props.candles.id에 해당하는게 없으면 없는상품이라고 알려주기
  if(!detailProduct){
  // if(!(props.candles.hasOwnProperty(id))){
    return <div style={{ marginTop:'200px' }}>해당 상품이 존재하지 않습니다.</div>
  }
  return (
  <div className="container">
    {
      alertDiv === true
      ? <div className="alert alert-warning">2초 이내 구매 시 할인!!</div>
      : null
    }
    <div className="row">
      <div className="col-md-6">
        <img src={process.env.PUBLIC_URL +`/Candle${Number(id)+1}.jpg`} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{detailProduct.title}</h4>
        <p>{detailProduct.content}</p>
        <p>{detailProduct.price.toLocaleString()}원</p>
        <input placeholder="주문 수량" onChange={(e)=>{ setNum(e.target.value) }}></input>
        <Btn>주문하기</Btn>
      </div>
    </div>
  </div> 
  )
}



// useEffect(()=>{}) /**재랜더링마다 코드실행 */
// useEffect(()=>{},[]) /** mount시 1회만 실행 */
// useEffect(()=>{ return ()=>{} }) /** 실행전 cleanup function */
// useEffect(()=>{ return ()=>{} },[]) /** unmount시 1회만 실행 */