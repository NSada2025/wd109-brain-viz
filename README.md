# WD109: Layered 3D Brain Map

インタラクティブな3D脳可視化システム - ドーパミン神経系の統合的表現

🧠 **ライブデモ**: https://nsada2025.github.io/wd109-brain-viz/

## 概要

脳のドーパミン神経系を3次元空間で可視化し、電気的活動と化学的活動を統合的に表現するインタラクティブなWebアプリケーションです。

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# GitHub Pagesへデプロイ
npm run deploy
```

## 主な機能

### 🎨 3D脳モデル
- 透明度調整可能な脳構造表示
- リアルタイムアニメーション
- 360度回転・ズーム対応

### 🔴 ドーパミン経路
- **VTA → NAcc**: 報酬系（赤）
- **VTA → PFC**: 認知系（青緑）
- **SNc → Striatum**: 運動系（青）
- 接続強度による線の太さ変化
- パルスアニメーション

### ⚡ 電気活動
- δ波（1-4Hz）
- θ波（4-8Hz）
- α波（8-13Hz）
- β波（13-30Hz）
- γ波（30-80Hz）
- リアルタイム波形表示

## 操作方法

### マウス操作
- 左ドラッグ: 回転
- 右ドラッグ: パン
- スクロール: ズーム

### キーボード
- Space: 再生/一時停止
- B: 脳モデル表示切替
- D: ドーパミン経路表示切替
- E: 電気活動表示切替

## 技術スタック

- React + TypeScript
- Three.js (react-three-fiber)
- Zustand (状態管理)
- Leva (UIコントロール)
- Vite (ビルドツール)
- GitHub Pages (ホスティング)

## 開発状況

詳細な開発状況は [DEVELOPMENT_STATUS.md](./DEVELOPMENT_STATUS.md) を参照してください。

## 関連プロジェクト

- **WD110**: サンキーダイアグラム風接続マップ
- **WD111**: 時空間ヒートマップ

## ライセンス

MIT License

## 作者

NSada2025