// ! Ejercicio Async Await

const users = [
  {
    id: 1,
    name: "Manuel",
  },
  {
    id: 2,
    name: "Lourdes",
  },
  {
    id: 3,
    name: "Kenai",
  },
];

const emails = [
  {
    id: 1,
    email: "manuel@gmail.com",
  },
  {
    id: 2,
    email: "lourdes@gmail.com",
  },
];

const getUser = async (id) => {
  const user = users.find((user) => user.id == id);

  // throw se controla con un try -> catch
  if (!user) throw new Error(`User id: ${id} is not exist.`);
  else return user;
};

const getEmail = async (user) => {
  const email = emails.find((email) => email.id == user.id);

  if (!email) throw new Error(`Username: ${user.name} hasn't got an Email.`);
  else
    return {
      id: user.id,
      name: user.name,
      email: email.email,
    };
};

const getInfo = async (id) => {
  try {
    const user = await getUser(id);
    const res = await getEmail(user);
    return `${user.name} email is ${res.email}`;
  } catch (error) {
    console.log(error);
  }
};

getInfo(3).then((res) => console.log(res));
