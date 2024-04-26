import React from 'react'

const Do = (props) => {
 const changeStatus=()=>{h
    const Mdata=props.data;
    const index=Mdata.findIndex((obj)=>{
            return obj.value==props.item.value
    })
   Mdata[index].status=!props.item.status
   props.setData(Mdata)
 }
  return (
    <div className='do'>
        { props.item.status?<img className="img3" onClick={changeStatus} src="./assets/tick.jpg" alter="ok"/> : <img className="img1" onClick={changeStatus}src="src\assets\circular.webp" alter="Close"/> }
        <h2>{props.item.value}</h2>
        <img className="img2" onClick={(close)=>{
           const data= props.data.filter((obj)=>{
                return props.item.value !=obj.value
            })
            props.setData(data)
        }} src="./assets/close.jpg"/>
    </div>
  )
}
export default Do
