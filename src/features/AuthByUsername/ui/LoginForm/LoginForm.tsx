import { useTranslation } from "react-i18next"
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { ChangeEvent, useState } from "react";


interface LoginFormProps {
    className?: string
}


export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const [inputValue, setInputValue] = useState<string>(null);

    const changeHandler = (val: string) => {
        setInputValue(val)
    }

    return (
        <div className={cls.LoginForm}>
            <Input autoFocus placeholder={t('Введите имя')} onChange={changeHandler} value={inputValue} className={cls.LoginInput} />
            <Input placeholder={t('Введите пароль')} onChange={changeHandler} value={inputValue} className={cls.LoginInput} />
            <Button className={cls.LoginButton}>
                {t("Войти")}
            </Button>
        </div>
    )
}
