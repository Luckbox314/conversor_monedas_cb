// src/components/Button/Button.styles.ts
import styled, { css } from 'styled-components';

export const SyledCurrencyConverterContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledSubmitButton = styled.a<{send: boolean}>`
  padding: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.lightText};
  text-decoration: none;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  

  ${({ send }) =>
    send &&
    css`
      background-color: ${({ theme }) => theme.colors.primaryHighlight};
    `
    ||
    !send &&
    css`
      background-color: ${({ theme }) => theme.colors.secondaryHighlight};
    `
  }
`;

