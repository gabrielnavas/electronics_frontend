import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Selectable = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 0;
  background: ${({ theme }) => theme.colors.itemList};
  border-radius: ${({ theme }) => theme.bordersRadius.button};
  cursor: pointer;

  padding: 3px 0;
  border: 0.5px solid ${({ theme }) => theme.colors.itemList};

  &:hover {
    border: 0.5px solid ${({ theme }) => theme.colors.border};
  }
`;

export const AttributeName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};
  margin: 0 5px;
  width: 60px;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Times New Roman', Times, serif;
`;

export const AttributeEmail = styled.span`
  margin: 0 5px;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.colors.text};
  margin: 0 5px;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Times New Roman', Times, serif;
`;

export const Actions = styled.div`
`;

export const ButtonDelete = styled.button`
  padding: 3px 4px;
  margin: 0 4px;
  background: ${({ theme }) => theme.spacings.paddings.button};
  border: 0.3px solid #c02b2b;
  border-radius: ${({ theme }) => theme.bordersRadius.card};
  cursor: pointer;
  
  & span {
    color: #c02b2b;
    font-size: 10px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  &:hover {
    border: 0.5px solid ${({ theme }) => theme.colors.border};
  }
`;
