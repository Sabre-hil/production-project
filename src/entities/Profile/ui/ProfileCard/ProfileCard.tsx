import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Profile, ValidateProfileErrors } from "entities/Profile/model/types/profile";
import { Input } from 'shared/ui/Input/Input';
import { CurrencySelect } from '../../../Currency/ui/CurrencySelect/CurrencySelect';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "entities/Profile/model/slice/profileSlice";
import { updateProfileData } from "entities/Profile/model/services/updateProfileData/updateProfileData";
import { Avatar } from '../../../../shared/ui/Avatar/Avatar';
import { Currency } from "entities/Currency";
import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country";
import { Loader } from '../../../../shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCard {
    className?: string;
    data?: Profile;
    isError?: string;
    isLoading?: boolean;
    readonly?: boolean;
    validateErrors?: ValidateProfileErrors[];
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}


export const ProfileCard = (props: ProfileCard) => {
    const { 
        data, 
        isError, 
        isLoading, 
        readonly, 
        className,
        validateErrors,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const validateErrorsTranslate = {
      [ValidateProfileErrors.SERVER_ERROR]: t('Ошибка сервера'),
      [ValidateProfileErrors.INCORRECT_AGE]: t('Некорректный возраст'),
      [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Некорректный регион'),
      [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
      [ValidateProfileErrors.NO_DATA]: t('Данные не указаны'),
    };

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const mods: Mods = {
      [cls.editing]: !readonly
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
              <Loader />
            </div>
        )
    }

    if (isError) {
        return (
            <div className={classNames(cls.ProfileCard, mods, [className, cls.error])}>
              <Text 
                theme={TextTheme.ERROR} 
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
                />
            </div>
        )
    }
    
   return (
       <div className={classNames(cls.ProfileCard, {}, [className])}>
        <div className={cls.header}>
            <Text title={t('Профиль')}/>
            {readonly ? (
                <Button onClick={onEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            ) 
            : (
                <div className={cls.blockButtons}>
                  <Button onClick={onSaveEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Сохранить')}
                  </Button>
                  <Button onClick={onCancelEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED}>
                    {t('Отменить')}
                  </Button>
                </div>
            )}
        </div>
        {validateErrors?.length && validateErrors.map((err) => (
          <Text 
            key={err} 
            theme={TextTheme.ERROR} 
            text={validateErrorsTranslate[err]} 
          />
        ))}
        <div className={cls.data}>
            {data?.avatar && (
              <div className={cls.AvatarWrapper}>
                <Avatar src={data.avatar} alt={"Аватар"} size={100}/>
            </div>
            )}
            <Input 
              onChange={onChangeFirstName} 
              value={data?.name || ''}
              placeholder={t('Ваше имя')}
              className={cls.input}
              readonly={readonly}
            />
            <Input
              onChange={onChangeLastName} 
              value={data?.lastname || ''}
              placeholder={t('Ваше имя')}
              className={cls.input}
              readonly={readonly}
            />
            <Input
              onChange={onChangeAge} 
              value={data?.age}
              placeholder={t('Ваш возраст')}
              className={cls.input}
              readonly={readonly}
            />
            <Input
              onChange={onChangeCity} 
              value={data?.city || ''}
              placeholder={t('Ваш город')}
              className={cls.input}
              readonly={readonly}
            />
            <Input
              onChange={onChangeAvatar} 
              value={data?.avatar || ''}
              placeholder={t('Ссылка на ваш аватар')}
              className={cls.input}
              readonly={readonly}
            />
            <CurrencySelect
              className={cls.input}
              value={data?.currency} 
              onChange={onChangeCurrency}  
              readonly={readonly}
            />
            <CountrySelect
              className={cls.input}
              value={data?.country} 
              onChange={onChangeCountry}  
              readonly={readonly}
            />
        </div>
       </div>
   )
}

