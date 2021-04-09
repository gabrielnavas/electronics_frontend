import styled from 'styled-components';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 350px;
  align-items: center;
  background: ${({ theme }) => theme.colors.card};
  border-bottom-left-radius: ${({ theme }) => theme.bordersRadius.card};
  border-bottom-right-radius: ${({ theme }) => theme.bordersRadius.card};
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.cardHeader};
  padding: 10px;
  width: 100%;
`;

export const CardHeaderGroupButtons = styled.div`
  margin-right: 10px;
`;

export const CardTitle = styled.span`
  font-size: 25px;
  margin-left: 40px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${({ theme }) => theme.colors.titleText};
`;

export const Body = styled.section`
`;
