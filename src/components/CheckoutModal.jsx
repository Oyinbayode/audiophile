import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components/macro";
import CheckOutIcon from "../components/assets/Check.svg";
import { useSelector, useDispatch } from "react-redux";

const CheckoutModal = ({ isOpen, setIsOpen }) => {
  const CartState = useSelector((state) => state.cart);

  return (
    <ModalDiv
      isOpen={isOpen}
      style={{
        overlay: {
          background: "rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      <ModalContainer>
        <Check>
          <CheckIcon src={CheckOutIcon} alt="check icon" />
        </Check>

        <H2>
          Thank you <br /> for your order
        </H2>

        <ModalBody>
          <ModalParagraph>
            You will receive an email confirmation shortly.
          </ModalParagraph>
          <ModalMain>
            <ModalCard>
              <CardList>
                <CardItem>
                  <CardImage>
                    <CardImg src="" alt="" />
                  </CardImage>
                  <CardInfo>
                    <CardName></CardName>
                    <CardPrice></CardPrice>
                  </CardInfo>
                  <Quantity>x1</Quantity>
                </CardItem>
              </CardList>
              <CardTotal>
                <CardTotalText>Grand Total</CardTotalText>
                <CardTotalPrice>$0.00</CardTotalPrice>
              </CardTotal>
            </ModalCard>
          </ModalMain>
        </ModalBody>
      </ModalContainer>
    </ModalDiv>
  );
};

const ModalDiv = styled(ReactModal)`
  position: absolute;
  width: 540px;
  background: #fff;
  min-height: fit-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  border-radius: 8px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 444px;
  width: 100%;
  height: 100%;
`;

const Check = styled.div`
  margin-top: 48px;
`;

const CheckIcon = styled.img``;

// const ModalHeader = styled.header``;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.14286px;
  text-transform: uppercase;
  margin: 0;
  max-width: 320px;
  margin-top: 33px;
`;

const ModalBody = styled.div``;

const ModalParagraph = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
`;

const ModalMain = styled.main``;

const ModalCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const CardList = styled.ul`
  background: #f1f1f1;
  width: 50%;
`;

const CardItem = styled.li``;

const CardImage = styled.div``;

const CardImg = styled.img``;

const CardInfo = styled.div``;

const CardName = styled.p``;

const CardPrice = styled.p``;

const Quantity = styled.p``;

const CardTotal = styled.div`
  width: 50%;
  background: black;
`;

const CardTotalText = styled.p``;

const CardTotalPrice = styled.p``;

export default CheckoutModal;
