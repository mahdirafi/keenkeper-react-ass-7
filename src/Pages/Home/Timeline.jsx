import { useContext } from "react";
 import { FiInbox } from "react-icons/fi";

import {
  FiPhone,
  FiMessageSquare,
  FiVideo
} from "react-icons/fi";
import { TimelineContext } from "../../context/TimelineContext";

 

const Timeline = () => {

  const { timeline } = useContext(TimelineContext);

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8">
        Timeline
      </h1>

      {timeline.length === 0 ? (
        
       

<div className="bg-white rounded-2xl shadow-md p-10 text-center border border-gray-200">

  <div className="flex justify-center mb-4 text-gray-400">
    <FiInbox size={42} />
  </div>

  <h2 className="text-3xl font-bold text-gray-700 mb-2">
    No Timeline Data Found
  </h2>

  <p className="text-gray-500">
    There is no activity available right now.
  </p>

</div>

      ) : (

        <div className="space-y-4">

          {timeline.map((item) => (

            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
            >

              {/* ICON */}

              <div>

                {item.type === "Call" && (
                  <FiPhone size={24} />
                )}

                {item.type === "Text" && (
                  <FiMessageSquare size={24} />
                )}

                {item.type === "Video" && (
                  <FiVideo size={24} />
                )}

              </div>

              {/* CONTENT */}

              <div>

                <h2 className="font-semibold">
                  {item.type} with {item.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {item.time}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Timeline;