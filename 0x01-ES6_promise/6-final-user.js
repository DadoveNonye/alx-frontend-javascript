import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";
export function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise((resolve, reject) => {
    const signUpPro = signUpUser(firstName, lastName);
    const uploadpro = uploadPhoto(fileName);

    Promise.allSettled([signUpPro, uploadpro])
      .then((data) => {
        const result = data.map((datum) => ({
          status: datum.status,
          value: datum.status === "fulfilled" ? datum.value : datum.reason,
        }));
        resolve(result);
      })
      .catch(reject);
  });
}
