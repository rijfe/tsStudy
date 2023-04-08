import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #aed3f4;
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Logo = styled.img`
  position: absolute;
  width: 16.7rem;
  height: 14.69rem;
  top: 27.5rem;
  left: 11.7rem;
`;

const Title = styled.img`
  position: absolute;
  width: 10.6rem;
  height: 4.3rem;
  top: 44.4rem;
  left: 14.6rem;
`;
const Modal = ({ setModalState }: any) => {
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <Div>
      <Button onClick={closeModal}>x</Button>
      <Logo src={require("./assetes/Group20.png")} />
      <Title src={require("./assetes/Frame.png")} />
    </Div>
  );
};

export default Modal;
