import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import styled from "styled-components";

const LoginGoogle = (props: any) => {
  // let id = "167644582262-c10vbk538rekc7iim4o2llkpm7acuher.apps.googleusercontent.com";

  const login: any = useGoogleLogin({
    onSuccess: async (response: any) => {
      console.log(response);
    },
    onError: () => {
      console.log("err");
    },
  });

  const Button = styled.button`
    border-radius: 12px;
    background: white;
    width: 319px;
    height: 5.1rem;
    type: button;
    border: none;
    position: relative;
    top: 53.5%;
    left: 4.8%;
    border: 0.1px solid #88bbe2;
  `;

  const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const GoogleImg = styled.img`
    width: 20px;
    height: 20px;
    position: relative;
    right: 9.5rem;
  `;

  const BtnText = styled.p`
    font-size: 15px;
  `;

  return (
    <Button onClick={login}>
      <ButtonContainer>
        {/* <FontAwesomeIcon icon={["fab", "google"]} size="1x" fixedWidth /> */}
        <GoogleImg src={require("./assetes/google-logo.png")} />
        <BtnText>구글 로그인</BtnText>
      </ButtonContainer>
    </Button>
  );
};

export default LoginGoogle;
