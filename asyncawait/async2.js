var users = [
  {
    id: 1,
    name: "amit patel",
  },
  {
    id: 2,
    name: "sumit patel",
  },
  {
    id: 3,
    name: "jay patel",
  },
  {
    id: 4,
    name: "vijay shah",
  },
  {
    id: 5,
    name: "raj thakkar",
  },
  {
    id: 6,
    name: "rajesh mehta",
  },
];

const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 3000);
  });
};

const findUser = async (name) => {
  console.log("fatching all users...");
  const allUsers = await fetchUsers();
  console.log("all users fetched...");
  const singleUser = allUsers.find((u) => u.name === name);

  if (singleUser) {
    console.log("User found");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(singleUser);
      }, 1000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("User not found");
      }, 1000);
    });
  }
};

const printUser = async () => {
  console.log("finding user...");
  const user = await findUser("jaya patel");
  console.log(user);
  console.log("end......");
};

printUser();
