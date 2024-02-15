# mindmap util - Markdown を Mindmap に変換

mindmap util は Markdown を Mindmap に変換するための Web サービスです。  
サーバーを持たずにマインドマップを共有できるため、無料で利用できます。  
すべての情報は URL に閉じ込められ、特別な設定やインストールなしで共有が可能です。  
ただし、Markdown の内容が長過ぎる場合は、うまく動作しない可能性があります。

## 特徴

- **簡単な操作**: Markdown 形式で書かれたテキストを入力するだけで、自動的にマインドマップが生成されます。
- **カスタマイズ可能**: [markmap](https://markmap.js.org/) の FrontMatter オプションを使用して、見た目や挙動をカスタマイズできます。

## オプション

入力する Markdown は[markmap](https://markmap.js.org/)の Front Matter に対応しています。

- **default**: `true`に設定すると、Home ボタンを押したときにデフォルト値としてマインドマップの情報がテキストに入力された状態でホームに戻ることができます。
- **initialExpandLevel**: マインドマップはデフォルトで閉じられています。`initialExpandLevel`を設定することでマインドマップを開いた状態で共有することができます。例えば、`markmap.initialExpandLevel: 2`を設定すると、2 レベルまでのノードが展開された状態で表示されます。

### 例

```markdown
---
default: true
markmap:
  initialExpandLevel: 100
---

# マインドマップのタイトル

...
```

## 開発環境

1. 依存関係をインストールします:
   ```
   yarn install
   ```
2. 開発サーバーを起動します:
   ```
   yarn dev
   ```
3. ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスします。

## 技術スタック

- フレームワーク: [Next.js](https://nextjs.org/)
- UI ライブラリ: [@mantine/core](https://mantine.dev/), [@mantine/hooks](https://mantine.dev/hooks/)
- マインドマップ生成: [markmap-lib](https://github.com/gera2ld/markmap-lib), [markmap-view](https://github.com/gera2ld/markmap-view)

## 貢献

このプロジェクトに貢献したい場合は、GitHub で PullRequest を送信してください。また、バグや提案がある場合は、Issue を作成してください。

## ライセンス

このプロジェクトは[MIT ライセンス](LICENSE)の下で公開されています。
