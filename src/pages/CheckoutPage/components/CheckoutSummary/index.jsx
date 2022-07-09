import React from "react";
import {
  SummaryContainer,
  SummaryHeader,
  SummaryList,
  SummaryItem,
  SummaryImageDiv,
  SummaryItemImage,
  SummaryItemDetails,
  SummaryItemName,
  SummaryItemPrice,
  SummaryItemQuantity,
  SummaryTotal,
  SummaryTotalText,
  SummaryTotalPrice,
  Shipping,
  ShippingText,
  ShippingPrice,
  Vat,
  VatText,
  VatPrice,
  GrandTotal,
  GrandTotalText,
  GrandTotalPrice,
  SummaryButton,
} from "./Summary";
import { useSelector } from "react-redux/es/exports";
import { FormatCurrency } from "../../../../utilities/FormatCurrency";
import CheckoutModal from "../../../../components/CheckoutModal";

const CheckoutSummary = ({ isOpen, setIsOpen }) => {
  const CartState = useSelector((state) => state.cart);

  // Modal

  return (
    <SummaryContainer>
      <SummaryHeader>Summary</SummaryHeader>
      <SummaryList>
        {CartState.Cart.map((item) => (
          <SummaryItem key={item.id}>
            <SummaryImageDiv>
              <SummaryItemImage src={item.image.desktop} alt={item.name} />
            </SummaryImageDiv>
            <SummaryItemDetails>
              <SummaryItemName>{item.slugName}</SummaryItemName>
              <SummaryItemPrice>{FormatCurrency(item.price)}</SummaryItemPrice>
            </SummaryItemDetails>
            <SummaryItemQuantity>x{item.quantity}</SummaryItemQuantity>
          </SummaryItem>
        ))}
      </SummaryList>
      <SummaryTotal>
        <SummaryTotalText>Total</SummaryTotalText>
        <SummaryTotalPrice>
          {FormatCurrency(CartState.TotalPrice)}
        </SummaryTotalPrice>
      </SummaryTotal>
      <Shipping>
        <ShippingText>Shipping</ShippingText>
        <ShippingPrice>{FormatCurrency(50)}</ShippingPrice>
      </Shipping>
      <Vat>
        <VatText>VAT (INCLUDED) </VatText>
        <VatPrice>{FormatCurrency(CartState.TotalPrice * 0.2)}</VatPrice>
      </Vat>
      <GrandTotal>
        <GrandTotalText>Grand Total</GrandTotalText>
        <GrandTotalPrice>
          {FormatCurrency(CartState.TotalPrice + 50)}
        </GrandTotalPrice>
      </GrandTotal>
      <SummaryButton type="submit">Continue and PAy</SummaryButton>
      <CheckoutModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </SummaryContainer>
  );
};

export default CheckoutSummary;
