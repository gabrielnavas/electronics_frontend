import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const InputTitle = styled.span`
  color: ${({ theme }) => theme.colors.titleText};
  font-size: 13px;
  padding-left: 3px;
  font-weight: 100;
  font-family: 'Times New Roman', Times, serif;
`;

export const Input = styled.input`
  padding: 4px;
  margin: 2px 1px 0 0;
  width: 200px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.inputColor};
  font-weight: 100;
  font-family: 'Times New Roman', Times, serif;
  border: 0.5px solid ${({ theme }) => theme.colors.inputColor};

  &:focus {
    border: 0.5px solid ${({ theme }) => theme.colors.border};
  }
`;

export const ErrorInput = styled.span`
  color: ${({ theme }) => theme.colors.inputErrorColor};
  font-size: 11px;
  font-weight: 100;
  font-family: 'Times New Roman', Times, serif;
  padding-left: 5px;
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacings.paddings.button};
  background: ${({ theme }) => theme.spacings.paddings.button};
  border: 0.3px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.bordersRadius.card};
  color: ${({ theme }) => theme.colors.buttonColor};
  font-size: 11px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
`;
