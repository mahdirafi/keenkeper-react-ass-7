import { Link } from "react-router";

 
const ProfileCard = ({profile}) => {

     const statusColors = {
    Overdue: "bg-[#EF4444] text-white",
    "Almost due": "bg-[#EFAD44] text-white",
    "On-track": "bg-[#244D3F] text-white",
  };
    return (
        
         
       
          <Link to={`/ProfileDetails/${profile.id}`}
            key={profile.id}
            className="bg-zinc-200 rounded-2xl shadow-md p-5  "
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src={profile?.picture}
                alt={profile?.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              <div>
                <h2 className="text-xl font-bold">{profile?.name}</h2>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                
                <span className="text-[16px] font-medium text-zinc-500 ">
                  {profile?.days_since_contact}d Ago
                </span>
              </p>
  
            </div>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {profile.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-600 font-semibold  text- px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
              <div className="text-center">
                    <span
                  className={`inline-block  mt-4 px-3 py-1 text-[16px] rounded-full font-medium ${statusColors[profile?.status]}`}
                >
                  {profile?.status}
                </span>
              </div>
          </Link>
        


 
    );
};

export default ProfileCard;