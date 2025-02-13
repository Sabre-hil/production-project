import { fetchProfileData, profileReducer } from "entities/Profile";
import { useEffect } from "react";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfileCard } from '../../../entities/Profile/ui/ProfileCard/ProfileCard';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer
}


const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicModuleLoader>
    )
}

export default ProfilePage;
