import React from 'react';
import { useSpring, animated } from 'react-spring';

import './styles.css';

interface SideBarProps {
  hidden: boolean;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const propsStyle = useSpring({
    marginLeft: props.hidden ? '-120%' : '0',
  });

  return (
    <animated.menu style={propsStyle}>
      <a href="/">Cadastro</a>
      <a href="/">Entrar em contato</a>
      <a href="/">Sobre</a>
      <a href="/">Sair</a>
    </animated.menu>
  );
};

export default SideBar;
