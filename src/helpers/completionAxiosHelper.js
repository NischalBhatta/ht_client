import axios from "axios";

const apiEP = "http://localhost:8000/api/v1/completions";

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

export const postCompletion = async (data) => {
  const obj = {
    method: "post",
    data,
  };

  return apiProcessor(obj);
};

export const fetchAllCompletions = async () => {
  const obj = {
    method: "get",
  };

  return apiProcessor(obj);
};

export const deleteCompletion = async (data) => {
  const obj = {
    method: "delete",
    data,
  };

  return apiProcessor(obj);
};
