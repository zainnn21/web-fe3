type ProfileCardProps = {
  srcprofile: string;
  name: string;
};

const ProfileCard = ({ srcprofile, name }: ProfileCardProps) => {
  return (
    <img
      src={srcprofile}
      className="md:w-10 md:h-10 w-9 h-9 rounded-[10px]"
      alt={name}
    />
  );
};

export default ProfileCard;
