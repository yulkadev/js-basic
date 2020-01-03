
//3. Catch errors but only for failed executions.
//4. Call `fakeAjax` do 3 request in serial.
//5. Using your `delay` function from first task add delay between each serial request.

//1. Make function which will return promise which will resolve in passed to function amount of milliseconds.

async function resolveWithSetTimeout(ms) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), ms);
  });

  const result = await promise;

  console.log(result);
}

resolveWithSetTimeout(3000);

//2. Using `fakeAjax` do 3 parallel requests.

const fakeAjax = async () => {
  if (Math.random() > 0.5) {
    return { status: 200 };
  }
  throw new Error('Server error!');
};

async function parallel() {
  console.log('PARALLEL with await Promise.all');
  await Promise.all([
      (async()=>console.log(await fakeAjax()))(),
      (async()=>console.log(await fakeAjax()))(),
      (async()=>console.log(await fakeAjax()))()
  ]);
}

parallel();