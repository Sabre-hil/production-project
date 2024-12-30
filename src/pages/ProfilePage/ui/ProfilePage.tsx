import { profileReducer } from "entities/Profile";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer
}


const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>ProfilePage</div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage;
