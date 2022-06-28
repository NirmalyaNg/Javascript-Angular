function add(num1, num2) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(num1 + num2);
    }, 3000);
  });

  return promise;
}

const result = add(10, 20);
result
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error ", err);
  });

async function add1(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    throw new Error("Invalid parameters");
  }
}

const result1 = add1(100, "200");
result1
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Err", err.message);
  });
