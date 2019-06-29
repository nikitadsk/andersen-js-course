const getUsers = url => fetch(url);

async function task8(url) {
  try {
    const response = await getUsers(url);
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

export default task8;
