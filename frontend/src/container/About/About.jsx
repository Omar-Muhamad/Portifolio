import React from 'react'
import { motion } from 'framer-motion';

import images from '../../constants/images';
import './About.scss'

const abouts = [
  { title: 'Frontend developer', description: 'I am a good frontend web developer', imgUrl: images.about01 },
  { title: 'Backend developer', description: 'I am a good Backend web developer', imgUrl: images.about02 },
  { title: 'MERN stack developer', description: 'I am a good frontend web developer', imgUrl: images.about03 },
  { title: 'Frontend developer', description: 'I am a good frontend web developer', imgUrl: images.about04 }
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Building <span>web applications</span> <br/> needs <span>good developer</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            className="app__profile-item"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h3 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h3>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About