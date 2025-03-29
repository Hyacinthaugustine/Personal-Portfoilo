import Profile from "../../components/Profile";
import NavigationRoutes from "./Navigation-Routes";

const Navigation = () => {
  return (
    <div className="w-full bg-DarkBGround flex justify-between items-center py-4 px-8">
      <Profile profileName="" profilePicture={"/assets/profile-picture.jpg"} />
      <NavigationRoutes />
    </div>
  );
};

export default Navigation;
