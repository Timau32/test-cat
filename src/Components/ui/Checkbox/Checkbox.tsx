import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  disabled?: boolean;
}

const CheckboxContainer = styled.label<{disabled: boolean}>`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin: 8px 0;

  &:hover {
    opacity: 0.8;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

// Скрытый нативный чекбокс
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

// Кастомное отображение чекбокса
const StyledCheckbox = styled.div<{ checked: boolean; disabled?: boolean }>`
  width: 20px;
  height: 20px;
  background: ${({ checked, theme }) => 
    checked ? theme.colors.primary : theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  margin-right: 12px;
  transition: all 150ms;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}

  &:after {
    content: '';
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-bottom: 2px;
  }
`;

const LabelText = styled.span<{ disabled?: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;

  ${({ disabled }) => disabled && `
    opacity: 0.5;
  `}
`;

const CheckBox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  ...props
}) => {
  return (
    <CheckboxContainer disabled={disabled}>
      <HiddenCheckbox 
        checked={checked} 
        onChange={onChange} 
        disabled={disabled} 
        {...props} 
      />
      <StyledCheckbox checked={Boolean(checked)} disabled={disabled} />
      <LabelText disabled={disabled}>{label}</LabelText>
    </CheckboxContainer>
  );
};

export default CheckBox;