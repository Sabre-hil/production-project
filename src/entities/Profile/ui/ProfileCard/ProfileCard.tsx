import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileUsername";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileFirstName";
import { getProfileLoading } from "entities/Profile/model/selectors/getProfileLoading/getProfileLastName";
import cls from './ProfileCard.module.scss';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCard {
    className?: string;
}


export const ProfileCard = ({ className }: ProfileCard) => {
    const { t } = useTranslation('profile');
    const profileData = useSelector(getProfileData);
    const profileDataLoading = useSelector(getProfileLoading);
    const profileDataError = useSelector(getProfileError);
   return (
    
       <div className={classNames(cls.ProfileCard, {}, [className])}>
        <div className={cls.header}>
            <Text title={t('Профиль')}/>
            <Text title={profileData?.name}/>
            <Text title={profileData?.lastname}/>
            <Text title={profileData?.username}/>
            <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</Button>
        </div>
        <div className={cls.data}>
            <Input 
              onChange={() => console.log('click')} 
              value={profileData?.name || ''}
              placeholder={t('Ваше имя')}
              className={cls.input}
            />
            <Input
              onChange={() => console.log('click')} 
              value={profileData?.lastname || ''}
              placeholder={t('Ваше имя')}
              className={cls.input}
            />
        </div>
       </div>
   )
}

