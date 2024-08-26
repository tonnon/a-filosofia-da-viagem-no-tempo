import './App.css';
import { Canvas } from 'react-three-fiber';
import circleImg from './assets/circle.png';
import { Suspense } from 'react';

function Points() { }

function AnimationCanvas() {
  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
      <Points />
    </Canvas>
  )
}

function App() {
  return (
    <div className="anim">
      <Suspense fallback={<div> Loading... </div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}

export default App;
