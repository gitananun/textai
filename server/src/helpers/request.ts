export const logFailure = (error: any) => {
  if (error.response) console.error("🚫 -> ", error.response.data);
  else console.log("🚫 -> ", error);

  return error;
};
