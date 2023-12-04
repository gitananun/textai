import { ImageType } from "../db/images";
import { logFailure } from "../helpers/request";

export const storeImageLocally = async (image: ImageType) => {
  const { prompt, width, height, numOutputs, src } = image;

  try {
    const fs = require("fs");
    const path = require("path");
    const axios = require("axios");
    const slugify = require("slugify");

    const promptSlug = slugify(prompt, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g });
    const directory = path.join(__dirname, "../..", "public/images", promptSlug);

    if (!fs.existsSync(directory)) fs.mkdirSync(directory, { recursive: true });

    const numberOfFiles = fs.readdirSync(directory).length;

    const response = await axios.get(src, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "base64");

    const filename = `${width}x${height}-${numberOfFiles}.png`;
    const filepath = path.join(directory, filename);

    fs.writeFileSync(filepath, buffer);

    const staticPath = path.join("images", promptSlug, filename);

    return { ...image, src: staticPath };
  } catch (error) {
    logFailure(error);
  }
};
