// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // Simulate success or failure
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data.");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
