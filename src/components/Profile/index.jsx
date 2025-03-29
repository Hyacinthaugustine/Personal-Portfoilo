const Profile = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <img
        src={"/assets/profile-picture.jpg"}
        alt="Profile picture"
        className="w-17 h-17 rounded-full cursor-pointer hover:border-2 delay-300"
      />
      <span className="text-2xl font-medium">HYC.DEV</span>
    </div>
  );
};

export default Profile;
