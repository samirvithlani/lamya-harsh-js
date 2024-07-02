//console.log("app starts");
const promise = new Promise((reslove, reject) => {
  setTimeout(() => {
    //reslove("promise is resolved | js done");
    reject("promise is rejected | js not done");
  }, 2000);
});
//resolve : -->then
//reject : -->catch
console.log(promise);

promise.then((data) => {
  console.log(data);
});
promise.catch((err) => {
  console.log(err);
});

//console.log("app ends");
