import React from 'react';
import '../../scss/HomeTitle.scss';

const HomeTitle = ({title}) => {
  return (
    <h2 className="title">{title}</h2>
  )
}

export default HomeTitle;