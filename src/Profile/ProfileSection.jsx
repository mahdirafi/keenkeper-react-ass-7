import ProfileCard from './ProfileCard';


const ProfileSection = ({profileData}) => {
    
    return (
         <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold  mb-8">
         Your Friends
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {profileData.map( (profile) => {
                return(<ProfileCard  profile={profile} key={profile.id}/>)
            })}
        </div>
        </div>
    );
};

export default ProfileSection;