import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import { IoIosMenu } from "react-icons/io";

import "./styles.css";
import SideBar from "./components/SideBar";

const App: React.FC = () => {
  const [hidden, setHidden] = useState(true);

  const propsStyle = useSpring({
    transform: hidden ? "rotate(0deg)" : "rotate(90deg)",
  });

  return (
    <>
      <header>
        <animated.button onClick={() => setHidden(!hidden)} style={propsStyle}>
          <IoIosMenu size={30} />
        </animated.button>
        SideBar
      </header>

      <SideBar hidden={hidden} />
      {!hidden && (
        <div onClick={() => setHidden(true)} className="button"></div>
      )}
    </>
  );
};

export default App;
