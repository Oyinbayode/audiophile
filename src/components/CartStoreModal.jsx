import React, { useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { FormatCurrency } from "../utilities/FormatCurrency";
import Button from "../utilities/Button";
import { emptyCart } from "../redux/slices/cartSlice";

const CartStoreModal = ({ isOpen, setIsOpen, dispatch }) => {
  const handleModalClose = () => {
    setIsOpen(false);
  };

  const CartState = useSelector((state) => state.cart);

  useEffect(() => {
    Modal.setAppElement("body");
  });

  //   useEffect(() => {
  //     dispatch(emptyCart());
  //   }, [dispatch]);

  console.log(CartState);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          background: "rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      {CartState.Cart.length > 0 ? (
        <CartContainer>
          <Header>
            <H2>Cart ({CartState.Cart.length}) </H2>
            <RemoveAllButton
              onClick={() => {
                dispatch(emptyCart());
              }}
            >
              Remove all
            </RemoveAllButton>
          </Header>

          <CartList>
            {CartState.Cart.map((item) => (
              <CartItem key={item.id}>
                <CartImageDiv>
                  <CartItemImg src={item.image.desktop} alt={item.name} />
                </CartImageDiv>

                <CartItemInfo>
                  <CartItemName>{item.slugName}</CartItemName>
                  <CartItemPrice>{FormatCurrency(item.price)}</CartItemPrice>
                </CartItemInfo>
                <Quantity>
                  <Btn>-</Btn>
                  <QtyParagraph>{item.quantity}</QtyParagraph>
                  <Btn>+</Btn>
                </Quantity>
              </CartItem>
            ))}
          </CartList>
          <Total>
            <TotalText>Total</TotalText>
            <TotalPrice>{FormatCurrency(CartState.TotalPrice)}</TotalPrice>
          </Total>
          <Button checkout to="/checkout">
            Checkout
          </Button>
        </CartContainer>
      ) : (
        <p>Your cart is empty</p>
      )}
    </Modal>
  );
};

const Modal = styled(ReactModal)`
  position: absolute;
  width: 420px;
  background-color: #fff;
  min-height: fit-content;
  top: 8rem;
  left: auto;
  right: 10vw;
  display: flex;
  justify-content: center;
  border-radius: 8px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 313px;
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
  margin-top: 32px;
`;

const H2 = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.563rem;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
`;

const RemoveAllButton = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
  line-height: 25px;
  color: #000;
  opacity: 0.5;
`;

const CartList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  list-style-type: none;
  margin-block: 0px;
  padding-inline: 0px;
`;

const CartItem = styled.li`
  display: flex;
  align-items: center;

  width: 100%;
  margin-bottom: 24px;
`;

const CartImageDiv = styled.div`
  background: #f1f1f1;
  max-width: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 64px;
`;

const CartItemImg = styled.img`
  max-width: 36px;
  width: 100%;
`;

const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  height: 50px;
`;

const CartItemName = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.938rem;
  line-height: 1.563rem;
  text-transform: uppercase;
`;

const CartItemPrice = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  opacity: 0.5;
`;

const Quantity = styled.div`
  display: flex;
  background: #f1f1f1;
  max-width: 96px;
  width: 100%;
  justify-content: space-between;
  height: 32px;
  align-items: center;

  margin-left: auto;
`;

export const QtyParagraph = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;
`;

export const Btn = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  width: 40px;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.25;
  transition: color ease-in-out 0.3s, opacity ease-in-out 0.3s;

  &:hover {
    opacity: 1;
    color: #d87d4a;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 14px;
`;

const TotalText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
  text-transform: uppercase;
`;

const TotalPrice = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
`;

export default CartStoreModal;
