import styled from 'styled-components';
import { SearchIcon } from '../../../common/Icon';
import { LoadingIcon } from '../../../common/IconsAnimated';

export const IconLoadingWait = () => (
  <LoadingIcon
    color="#FFF"
    type="spokes"
    width={11}
    height={11}
  />
);

export const List = styled.ul`
  text-align: center;
  width: 100%;
`;

export const EmptyList = styled.div`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 5px;
  width: 100%;
  padding: 2px 0;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Times New Roman', Times, serif;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const InputGroup = styled.div`
  display: flex;
  height: 20px;
  margin: 2px 0;
`;

export const Input = styled.input`
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  height: 100%;
  padding: 3px 8px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.inputColor};
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.colors.inputBackground};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const ButtonSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  background-color: #23272a;
  border: 0.5px solid #23272a;

  &:hover {
    border: 0.5px solid ${({ theme }) => theme.colors.border};
    & > svg {
      color: ${({ theme }) => theme.colors.border};
    }
  }
`;

export const IconSearch = styled(SearchIcon)`
  color: white;
`;

export const ErrorSearchInput = styled.span`
  font-size: 8px;
  padding-left: 5px;
  font-weight: 300px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  max-width: 200px;
  color: ${({ theme }) => theme.colors.inputErrorColor}
`;
