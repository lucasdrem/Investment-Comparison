import React, { ButtonHTMLAttributes } from 'react';
import { BeatLoader } from 'react-spinners';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  width: string;
  isSubmitting?: boolean;
  Icon: typeof BeatLoader;
};

const ButtonForm: React.FC<ButtonProps> = ({
  children,
  isSubmitting,
  Icon,
  ...rest
}) => (
  <Container type="submit" {...rest}>
    {isSubmitting ? <Icon size={15} color="#ffffff" /> : children}
  </Container>
);

export default ButtonForm;
