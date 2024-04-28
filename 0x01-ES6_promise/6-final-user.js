import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";
export function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPro = signUpUser(firstName, lastName);
  const uploadpro = uploadPhoto(fileName);

  return Promise.allSettled([signUpPro, uploadpro]).then((data) => {
    return data.map((datum) => ({
      status: datum.status,
      value: datum.status === "fulfilled" ? datum.value : datum.reason,
    }));
  });
}
