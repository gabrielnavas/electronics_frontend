import React from 'react';
import {
  Card,
  CardHeader,
  CardHeaderGroupButtons,
  CardTitle,
  Body,
} from './styles';

type Props = {
  titleName: string
  buttonsRightHeader: React.ReactNode[] | React.ReactNode | undefined
  children: React.ReactNode[] | React.ReactNode
}

const CardComponent = ({
  titleName,
  buttonsRightHeader,
  children,
}: Props) => (
  <Card>
    <CardHeader>
      <CardTitle>{titleName}</CardTitle>
      <CardHeaderGroupButtons>{buttonsRightHeader}</CardHeaderGroupButtons>
    </CardHeader>
    <Body>
      {children}
    </Body>
  </Card>
);

export default CardComponent;
