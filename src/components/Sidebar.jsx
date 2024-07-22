import React, { useEffect, useState } from "react";
import { getFollowedChannels } from "../services/api";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user._id : null;

  useEffect(() => {
    const fetchChannels = async () => {
      if (userId) {
        try {
          const response = await getFollowedChannels(userId);
          setChannels(response.channels);
        } catch (error) {
          console.error("Failed to fetch channels", error);
        }
      }
    };

    fetchChannels();
  }, [userId]);

  if (!userId) {
    return null; // or you can return a message saying "Please log in to see your followed channels"
  }

  return (
    <aside className="w-64 p-4 bg-gray-100">
      <h2 className="mb-4 text-xl font-bold">Followed Channels</h2>
      <ul>
        {channels.map((channel) => (
          <li
            key={channel._id}
            className="flex items-center justify-between mb-2"
          >
            <span>{channel.name}</span>
            {channel.isLive ? (
              <span className="text-red-500">{channel.viewers} viewers</span>
            ) : (
              <span className="text-gray-500">Offline</span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
