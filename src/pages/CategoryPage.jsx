import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StreamCard from "../components/StreamCard";
import {
  getCategoryById,
  getCategoryVideos,
  getLiveStreams,
} from "../services/api";

const CategoryPage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [liveStreams, setLiveStreams] = useState([]);
  const [videos, setVideos] = useState([]);
  const [activeTab, setActiveTab] = useState("live");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryData = await getCategoryById(id);
        setCategory(categoryData);

        const liveStreamsData = await getLiveStreams(id);
        setLiveStreams(liveStreamsData);

        const videosData = await getCategoryVideos(id);
        setVideos(videosData);
      } catch (error) {
        console.error("Failed to fetch category details", error);
      }
    };

    fetchCategory();
  }, [id]);

  if (!category) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img
          src={category.image}
          alt={category.name}
          className="w-32 h-32 mr-4"
        />
        <div>
          <h1 className="text-4xl font-bold">{category.name}</h1>
          <p className="mt-2">{category.description}</p>
          <div className="mt-2">
            <span className="mr-4">{category.viewers} Viewers</span>
            <span>{category.followers} Followers</span>
          </div>
          <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
            Follow
          </button>
        </div>
      </div>
      <div className="mb-4">
        <button
          onClick={() => setActiveTab("live")}
          className={`px-4 py-2 ${
            activeTab === "live"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          } rounded-tl rounded-bl`}
        >
          Live Channels
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`px-4 py-2 ${
            activeTab === "videos"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          } rounded-tr rounded-br`}
        >
          Videos
        </button>
      </div>
      <div>
        {activeTab === "live" ? (
          <div className="grid grid-cols-3 gap-4">
            {liveStreams.map((stream) => (
              <StreamCard key={stream._id} stream={stream} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {videos.map((video) => (
              <StreamCard key={video._id} stream={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
