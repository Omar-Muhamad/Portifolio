import React from 'react';
import { motion } from 'framer-motion';

import AppWrap from '../../wrapper/AppWrap';
import images from '../../constants/images'
import './Hero.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opaacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Hero = () => {
  return (
    <section className='app__hero app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__hero-info"
      >
        <div className="app__hero-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">Omar</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Fullstack Developer</p>
            <p className="p-text">Former Mech. Engineer</p>
            <p className="p-text">Tech Enthusiast</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__hero-img"
      >
        <img src={images.profile} alt="profile-bg" />
        <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
        >

        </motion.img>
      </motion.div>

      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__hero-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </section>
  )
};

export default AppWrap(Hero, "home");