// 厳密に等価であることをテスト(toBe)
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// オブジェクトの値をテスト（toEqual)
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// 〜ではないことをテスト(not)
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// undefined,null,falseの区別
test('null', () => {
  const n = null;
  expect(n).toBeNull(); // nullに一致するか
  expect(n).toBeDefined(); // undefined以外であるか
  expect(n).not.toBeUndefined(); // undefinedに一致するか の否定
  expect(n).not.toBeTruthy(); // 真であるか の否定
  expect(n).toBeFalsy(); // 偽であるか
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull(); // nullに一致する の否定
  expect(z).toBeDefined(); // undefined以外であるか
  expect(z).not.toBeUndefined(); // undefinedに一致するか の否定
  expect(z).not.toBeTruthy(); // 真であるか の否定
  expect(z).toBeFalsy(); // 偽であるか
});
