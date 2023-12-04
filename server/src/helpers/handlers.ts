import express from "express";

export const logFailure = (error: any) => {
  if (error.response) console.error("🚫 -> ", error.response.data);
  else console.log("🚫 -> ", error);

  return error;
};

export const handleControllerFailure = (error: any, res: express.Response) => {
  logFailure(error);
  return res.status(500).json({ message: "Internal server error" });
};
