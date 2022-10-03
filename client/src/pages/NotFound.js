import React from 'react'

const NotFound = () => {
  return (
    <div className='row section-404 p-4'>
      <div class="d-flex justify-content-center align-items-center" style={{height: '90vh'}}>
        <h1 class="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
        <div class="inline-block align-middle">
          <h2 class="font-weight-normal lead" id="desc"> <span className='pipe'>|</span> The page you requested was not found.</h2>
        </div>
      </div>
    </div>
  )
}

export default NotFound