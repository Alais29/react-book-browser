import React from 'react';
import './Footer.styles.scss';

const Footer = () => {
  return (
    <footer>
      <p>{new Date().getFullYear()} - &copy; Alfonsina Lizardo</p>
      <p>Powered by Google Books</p>
    </footer>
  )
}

export default Footer
