// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/EduStream/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["auth"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API calls
export const login = async (credentials) => {
  try {
    const response = await API.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (userData) => {
  try {
    const response = await API.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getFollowedChannels = async (userId) => {
  try {
    const response = await API.get(`/users/followed-channels/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const followChannel = async (channelId) => {
  try {
    const response = await API.post("/channels/follow", { channelId });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const unfollowChannel = async (channelId) => {
  try {
    const response = await API.post("/channels/unfollow", { channelId });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createStream = async (streamData) => {
  try {
    const response = await API.post("/streams", streamData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getCategories = async () => {
  try {
    const response = await API.get("/categories");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
