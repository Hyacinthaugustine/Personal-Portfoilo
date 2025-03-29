import Profile from "../../components/Profile";
import NavigationRoutes from "./Navigation-Routes";

const Navigation = () => {
  return (
    <div className="w-full bg-DarkBGround flex justify-between items-center p-4">
      <Profile />
      <NavigationRoutes />
    </div>
  );
};

export default Navigation;
