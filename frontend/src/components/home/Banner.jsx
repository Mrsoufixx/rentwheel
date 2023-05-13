import React from 'react'

function Banner() {
  return (
      <section className="home" id="home">
      <h3 data-speed="-2" className="home-parallax">
        Rent a Bike
      </h3>

      <img
        data-speed="5"
        className="home-parallax"
        src="../../assets/"
        alt=""
      />

      <NavLink className="btn" to="/exploreRentBikes">
        Bike Showcase
      </NavLink>
    </section>
  )
}

export default Banner