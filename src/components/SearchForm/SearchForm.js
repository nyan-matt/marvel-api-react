import React from 'react'
import './SearchForm.scss'

const SearchForm = ({handleSubmit, handleChange, placeholder}) => {
return (
  <form className='form-horizontal' onSubmit={handleSubmit}>
    <div className='form-group'>
      <div className='row mlr-0'>
      <div className='col-sm-10'>
        <input
          type='text'
          className='form-control'
          placeholder={placeholder}
          onChange={handleChange}
          style={{marginBottom:'5px'}}
        />
      </div>
      <div className='col-sm-2'>
        <button className='btn btn-block btn-warning' type='submit'>SEARCH</button>
      </div>
      </div>
    </div>
  </form>
  )
}
SearchForm.propTypes = {
  handleChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  placeholder: React.PropTypes.string
}
export default SearchForm
