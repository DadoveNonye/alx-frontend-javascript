export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName
) {
  try {
    const { signUpUser } = await import("./4-user-promise");
    const { uploadPhoto } = await import("./5-photo-reject");
    const signUpPro = signUpUser(firstName, lastName);
    const uploadpro = uploadPhoto(fileName);

    const [signUpProRes, uploadproRes] = await Promise.allSettled([
      signUpPro,
      uploadpro,
    ]);

    const data = [
      {
        status: signUpProRes.status,
        value: signUpProRes.value,
      },
      {
        status: uploadproRes.status,
        value: uploadproRes.value,
      },
    ];
    return data;
  } catch (error) {
    throw new Error();
  }
}
