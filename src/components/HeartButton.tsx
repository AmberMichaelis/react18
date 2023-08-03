/** @format */

import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

interface HeartButtonProps {
  onClick: () => void;
}

const HeartButton = ({ onClick }: HeartButtonProps) => {
  const [filled, setFilled] = useState(false);
  const toggle = () => {
    setFilled(!filled);
    onClick();
  };

  if (filled) {
    return <BsHeartFill color='maroon' size={25} onClick={toggle} />;
  } else {
    return <BsHeart color='black' onClick={toggle} />;
  }
};

export default HeartButton;
