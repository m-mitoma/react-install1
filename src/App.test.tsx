// src/App.test.tsx
// import React from "react"; // この行を削除またはコメントアウト
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test('renders "Hello, World!" and "Hello, TypeScript!"', () => {
    render(<App />);

    // "Hello, World!" が表示されていることを確認
    const helloWorldElement = screen.getByText(/Hello, World!/i);
    expect(helloWorldElement).toBeInTheDocument();

    // "Hello, TypeScript!" が表示されていることを確認
    const helloTypeScriptElement = screen.getByText(/Hello, TypeScript!/i);
    expect(helloTypeScriptElement).toBeInTheDocument();

    // 両方のH1タグが存在することを確認 (オプション)
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(2); // 2つのH1タグがあることを期待
  });
});
