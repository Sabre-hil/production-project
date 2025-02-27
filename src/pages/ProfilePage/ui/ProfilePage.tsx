import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { 
    fetchProfileData, 
    getProfileError, 
    getProfileForm, 
    getProfileLoading, 
    getProfileReadonly, 
    getProfileValidateErrors, 
    profileReducer
} from "entities/Profile";
import { 
    DynamicModuleLoader, 
    ReducersList 
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Currency } from "entities/Currency";
import { profileActions } from 'entities/Profile/model/slice/profileSlice';
import { Country } from "entities/Country";
import { ProfileCard } from '../../../entities/Profile/ui/ProfileCard/ProfileCard';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer
}


const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const profileFormData = useSelector(getProfileForm);
    const profileDataLoading = useSelector(getProfileLoading);
    const profileDataError = useSelector(getProfileError);
    const profileReadonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ name: value || '' }))
    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        if (/^\d+$/.test(value || '')) {
            dispatch(profileActions.updateProfile({ age: Number(value || 0)}))
        }
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country: country }))
    }, [dispatch]);
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard
                data={profileFormData}
                isLoading={profileDataLoading}
                isError={profileDataError}
                readonly={profileReadonly}
                onChangeLastName={onChangeLastName}
                onChangeFirstName={onChangeFirstName}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                validateErrors={validateErrors}
            />
        </DynamicModuleLoader>
    )
}

export default ProfilePage;
