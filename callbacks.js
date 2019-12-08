// first group of statements (fast)
console.log("Hey there!");
// second group of statements (slow)
const processData = (err, responseData) => {
  if (err) {
    console.log("I encountered an error: " + err);
  } else {
    console.log("All is good " + responseData);
  }
};
// (function, delay)
const getData = (requestData, callback) => {
  const getDataHelper = () => {
    try {
      //throw "Connectivity issue";
      const responseData = "data from server";
      callback(null, responseData);
    } catch (error) {
      callback(error, null);
    }
  };
  setTimeout(getDataHelper, 2000);
};
getData("data required for making request", processData);
// third group of statements (fast)
console.log("Adios");
