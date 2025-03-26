import axios from "axios";

export const fetchUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3000/api/v1/mypost", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log("Error occurred while fetching the post");
  }
};
