import react from "react";
import styled, { keyframes } from "styled-components";

const Main = () => {
  const [loading, setLoading] = react.useState(false);
  // const [success, setSuccess] = useState("");

  const aplKey = "d0b5cb396d62eb9c31a4c61dad8b5215";
  const reqUrl = "http://localhost:3000/after";

  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${aplKey}&redirect_uri=${reqUrl}&response_type=code`;

  const loginHandler = () => {
    window.location.href = kakaoUrl;
  };

  const name: string = "rijfe";

  react.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

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
    position: relative;
    top: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: white;
    animation: ${imgSpin} 1s ease-in Infinite Alternate;
  `;

  const KakaoLogin = styled.img`
    border-radius: 12px;
    width: 200px;
    bottom: 100px;
    position: absolute;
  `;

  return (
    <Div>
      <Header>
        {loading ? <Img /> : <h1>{name} is Loading...</h1>}
        <KakaoLogin
          src={require("./assetes/kakao_login_large_narrow.png")}
          onClick={() => {
            loginHandler();
          }}
        />
      </Header>
      <h1>{}</h1>
    </Div>
  );
};

export default Main;
