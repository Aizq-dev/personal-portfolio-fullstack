import { useAppData } from "../../../hooks/useAppData";

export const Profile = () => {
  const { profile, error } = useAppData();

  if (error) console.log(error);

  return (
    <div className="flex items-center gap-5">
      {profile && (
        <>
          <img src={profile.avatar} className="w-36 rounded-full" />
          <div className="avatar_name">
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p>{profile.slogan}</p>
          </div>
        </>
      )}
    </div>
  );
};
