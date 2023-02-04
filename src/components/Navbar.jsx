import React from 'react'

const Navbar = () => {
  return (
     <div className="container-">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav class="navbar bg-success">
  <div class="container">
    <a class="one navbar-brand">ICT Learner tracker</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
            </div>
        </div>
     </div>
  )
}

export default Navbar