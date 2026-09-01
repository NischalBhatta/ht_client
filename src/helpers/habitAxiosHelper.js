import axios from "axios";

const apiEP = "http://localhost:8000/api/v1/habits";

const apiProcessor = async ({ method, data }) => {
  try {
    const response = await axios({
      method,
      url: apiEP,
      data,
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postHabit = async (data) => {
  const obj = {
    method: "post",
    data,
  };

  return apiProcessor(obj);
};

export const fetchAllHabits = async () => {
  const obj = {
    method: "get",
  };

  return apiProcessor(obj);
};

export const updateHabit = async (data) => {
  const obj = {
    method: "patch",
    data,
  };

  return apiProcessor(obj);
};

export const deleteHabit = async (data) => {
  const obj = {
    method: "delete",
    data,
  };

  return apiProcessor(obj);
};
