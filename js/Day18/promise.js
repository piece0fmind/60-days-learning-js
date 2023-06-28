const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

console.log(fetchPromise);

fetchPromise
.then((response) => {
    if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.json();
})

.then((data) =>{
        console.log(data[0].name);
    });
    
// console.log(`Response: ${response.status}`);


console.log("Started request...");