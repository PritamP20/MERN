import React, { useState } from 'react'
import axios from 'axios'

const AddForm = () => {
  const [detail, setDetail] = useState({})

  const addProducts = async(product)=>{
    const data = await axios.post('http://localhost:8080/products',product)
    console.log(data.data)
    // setData(data.data)

  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setDetail({
      "title":e.target.title.value,
      "brand":e.target.brand.value,
      "price":e.target.price.value,
      "thumbnail":e.target.thumbnail.value,
      "category":e.target.category.value,
      "discountPercentage":e.target.disscount.value,
    })
    addProducts(detail)
    console.log(detail)
  }
  return (
    <div className='ps-5 ms-5 w-50'>
        <h1>Add Product</h1>
        <form onSubmit={(e)=> handleSubmit(e)}>
          <div className="mb-3">
            <label  className="form-label">Titile </label>
            <input type="text" htmlFor="title" className="form-control" name='title' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label  className="form-label">thumbnail </label>
            <input type="text" htmlFor="thumbnail" className="form-control" name='thumbnail' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label  className="form-label">price </label>
            <input type="text" htmlFor="price" className="form-control" name='price' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label  className="form-label">category </label>
            <input type="text" htmlFor="category" className="form-control" name='category' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label  className="form-label">brand </label>
            <input type="text" htmlFor="brand" className="form-control" name='brand' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label  className="form-label">dissciunt </label>
            <input type="text" htmlFor="disscount" className="form-control" name='disscount' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default AddForm
