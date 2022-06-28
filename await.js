function calculateSum(n1, n2) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Invalid");
    }, 3000);
  });
  return promise;
}

async function getSum() {
  try {
    const result = await calculateSum(100, 200);
    console.log(result);
  } catch (e) {
    console.log("Error");
    console.log(e);
  }
  console.log("Hello World");
}

getSum();
