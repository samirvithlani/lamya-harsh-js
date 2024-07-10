var users = [
  { id: 1, name: "amit patel" },
  { id: 2, name: "sumit patel" },
  { id: 3, name: "jay patel" },
  { id: 4, name: "vijay shah" },
  { id: 5, name: "raj thakkar" },
  { id: 6, name: "rajesh mehta" },
];

const fetchUser = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(users);
      }, 2000);
  });
};

const printUser = async () => {
  
  const main = document.getElementById('abc');
  const loader = document.getElementById('loader');
  loader.innerHTML = 'Loading...';
  const user = await fetchUser();
  loader.innerHTML = '';
  console.log(user);

  for (let i = 0; i < user.length; i++) {
      console.log(user[i].name);
      const ptag = document.createElement('p');
      ptag.innerHTML = user[i].name;
      main.appendChild(ptag);
  }
};

document.addEventListener('DOMContentLoaded', (event) => {
  printUser();  
});
