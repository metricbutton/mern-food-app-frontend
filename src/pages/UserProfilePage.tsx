import { useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser } = useUpdateMyUser();

  return <UserProfileForm onSave={updateUser} />;
};

export default UserProfilePage;
