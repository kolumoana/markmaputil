# mindmap util - MarkdownをMindmapに変換

mindmap utilはMarkdownをMindmapに変換するためのWebサービスです。  
サーバーを持たずにマインドマップを共有できるため、無料で利用できます。  
すべての情報はURLに閉じ込められ、特別な設定やインストールなしで共有が可能です。  
ただし、Markdownの内容が長過ぎる場合は、うまく動作しない可能性があります。  

## 特徴

- **簡単な操作**: Markdown形式で書かれたテキストを入力するだけで、自動的にマインドマップが生成されます。
- **カスタマイズ可能**: [markmap](https://markmap.js.org/) のFrontMatterオプションを使用して、見た目や挙動をカスタマイズできます。

## オプション

入力するMarkdownは[markmap](https://markmap.js.org/)のFront Matterに対応しています。

- **default**: `true`に設定すると、Homeボタンを押したときにデフォルト値としてマインドマップの情報がテキストに入力された状態でホームに戻ることができます。
- **initialExpandLevel**: マインドマップはデフォルトで閉じられています。`initialExpandLevel`を設定することでマインドマップを開いた状態で共有することができます。例えば、`markmap.initialExpandLevel: 2`を設定すると、2レベルまでのノードが展開された状態で表示されます。

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
- UIライブラリ: [@mantine/core](https://mantine.dev/), [@mantine/hooks](https://mantine.dev/hooks/)
- マインドマップ生成: [markmap-lib](https://github.com/gera2ld/markmap-lib), [markmap-view](https://github.com/gera2ld/markmap-view)

## 貢献

このプロジェクトに貢献したい場合は、GitHubでPullRequestを送信してください。また、バグや提案がある場合は、Issueを作成してください。

## ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下で公開されています。