 import { useLoaderData, useParams } from "react-router";
 import { useContext } from "react";
// import { TimelineContext } from "../../context/TimelineContext";
import { toast } from "react-toastify";
 import { FiPhone,FiMessageSquare,FiVideo,FiClock,FiTrash2 } from "react-icons/fi";
import { FaArchive } from "react-icons/fa";
import { TimelineContext } from "../context/TimelineContext";

 

const ProfileDetails = () => {
  const { timeline, setTimeline } =
  useContext(TimelineContext);

  const { id } = useParams();

  const data = useLoaderData();

  const singleProfile = data.find(
    profile => profile.id === parseInt(id)
  );

  const statusColors = {
    Overdue: "bg-[#EF4444] text-white",
    "Almost due": "bg-[#EFAD44] text-white",
    "On-track": "bg-[#244D3F] text-white",
  };
  // TimeLine part 

  const handleTimeline = (type) => {

  const newActivity = {
    id: Date.now(),
    name: singleProfile.name,
    type,
    time: new Date().toLocaleString(),
  };

  setTimeline([...timeline, newActivity]);

  toast.success(
    `${type} with ${singleProfile.name}`
  );
};

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT PROFILE CARD */}
        <div className="bg-white rounded-xl shadow p-6">

          <div className="text-center">

            <img
              src={singleProfile?.picture}
              alt={singleProfile?.name}
              className="w-20 h-20 mx-auto rounded-full"
            />

            <h2 className="mt-3 text-lg font-semibold">
              {singleProfile?.name}
            </h2>

            <span
              className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${statusColors[singleProfile?.status]}`}
            >
              {singleProfile?.status}
            </span>

            <p className="text-sm text-gray-500 mt-3">
              {singleProfile?.bio}
            </p>

            <p className="text-xs text-gray-400">
              Preferred: Email
            </p>

          </div>

          {/* Actions */}
          <div className="mt-6 space-y-2">

            <button className="flex items-center gap-2 w-full bg-gray-100 hover:bg-gray-200 p-2 rounded">
              <FiClock size={16} />
              Snooze 2 Weeks
            </button>
            <button className="flex items-center gap-2 w-full bg-gray-100 hover:bg-gray-200 p-2 rounded">
              <FaArchive size={16} />
              Archive
            </button>

            <button className="flex items-center gap-2 w-full bg-red-50 text-red-600 hover:bg-red-100 p-2 rounded">
              <FiTrash2 size={16} />
              Delete
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">
                {singleProfile?.days_since_contact}
              </h3>

              <p className="text-sm text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">
                {singleProfile?.goal}
              </h3>

              <p className="text-sm text-gray-500">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-md font-bold">
                Feb 27, 2026
              </h3>

              <p className="text-sm text-gray-500">
                Next Due
              </p>
            </div>

          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white p-5 rounded-xl shadow">

            <div className="flex justify-between items-center">

              <h3 className="font-semibold">
                Relationship Goal
              </h3>

              <button className="text-sm text-green-700 border px-3 py-1 rounded">
                Edit
              </button>

            </div>

            <p className="text-gray-500 mt-2">
              Connect every {singleProfile?.goal} days
            </p>

          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white p-5 rounded-xl shadow">

            <h3 className="font-semibold mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-4">

              <button
              onClick={() => handleTimeline("Call")}
              className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
            >
              <FiPhone size={20} />
              Call
            </button>

            <button
              onClick={() => handleTimeline("Text")}
              className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
            >
              <FiMessageSquare size={20} />
              Text
            </button>

             <button
                  onClick={() => handleTimeline("Video")}
                  className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
                >
                  <FiVideo size={20} />
                  Video
                </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;