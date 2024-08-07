const getUserLocation = () => {
  //navigator -->  postion
  //navigator.geolocation.getCurrentPosition(postion)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((postion) => {
      console.log(postion);
      console.log(postion.coords.latitude);
      console.log(postion.coords.longitude);
    });
  } else {
    alert("geolocation not supported");
  }
};

getUserLocation();
