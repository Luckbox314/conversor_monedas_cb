// src/components/Button/Button.styles.ts
import styled from 'styled-components';

export const StyledCurrencyInput = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;

  & > * {
    display: block;
  }
`;

export const CurrencyContainer = styled.div`
  position: relative;
  width: 250px;    
  padding: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightText};
`;

export const CurrencyImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const CurrencyAmountContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  & > * {
    display: block;
  }
`;

export const StyledAmountLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const StyledAmountInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
`;
