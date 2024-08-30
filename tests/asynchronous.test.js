// Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // 非同期処理をシミュレート
    setTimeout(() => {
      resolve('peanut butter');
    }, 1000);
  });
}
test('the data is peanut butter', () => {
  return fetchData().then((data) => {
    expect(data).toBe('peanut butter');
  });
});
// Async/Await
test('the data is peanut butter2', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});
test('the data is peanut butter3', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

function fetchData2() {
  return new Promise((resolve, reject) => {
    // 非同期処理をシミュレート
    setTimeout(() => {
      reject('error');
    }, 1000);
  });
}
test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData2();
  } catch (error) {
    expect(error).toMatch('error');
  }
});
test('the fetch fails with an error2', async () => {
  await expect(fetchData2()).rejects.toMatch('error');
});
test('the fetch fails with an error3', () => {
  expect.assertions(1);
  return fetchData2().catch((error) => expect(error).toMatch('error'));
});
