/**
 * ===== Question 4 [6 points] =====
 * Look at the code below and write code so that an appropriate message
 * is shown in an alert when all promises from the array allMyPromises
 * settles (i.e. the promises are resolved or reprojected).
 * To do this, use the variable promiseAll which contains the result of
 * Promise.all(allMyPromises)
 *
 * In the case that all promises are resolved, the resolve values of the promises must be shown.
 * the promises will be shown, if there is a promise reject then
 * the error (reject value) must be shown.
 * Tip: use the string method join to glue all resolve values together with a double
 * to each other with a double dash in between like in the example output.
 **/

const retrieveData = (resolve, reject) => {
  const random = Math.random();
  if (random < 0.3) resolve('one');
  else if (random < 0.6) resolve('two');
  else if (random < 0.95) resolve('three');
  else reject(new Error('No data'));
};

const givePromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      retrieveData(resolve, reject);
    }, 1000 + Math.floor(Math.random() * 2000));
  });

const allMyPromises = [];

const randomNumberOfPromises = 2 + Math.floor(Math.random() * 10);
for (let index = 0; index < randomNumberOfPromises; index++) {
  allMyPromises.push(givePromise());
}

const promiseAll = Promise.all(allMyPromises).then(data => {
  alert(data.join())
}).catch(e => {
  alert(e.message)
})

/* Solution */

/****** Sample output ******/
// A few seconds after the script loads, an alert appears with either
// "Error: No data", or,
// "Received one -- two -- one -- three -- one -- two."
// Note: the number of occurrences of one, two and three and their order
// may vary with each refresh of the page
