async function handleProfileSignup() {
  try {
    const { uploadPhoto, createUser } = await import("./utils.js");

    const [body, firstName, lastName] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    console.log(` ${body} ${firstName} ${lastName} `);
  } catch (error) {
    console.log("Signup system offline");
  }
}

handleProfileSignup();
