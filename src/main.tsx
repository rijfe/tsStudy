import react, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import queryString from "query-string";
import LoginGoogle from "./LoginGoogle";
// import GoogleLoginTwo from "./GoogleLoginTwo";
// import Modal from "./Modal";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Modal from "./Modal";

const Main = () => {
  const query = queryString.parse(window.location.search);
  // const [loading, setLoading] = react.useState(false);
  const [modalState, setModalState] = react.useState(true);
  // const [success, setSuccess] = useState("");

  const aplKey = "d0b5cb396d62eb9c31a4c61dad8b5215";
  const reqUrl = "http://localhost:3000";

  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${aplKey}&redirect_uri=${reqUrl}&response_type=code`;

  const loginHandler = () => {
    window.location.href = kakaoUrl;
  };

  const tokenHandler = (code: string) => {
    const data: any = {
      grant_type: "authorization_code",
      client_id: aplKey,
      redirect_uri: reqUrl,
      code: code,
    };
    const queryString = Object.keys(data)
      .map((k: any) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

    axios
      .post("https://kauth.kakao.com/oauth/token", queryString, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        console.log(res.data.access_token);
        // setReady(true);
      });
  };

  useEffect(() => {
    if (query.code) {
      tokenHandler(query.code.toString());
    }
  }, []);

  const Div = styled.div`
    background-color: #aed3f4;
    justify-content: center;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Topdiv = styled.div`
    position: relative;
    height: 24.3%;
    width: 100%;
    top: 0;
  `;

  // const CloudRightOne = styled.img`
  //   position: absolute;
  //   right: 0;
  //   top: 5.9rem;
  // `;

  // const CloudRightTwo = styled.img`
  //   position: absolute;
  //   right: 0;
  //   top: 11rem;
  // `;

  // const CloudLeftOne = styled.img`
  //   position: absolute;
  //   left: 0;
  //   top: 10rem;
  // `;

  // const CloudLeftTwo = styled.img`
  //   position: absolute;
  //   left: 8.1rem;
  //   top: 15.4rem;
  // `;

  const Logo = styled.img`
    display: flex;
    position: absolute;
    top: 20%;
    width: 9.4rem;
    height: 8.28rem;
    left: 37%;
    opacity: 0.8;
  `;

  // const Qbubble = styled.img`
  //   position: absolute;
  //   width: 9.7rem;
  //   height: 7.69rem;
  //   top: 29.8rem;
  //   left: 3.1rem;
  // `;

  // const Ebubble = styled.img`
  //   position: absolute;
  //   width: 9.7rem;
  //   height: 7.69rem;
  //   top: 29.8rem;
  //   right: 3.1rem;
  // `;

  const CharDiv = styled.div`
    position: relative;
    width: 100%;
    height: 42.4%;
  `;

  const Circle = styled.div`
    width: 33.8rem;
    height: 40.5rem;
    background: #fae38f;
    border-radius: 50%;
    border: 4px solid #f8f8f8;
    position: absolute;
    top: 0;
    right: -40%;
  `;

  const Dchar = styled.div`
    position: absolute;
    width: 30.5rem;
    height: 40.5rem;
    border-radius: 10px 60% 60% 10px;
    border: 4px solid #f8f8f8;
    background: #facedf;
    top: 0;
    left: -30%;
  `;

  const KakaoLogin = styled.img`
    border-radius: 12px;
    width: 31.9rem;
    height: 5.1rem;
    bottom: 53.5%;
    position: absolute;
    left: 4.8%;
  `;

  const LoginContainer = styled.div`
    position: relative;
    display: flex;
    width: 90.5%;
    height: 25%;
    background: white;
    border-radius: 1.2rem;
    box-shadow: 4px 14px 14px rgba(0, 31, 119, 0.15);
    border: 1px solid #5d9cd9;
  `;

  const EyeOne = styled.div`
    border-radius: 50%;
    border: 4px solid #f8f8f8;
    width: 2.5rem;
    height: 3.3rem;
    background: #aed3f4;
    position: absolute;
    top: 24%;
    right: 36%;
  `;

  const EyeTwo = styled.div`
    border-radius: 50%;
    border: 4px solid #f8f8f8;
    width: 2.5rem;
    height: 3.3rem;
    background: #aed3f4;
    position: absolute;
    top: 24%;
    right: 21%;
  `;

  const CircleEyeOne = styled.div`
    width: 3.8rem;
    height: 3.3rem;
    border-radius: 0 0 50% 50%;
    border: 4px solid #f8f8f8;
    background: #feac98;
    top: 26%;
    left: 11%;
    position: absolute;
  `;
  const CircleEyeTwo = styled.div`
    width: 3.8rem;
    height: 3.3rem;
    border-radius: 0 0 50% 50%;
    border: 4px solid #f8f8f8;
    background: #feac98;
    top: 26%;
    left: 27.7%;
    position: absolute;
  `;

  // const Row = styled.div`
  //   display: flex;
  //   flex-direction: row;
  //   align-content: center;
  //   justify-content: center;
  // `;
  // const TitleBig = styled.span`
  //   font-size: 100px;
  //   color: black;
  //   font-weight: lighter;
  // `;

  // const TitleSmall = styled.span`
  //   font-size: 30px;
  //   color: black;
  //   font-weight: bolder;
  // `;

  // const TitleContainer = styled.p`
  //   displex: flex;
  //   flex-direction: row;
  //   position: absolute;
  //   top: 100px;
  //   right: 70px;
  // `;

  // const TitleMedium = styled.span`
  //   font-size: 50px;
  //   color: black;
  //   font-weight: light;
  // `;

  // const imgSpin = keyframes`
  //   0% {
  //     top:20px;
  //   }
  //   95% {
  //     width: 73px;
  //   }
  //   to {
  //     top:80px;
  //   }
  // `;

  // const eyeMove = keyframes`
  //   from{
  //     height:10px;
  //   }
  //   to{
  //     height: 2px;
  //   }
  // `;

  return (
    <Div>
      <Topdiv>
        <Logo src={require("./assetes/Group20.png")} />
      </Topdiv>
      <CharDiv>
        <Dchar>
          <EyeOne />
          <EyeTwo />
        </Dchar>
        <Circle>
          <CircleEyeOne />
          <CircleEyeTwo />
        </Circle>
      </CharDiv>

      <LoginContainer>
        <KakaoLogin src={require("./assetes/kakao_login_large_wide.png")} onClick={loginHandler} />
        <LoginGoogle />
      </LoginContainer>
      {modalState ? <Modal setModalState={setModalState} /> : null}
    </Div>
  );
};

export default Main;
