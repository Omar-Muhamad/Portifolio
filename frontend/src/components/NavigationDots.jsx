import React from 'react';

const NavigationDots = ({ active }) => {
  const nanLinks = [
    'home', 'about', 'work', 'skills', 'contact' 
  ];

  return (
    <div className='app__navigation'>
      {nanLinks.map((link, index) => (
        <a
          key={link + index}
          className="app__navigation-dot"
          href={`#${link}`} 
          style={active === link ? {backgroundColor: '#313bac'} : {}}
        />
      ))}
    </div>
  )
};

export default NavigationDots;