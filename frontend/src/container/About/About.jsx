import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import AppWrap from '../../wrapper/AppWrap';
import './About.scss';
import { client, urlFor } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => {
        setAbouts(data);
      })
  }, []);

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
            <img src={urlFor(about.imgUrl)} alt={about.title} />
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
};

export default AppWrap(About, "about");