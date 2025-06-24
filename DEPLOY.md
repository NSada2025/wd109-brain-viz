# GitHub Pagesへのデプロイ手順

## 1. GitHubでリポジトリを作成

1. GitHub.comにログイン
2. 右上の「+」→「New repository」
3. Repository name: `wd109-brain-viz`
4. Public を選択
5. 「Create repository」をクリック

## 2. ローカルでGitを初期化

```bash
cd WD109
git init
git add .
git commit -m "Initial commit: 3D Brain Visualization"
```

## 3. GitHubリポジトリと接続

```bash
# YOUR_USERNAMEを自分のGitHubユーザー名に置き換えてください
git remote add origin https://github.com/YOUR_USERNAME/wd109-brain-viz.git
git branch -M main
git push -u origin main
```

## 4. GitHub Pagesにデプロイ

```bash
npm run deploy
```

## 5. GitHub Pagesを有効化

1. GitHubリポジトリのページを開く
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: gh-pages / root を選択
5. Save

## 6. アクセス

数分後、以下のURLでアクセス可能になります：
`https://YOUR_USERNAME.github.io/wd109-brain-viz/`

## トラブルシューティング

- 404エラー: vite.config.tsの`base`がリポジトリ名と一致しているか確認
- ビルドエラー: `npm run build`を単独で実行してエラーを確認
- デプロイ失敗: GitHubのPersonal Access Tokenが必要な場合があります