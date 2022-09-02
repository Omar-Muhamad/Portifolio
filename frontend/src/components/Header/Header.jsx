import { useState } from 'react';
import { MdMenuOpen, MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

import images from '../../constants/images';
import './Header.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const nanLinks = [
    'home', 'about', 'work', 'skills', 'contact' 
  ]
  return (
    <header>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {nanLinks.map((link) => (
            <li className="app__flex">
              <div></div>
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <MdMenuOpen  onClick={() => setToggle(true)}/>

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <MdClose  onClick={() => setToggle(false)}/>
              <ul>
                {nanLinks.map((link) => (
                  <li>
                    <a href={`#${link}`} onClick={() => setToggle(false)}>{link}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;