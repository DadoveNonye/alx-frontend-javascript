import { uploadPhoto, createUser } from "./utils.js";

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.allSettled([
      photoPromise,
      userPromise,
    ]);

    const photo =
      photoResponse.status === "fulfilled" ? photoResponse.value : null;
    const user =
      userResponse.status === "fulfilled" ? userResponse.value : null;

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
asyncUploadUser();
