import styled from 'styled-components';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacings.paddings.card};
  border-radius: ${({ theme }) => theme.bordersRadius.card};
`;

export const CardTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${({ theme }) => theme.colors.titleText};
`;
