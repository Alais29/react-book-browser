import React from 'react'

const Image = ({src, alt, classnames}) => (
  <img src={src} alt={alt} className={classnames ? classnames : ''} />
)

export default Image;
