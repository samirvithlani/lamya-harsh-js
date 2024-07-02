// const fetchingUserFromMars = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: "Elon Musk",
//         age: 49,
//         job: "CEO of SpaceX",
//       });
//     }, 2000);
//   });
// };

// const x = fetchingUserFromMars();
// console.log(x);
// x.then((data) => {
//   console.log(data);
// });
// x.catch((err) => {
//   console.log(err);
// });

const fetchingUserFromMars = (user) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: user.name,
          age: user.age,
          job: "CEO of SpaceX",
        });
      }, 2000);
    });
  };
  
  const x = fetchingUserFromMars({name:"amitabh", age: 78});
  console.log(x);
  x.then((data) => {
    console.log(data);
  });
  x.catch((err) => {
    console.log(err);
  });
  
  