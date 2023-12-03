export const logFailedRequest = (error: any) => {
  console.error("🚫 -> ", error.response.data);
  return error;
};
