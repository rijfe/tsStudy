import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import styled,{keyframes} from "styled-components";

function App() {
  const [loading, setLoading] = useState(false);

  const name: string = "rijfe";

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true);
    },3000)
  },[])

  const Div = styled.div`
    text-align: center;
  `;

  const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const imgSpin = keyframes`
    0% {
      top:0px;
    }
    95% {
      width: 100px;
    }
    to {
      top:100px;
    } 
  `;

  const Img = styled.div`
    position:relative;
    top:0;
    width:100px;
    height:100px;
    border-radius:50%;
    background: white;
    animation: ${imgSpin} 1s ease-in Infinite Alternate;
  `;

  const A = styled.a`
    color: #61dafb;
  `;

  return (
    <Div>
      <Header>
        {loading ?<Img/>:<h1>{name} is Loading...</h1>}
         {/* <Img src={logo}/> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <A>
          Learn React
        </A> */}
      </Header>
    </Div>
  );
}

export default App;
