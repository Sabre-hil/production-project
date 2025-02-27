import { memo, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { Select } from "shared/ui/Select/Select";
import { Currency } from "entities/Currency/model/types/currency";
import { classNames } from "shared/lib/classNames/classNames";


interface CurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
   {value: Currency.RUB, content: Currency.RUB},
   {value: Currency.USD, content: Currency.USD},
   {value: Currency.EUR, content: Currency.EUR}
];


export const CurrencySelect = memo((props: CurrencySelectProps) => {
   const {
      className,
      value, 
      onChange, 
      readonly
   } = props;
   const { t } = useTranslation();

   const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Currency);
   }, [onChange]);

   return (
      <Select 
        className={classNames('', {}, [className])}
        label={t("Укажите валюту")}
        onChange={onChangeHandler}
        options={options}
        value={value}
        readonly={readonly}
      />
   );
});

