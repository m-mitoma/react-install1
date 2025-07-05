// jest.config.js
module.exports = {
  // Jest 28以降では 'jest-environment-jsdom' のインストールが必要です
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  // ★ここから修正・追加★
  // ts-jest の設定を 'globals' から 'transform' へ移行
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        // ts-jest が使用する tsconfig ファイルを指定
        // これにより、tsconfig.app.json の設定が Jest の TypeScript コンパイルに適用されます。
        tsconfig: "<rootDir>/tsconfig.app.json",
      },
    ],
  },
  // 'globals' オプションは削除するか、空にしてください
  // globals: {},

  // モジュールの解決方法を指定。ESMのテストで重要。
  // '.js' を含めることで、TypeScriptがCommonJSにコンパイルした後も解決できるようにします。
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // JestがESMを扱うための実験的なフラグ (必要に応じて)
  // package.json に "type": "module" がある場合や、ESMを強制する場合に検討
  // experimentalJestAsyncMocks: true,
  // ★ここまで修正・追加★
};
