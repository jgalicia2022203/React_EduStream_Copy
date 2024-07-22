import React from "react";

const StreamCard = ({ stream }) => {
  return (
    <div className="p-2 border rounded shadow hover:shadow-lg">
      <img
        src={stream.thumbnail}
        alt={stream.title}
        className="object-cover w-full h-32 mb-2"
      />
      <div>
        <h2 className="text-lg font-bold">{stream.title}</h2>
        <p className="text-sm text-gray-600">{stream.channelName}</p>
        <p className="text-sm">{stream.viewers} viewers</p>
      </div>
    </div>
  );
};

export default StreamCard;
