import styled, { css } from 'styled-components';

export const DropdownContainer = styled.div`
    position: relative;
    width: 250px;
`;

export const DropdownHeader = styled.div<{send: boolean}>`
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundDark};

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

export const DropdownListContainer = styled.div`
    position: absolute;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
    border: 1px solid #ccc;
    max-height: 200px;
    overflow-y: auto;
`;

export const DropdownList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
`;

export const ListItem = styled.li<{send: boolean}>`
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;

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

export const OptionImage = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 8px;
`;