import React, { forwardRef } from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { Input, InputProps } from './ui/input';

export const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        allowNegative={false}
        thousandSeparator="."
        decimalSeparator=","
        customInput={Input}
        getInputRef={ref}
        prefix="R$ "
      />
    );
  },
);

MoneyInput.displayName = 'MoneyInput';
