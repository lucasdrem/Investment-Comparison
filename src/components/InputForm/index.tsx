import React, {
  InputHTMLAttributes,
  // useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import Tooltip from '../Tooltip';

import { Container, IconError } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  value: string;
  error: string | undefined;
  touched: boolean | undefined;
  type: string;
}

const InputForm: React.FC<InputProps> = ({
  name,
  icon: Icon,
  value,
  onChange,
  placeholder,
  touched,
  error,
  type,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        type={type}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && touched ? (
        <IconError>
          <Tooltip title={error} className="login__tooltip">
            <FiAlertCircle size={23} />
          </Tooltip>
        </IconError>
      ) : null}
    </Container>
  );
};

export default InputForm;
