import React, { useEffect, useState } from 'react'
import Data from '../src/data.json'
import axios from 'axios'

const Product = () => {
  const [data, setData] = useState(Data.products)
  // console.log(data.products[0].thumbnail)

  const getProducts = async()=>{
    const product = await axios.get('http://localhost:8080/products')
    console.log(product.data)
    setData(product.data)
  }
  const handleClick= async(e, id)=>{
    const product = await axios.delete(`http://localhost:8080/products/${id}`)
    console.log(product.data)
    if(data.filter(detail=> detail._id==id)!=[]){
      setData(data.filter(detail=> detail._id!==id))
      console.log(data.filter(detail=> detail._id!==id))
    }
    // console.log(data.filter(detail=> detail._id!==id))
  }
  useEffect(()=>{
    getProducts()
  },[])
  // console.log(data)
  return (
    <>

    {data.map((product)=>{
      return <div className='m-5 w-25' key={product.id}>
      <div className=' border border-secondary'>
        <div className=''>
          <img src={product.thumbnail} className='rounded-4 w-100' alt="" />
        </div>
        <div className='d-flex  p-2'>
          <span className='col-9'>{product.title}</span>
          <span className='d-flex justify-content-end ms-5'>{product.price}</span>
        </div>
        <div className='d-flex  p-2'>
          <span className='col-9'>Star</span>
          <span className='d-flex justify-content-end ms-5'>Buy</span>
        </div>
        <button onClick={(e)=>handleClick(e,product._id)}>delete</button>
      </div>
    </div>
    })}
    </>
  )
}

export default Product
