import { useRef } from 'react';
import './App.css';






function App() {

  const scrollToWarning = () => {
    warnRef.current?.scrollIntoView();
  }

  const warnRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <div className="warning" ref={warnRef}>
        Mi Alerta!!!
      </div>
      <div style={{width:'100%', height:'900px', backgroundColor: '#c4c4c4'}}></div>
      <div onClick={()=>{scrollToWarning()}}>My Div</div>
    </div>
  );
}

export default App;
