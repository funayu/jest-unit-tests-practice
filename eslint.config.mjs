import globals from 'globals';
import pluginJs from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import prettierConfig from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  // Jest用の設定を追加
  {
    files: ['tests/**/*'], // テストファイルのパス
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: jestPlugin.environments.globals.globals, // Jestのグローバル変数を指定
    },
    rules: {
      ...jestPlugin.configs.recommended.rules, // 推奨ルールを適用
    },
  },
  // Prettierとの競合を防ぐ設定
  prettierConfig,
];
