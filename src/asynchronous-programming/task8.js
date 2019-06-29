const getUsers = url => fetch(url);

async function task8(url) {
  try {
    const response = await getUsers(url);
    const [user] = await response.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

export default task8;
