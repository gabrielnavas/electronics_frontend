import ReactLoading, { LoadingType } from 'react-loading';

type Props = {
  type: LoadingType | undefined
  color: string | undefined
}

export const LoadingIcon = ({
  type, color,
}: Props) => (
  <ReactLoading
    type={type}
    color={color}
  />
);
