import styled from "styled-components/macro";

export const SummaryContainer = styled.div`
  background-color: #fff;
  padding: 33px;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  border-radius: 8px;
`;

export const SummaryHeader = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  margin-bottom: 31px;
`;

export const SummaryList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style-type: none;
  margin-block-start: 0px;
  padding-inline-start: 0px;
`;

export const SummaryItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

export const SummaryImageDiv = styled.div`
  background: #f1f1f1;
  max-width: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 64px;
`;

export const SummaryItemImage = styled.img`
  max-width: 36px;
  width: 100%;
`;

export const SummaryItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  height: 50px;
`;

export const SummaryItemName = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 0.938rem;
  line-height: 1.563rem;
  text-transform: uppercase;
`;

export const SummaryItemPrice = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  opacity: 0.5;
`;

export const SummaryItemQuantity = styled.p`
  margin-left: auto;
  align-self: flex-start;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 14px;
`;

export const SummaryTotalText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
  text-transform: uppercase;
`;

export const SummaryTotalPrice = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
`;

export const Shipping = styled(SummaryTotal)``;

export const ShippingText = styled(SummaryTotalText)``;

export const ShippingPrice = styled(SummaryTotalPrice)``;

export const Vat = styled(SummaryTotal)``;

export const VatText = styled(SummaryTotalText)``;

export const VatPrice = styled(SummaryTotalPrice)``;

export const GrandTotal = styled(SummaryTotal)``;

export const GrandTotalText = styled(SummaryTotalText)``;

export const GrandTotalPrice = styled(SummaryTotalPrice)`
  color: #d87d4a;
`;
