import { toast } from "react-hot-toast";

interface IToast {
  message?: string;
  type?: "required" | "invalid";
}

export const showSuccessToast = (message: string) => toast.success(message);

export const showErrorToast = (args: IToast) => {
  let message = args.message;

  switch (args.type) {
    case "required":
      message = "Fields are required";
      break;
    case "invalid":
      message = "Invalid credentials";
      break;
    default:
      break;
  }

  toast.error(message ?? "Something went wrong");
};
