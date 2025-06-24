#!/usr/bin/env sh

# エラー時は停止
set -e

# ビルド
npm run build

# distディレクトリに移動
cd dist

# GitHub Pagesのための.nojekyllファイルを作成
echo > .nojekyll

# gitの初期化とコミット
git init
git checkout -B main
git add -A
git commit -m 'deploy'

# GitHubリポジトリにプッシュ
# 以下のURLを自分のリポジトリに変更してください
git push -f git@github.com:YOUR_USERNAME/wd109-brain-viz.git main:gh-pages

cd -