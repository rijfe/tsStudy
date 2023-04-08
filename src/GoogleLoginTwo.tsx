import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";

const GoogleLoginTwo = () => {
  return (
    <GoogleOAuthProvider clientId="167644582262-c10vbk538rekc7iim4o2llkpm7acuher.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(resp) => {
          // let info = jwt_decode(resp.credential);
          console.log(resp);
        }}
        onError={() => {
          console.log("err");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginTwo;
