import React, { useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components/macro";
import CheckOutIcon from "../components/assets/Check.svg";
import { useSelector, useDispatch } from "react-redux";
import { FormatCurrency } from "../utilities/FormatCurrency";
import { emptyCart } from "../redux/slices/cartSlice";
import Button from "../utilities/Button";

const CheckoutModal = ({ isOpen, setIsOpen }) => {
  const CartState = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <ModalDiv
      isOpen={isOpen}
      style={{
        overlay: {
          background: "rgba(0, 0, 0, 0.6)",
          width: "100vw",
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
                    <CardImg
                      src={CartState.Cart[0].image.desktop}
                      alt={CartState.Cart[0].name}
                    />
                  </CardImage>
                  <CardInfo>
                    <CardName>{CartState.Cart[0].slugName}</CardName>
                    <CardPrice>
                      {FormatCurrency(CartState.Cart[0].price)}
                    </CardPrice>
                  </CardInfo>
                  <Quantity>x{CartState.Cart[0].quantity}</Quantity>
                </CardItem>
                <Hr />
                <OtherItems>
                  {CartState.Cart.length > 1
                    ? `and ${CartState.Cart.length - 1} other item${
                        CartState.Cart.length > 2 ? "s" : ""
                      }`
                    : ``}
                </OtherItems>
              </CardList>
              <CardTotal>
                <CardTotalText>Grand Total</CardTotalText>
                <CardTotalPrice>
                  {FormatCurrency(CartState.TotalPrice + 50)}
                </CardTotalPrice>
              </CardTotal>
            </ModalCard>
            <Button
              to="/"
              checkout
              onClick={() => {
                dispatch(emptyCart());
                setIsOpen(() => false);
              }}
            >
              Back to home
            </Button>
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

  @media screen and (max-width: 600px) {
    width: 327px;
    transform: translate(-50%, 0);
    top: 4rem;
    left: 50%;
    right: 10vw;
    position: absolute;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 444px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 600px) {
    max-width: 263px;
  }
`;

const Check = styled.div`
  margin-top: 48px;

  @media screen and (max-width: 600px) {
    margin-top: 32px;
  }
`;

const CheckIcon = styled.img``;

const Hr = styled.hr`
  margin: 0;
  border: 1px solid #000;
  opacity: 0.08;
  width: 100%;
  max-width: 198px;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.14286px;
  text-transform: uppercase;
  margin: 0;
  max-width: 320px;
  margin-top: 33px;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.857143px;
    margin-top: 24px;
  }
`;

const ModalBody = styled.div``;

const ModalParagraph = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
  margin: 0;
  margin-bottom: 33px;
  margin-top: 24px;

  @media screen and (max-width: 600px) {
    margin-top: 16px;
    margin-bottom: 24px;
  }
`;

const ModalMain = styled.main``;

const ModalCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 140px;
  margin-bottom: 46px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 232px;
  }
`;

const CardList = styled.ul`
  background: #f1f1f1;
  width: 100%;
  max-width: 246px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-block-start: 0px;
  padding-inline-start: 0px;
  align-items: center;
  height: 100%;
  border-radius: 8px 0 0 8px;

  @media screen and (max-width: 600px) {
    margin: 0;
    max-width: 100%;
    border-radius: 8px 8px 0 0;
  }
`;

const CardItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 198px;
  margin-top: 18px;
`;

const CardImage = styled.div`
  background: #f1f1f1;
  max-width: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 64px;
`;

const CardImg = styled.img`
  max-width: 28px;
  width: 100%;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  height: 50px;
`;

const CardName = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.938rem;
  line-height: 1.563rem;
  text-transform: uppercase;
`;

const CardPrice = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  opacity: 0.5;
`;

const Quantity = styled.p`
  margin-left: auto;
  align-self: flex-start;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const OtherItems = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  opacity: 0.5;
`;

const CardTotal = styled.div`
  width: 100%;
  background: black;
  max-width: 198px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 8px 8px 0;
  height: 100%;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    border-radius: 0 0 8px 8px;
  }
`;

const CardTotalText = styled.p`
  margin: 0;
  margin-left: 32px;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
  text-transform: uppercase;
`;

const CardTotalPrice = styled(CardTotalText)`
  margin-bottom: 0;
  font-size: 18px;
  line-height: 25px;
  opacity: 1;
`;

export default CheckoutModal;
