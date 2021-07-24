import React, { Component } from 'react';
import { useState, useEffect } from 'react';

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
// import logo from './logo.svg';
import p5 from 'p5';


class Sketch extends Component {
  constructor(){
  super()
  this.renderRef = React.createRef()
  this.state = {
    x: 100,
    y: 100
    }
  }

  componentDidMount(){
    const size = useWindowSize();
    const p5 = require("p5")
    this.sketch = new p5( p => {
    width = size.width
    height = size.height
      p.setup = ()  => {
          p.createCanvas(p.width, p.height)
          .parent(this.renderRef.current);
          p.background('white');
          p.strokeWeight(5);

      }
      p.windowResized = () => {
          p.resizeCanvas(p.width, p.height )
      }

      p.draw = () => {
          if(p.mouseIsPressed){
              p.stroke(225)
          } else{
              p.stroke(0, 0, 0);
          }
          p.line(p.mouseX , p.mouseY, p.mouseX , p.mouseY);
          p.line(p.mouseX, p.mouseY , p.mouseX, p.mouseY);
          }

        });


    }
render(){

return (
  <div className="App">
    <div ref={this.renderRef}></div>
  </div>
);
}
}

export default Sketch;
