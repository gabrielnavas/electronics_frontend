import styled from 'styled-components';

export const Container = styled.button`
  padding: ${({ theme }) => theme.spacings.paddings.button};
  margin: 10px 12px;
  background: ${({ theme }) => theme.spacings.paddings.button};
  border: 0.3px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.bordersRadius.card};
  color: ${({ theme }) => theme.colors.buttonColor};
  font-size: 19px;
  min-width: 125px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;

  &:hover{
    color: ${({ theme }) => theme.colors.text};
    border: 0.3px solid ${({ theme }) => theme.colors.border};
  }
`;
