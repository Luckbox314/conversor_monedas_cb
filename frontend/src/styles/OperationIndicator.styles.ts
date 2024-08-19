// src/components/Button/Button.styles.ts
import styled, { css } from 'styled-components';

export const StyledOperationIndicator = styled.div`
  width: 200px;
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.large};
`;

export const StyledOperationButton = styled.button<{ send: boolean }>`
  padding: ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.lightText};
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};

  ${({ theme, send }) =>
    ( send && css`
        &:hover {
          background-color: ${theme.colors.primaryHighlight};
        }
      `
    ) ||
    ( !send && css`
        &:hover {
          background-color: ${theme.colors.secondaryHighlight};
        }
      `
    )
  }
`;

export const StyledArrow = styled.img`
  margin: ${({ theme }) => theme.spacing.large};
  width: 100%;
`;
