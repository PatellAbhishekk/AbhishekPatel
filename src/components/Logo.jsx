import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Logo = () => {
  const [color, setColor] = useState(generateRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(generateRandomColor());
    }, 1000); // Change color every 1 second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <StyledWrapper color={color}>
      <div className="loader" />
    </StyledWrapper>
  );
};

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const StyledWrapper = styled.div`
  .loader {
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: 10px;
    color: ${(props) => props.color};
  }

  .loader:before,
  .loader:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s spin linear infinite;
  }

  .loader:after {
    color: ${(props) => props.color};
    transform: rotateY(70deg);
    animation-delay: 0.4s;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotateZ(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotateZ(360deg);
    }
  }

  @keyframes rotate-ccw {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @keyframes spin {
    0%,
    100% {
      box-shadow: 0.2em 0px 0 0px currentcolor;
    }

    12% {
      box-shadow: 0.2em 0.2em 0 0 currentcolor;
    }

    25% {
      box-shadow: 0 0.2em 0 0px currentcolor;
    }

    37% {
      box-shadow: -0.2em 0.2em 0 0 currentcolor;
    }

    50% {
      box-shadow: -0.2em 0 0 0 currentcolor;
    }

    62% {
      box-shadow: -0.2em -0.2em 0 0 currentcolor;
    }

    75% {
      box-shadow: 0px -0.2em 0 0 currentcolor;
    }

    87% {
      box-shadow: 0.2em -0.2em 0 0 currentcolor;
    }
  }
`;

export default Logo;
