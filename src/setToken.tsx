import { atom, selector } from "recoil";

const setTokenState = atom({
  key: "setTokenState",
  default: "",
});

const getTokenState = selector({
  key: "getTokenState",
  get: ({ get }) => {
    const text = get(setTokenState);
    return text;
  },
});

export { setTokenState, getTokenState };
