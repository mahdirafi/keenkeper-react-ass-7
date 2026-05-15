import { PuffLoader } from "react-spinners";

const Home = () => {
  const profileData = useLoaderData();

  return (
    <div>
      <Banner />

      {profileData ? (
        <ProfileSection profileData={profileData} />
      ) : (
        <div className="flex items-center justify-center h-screen">
          <PuffLoader color="#36d7b7" size={80} />
        </div>
      )}
    </div>
  );
};

export default Home;