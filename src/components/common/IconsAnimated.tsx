import ReactLoading, { LoadingType } from 'react-loading';

type Props = {
  type: LoadingType | undefined
  color: string | undefined
  height: string | number | undefined
  width: string | number | undefined
}

export const LoadingIcon = ({
  type, color, height, width,
}: Props) => (
  <ReactLoading
    type={type}
    color={color}
    height={height}
    width={width}
  />
);
