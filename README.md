---
default: true
markmap:
  initialExpandLevel: 100
---

# mindmap util

[View the README in a mind map](https://mindmaputil.vercel.app/map/H4sIAAAAAAAAA51VXW8aVxB931%2Bxkl9SJDBx3nit3MSSXVVpqz5YkaBl09CuwYUlbd%2B492IHzDq4djDBRrWxCP4gAbtNE8ex8Y8Zdhf%2BRWcuizFgp1IlhOB%2BzJwzc85cr9erhLXHoaRuBFQjntSUhVD854XQYkBR1Ug0YkRC%2BvRvi6FoeFZ7qukB9a7fr3jxkjKhLkSiYTypJo2Ijv8nVLvGOzWmKN6hLRVYU53DqOHYr1EV%2BLo65%2B4Cq1vVrJ3fBlYCngO2A5wBa6jfad%2FjwX9AnIPYAP4B2D4dSXEM3V9fo2%2B%2BbpuM7rEtDAbiT%2BBVEH%2BDyNJvIUAU8Yy1dGKXszLI6iBPijnpir1ZwnUrc%2Bi8OHAPsNYgF%2F5gmL2GoGyxZO2eEJdvH84S9O4mhnzZaZ1TMJ4FblLI7Acr8wrYUefgjdXYAp52ESEJkZHA67gLrEhpXVymlW92xMUQS%2BK0S8dSbFA71rCWl6wGIjK7hfdd9hzww3PW7ltrLYPQ8DCwZckgb%2BUK7YuyTITp0r0UdgpTmMA48JUBUeodAW%2B9pd55PM5xxVp9iffsjVWM4fEEBv2zLvas8zxCtbdPgeWINUIVy8DfuByp3q%2BslaumIos%2FiFqKdZ4dISpnK31rr5jpvNixM2vACjLyoBUeD%2FA6ZeCX7lV%2B1uNE8OZd1T6688QwFhOByUl3wfdTwheL%2Fzj5GRVP%2FSIeixpzIcPQ4qijI6mO9yD2ZYPW2xeXUgVFajiirZFSnO0GNtE2S4gcz4yDGFUNFXMkNlX1ek2uuYE1%2Fxv6FXK1Dx1902xZl2UXK0sPV8o1NBUmSJ4O4gVXj25PDpDfg9iCpoIoSzLE3145lwF3aJ8oYZOegUDah6RakbFSVbklk97cvyubmEOaQMAu%2F15fd5yVd%2FZSjmontqUrUCV1O%2FNRotuQWcxxP3o84yOJWN4CpjmCHwP2TOvadbh0wfHYQazKcOF60PZvmzTdzZwMOeDX93jpE8zaLdxCdMfYlWC%2F%2BzcN36lxQNTJKSzAaxAlOVtaMngDxHNZVzleTgoS2GjtO5UDp3o26jUU8ISKkBQlGJRoSKly5v%2Ffh%2BI2rZDyaB3nYl1RfD4fZZQGQrhO6cxZP7b2hKLc9anB30PxKOZJGCFdDypT%2FZWw9jSo3PNhik0Qh8BrwN8hM3WezIRe0mM%2FhPQnsYQRuOf3%2B3seG1um4YC23gPeBP5RvjfFYUN3%2FtpzzIYiB%2FOGrG4RBIr7FPg%2B3ZIS7x3qWyh9fSrfjxgPkvimIbKvkrr%2BUPslqSUMegy7Kda%2BrPSNnJfjskAacp%2BBFgXDsY7vHT%2BmSZRfsyuZ%2FhAfGv0ziURSU%2BUgK8sZelNMOZ6oUlWiKh%2BmT9Nqzs%2FNfDN65dGd2ZnPp7%2F8epqGU%2Fu0J%2FTX10Q25Kx%2FAXCX6KRlCAAA)

## 概要

- mindmap util は Markdown を Mindmap に変換するための Web サービスです。
- サーバーを持たずにマインドマップを共有できるため、無料で利用できます。
- すべての情報は URL に閉じ込められ、特別な設定やインストールなしで共有が可能です。
- ただし、Markdown の内容が長過ぎる場合は、うまく動作しない可能性があります。

## 特徴

- **簡単な操作**: Markdown 形式で書かれたテキストを入力するだけで、自動的にマインドマップが生成されます。
- **カスタマイズ可能**: [markmap](https://markmap.js.org/) の FrontMatter オプションを使用して、見た目や挙動をカスタマイズできます。

## オプション

- 入力する Markdown は[markmap](https://markmap.js.org/)の Front Matter に対応しています。
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

1. `yarn install`
2. `yarn dev`
3. ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスします。

## 貢献

- このプロジェクトに貢献したい場合は、GitHub で PullRequest を送信してください。
- また、バグや提案がある場合は、Issue を作成してください。

## ライセンス

- このプロジェクトは[MIT ライセンス](LICENSE)の下で公開されています。
