import React from 'react'

const Hero = () => {
  return (
    <section style={{ textAlign: "center", paddingTop: "140px" }}>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        We Design Beautiful Websites
      </motion.h1>

      <p>Creative digital experiences for modern brands.</p>
      <button className="btn">Get Started</button>
    </section>
  )
}

export default Hero