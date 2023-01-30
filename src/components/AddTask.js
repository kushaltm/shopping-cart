import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [productName, setProductName] = useState('')
  const [color, setColor] = useState('')
  const [id, setId] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!brand) {
      alert('Please add a task')
      return
    }
    const data ={
        'brand':brand,
        'category':category,
        'productName':productName,
        'color':color,
        'id':id
    }
    onAdd(data)
    setBrand('')
    setCategory('')
    setProductName('')
    setColor('')
    setId('')
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Brand</label>
        <input
          type='text'
          placeholder='Add Brand Name'
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>category</label>
        <input
          type='text'
          placeholder='Add Category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Product Name</label>
        <input
          type='text'
          placeholder='Add Product Name'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Color</label>
        <input
          type='text'
          placeholder='Add color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Product Code</label>
        <input
          type='text'
          placeholder='Add Product Code'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask