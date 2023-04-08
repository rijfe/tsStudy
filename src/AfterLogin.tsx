import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";

const AfterLogin = () => {
  const query = queryString.parse(window.location.search);

  const aplKey = "d0b5cb396d62eb9c31a4c61dad8b5215";
  const reqUrl = "http://localhost:3000/after";
  const redUrl = "http://localhost:3000";

  const [ready, setReady] = useState(false);

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
        setReady(true);
      });
  };

  const logoutUrl = `https://kauth.kakao.com/oauth/logout?client_id=${aplKey}&logout_redirect_uri=${redUrl}`;

  useEffect(() => {
    if (query.code) {
      tokenHandler(query.code.toString());
    }
  }, []);

  return (
    <div>
      {ready ? <h1>Success</h1> : <h1>Wait ...</h1>}
      {/* <h1>Wait...</h1> */}
      <a href={logoutUrl}>
        <h1>LogOut</h1>
      </a>
    </div>
  );
};

export default AfterLogin;
