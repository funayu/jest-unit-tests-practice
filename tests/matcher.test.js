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

// 数値
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // 数値に対してはtoBeとtoEqualは同じ動作をする（オブジェクトや配列を比較する場合はtoEqualを使用する）
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
// 浮動小数点の値が一致するかの確認
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); 丸め誤差が原因で期待結果にならない
  expect(value).toBeCloseTo(0.3);
});

// 文字列
test('there is not I in team', () => {
  expect('team').not.toMatch(/I/); // 文字列が正規表現と一致することを確認 の否定
});
test("but there is a 'stop' in Christoph", () => {
  expect('Christoph').toMatch(/stop/);
});

// 配列
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];
test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk'); //配列を元にSetオブジェクトを作成してテスト
});
