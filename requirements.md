# WD109: レイヤード3Dブレインマップ要件定義

## プロジェクト概要
脳のドーパミン神経系を3次元空間で可視化し、電気的活動と化学的活動を統合的に表現するインタラクティブな3Dビジュアライゼーションシステム

## 機能要件

### 1. 3D脳モデル表示
- MNI標準脳テンプレート使用
- 透明度調整可能（0-100%）
- 360度回転・ズーム機能
- 断面表示機能（冠状面・矢状面・水平面）

### 2. ドーパミン経路可視化
- 主要投射経路
  - VTA → NAcc（腹側被蓋野→側坐核）
  - VTA → PFC（腹側被蓋野→前頭前野）
  - SNc → Striatum（黒質緻密部→線条体）
- 経路の太さ：接続強度に比例
- 色彩：ドーパミン濃度に対応（赤＝高、青＝低）

### 3. 電気活動レイヤー
- LFP/EEG波形アニメーション
- 周波数帯域別表示
  - δ波（1-4Hz）
  - θ波（4-8Hz）
  - α波（8-13Hz）
  - β波（13-30Hz）
  - γ波（30-80Hz）
- 波形の伝播をアニメーション表示

### 4. 化学活動レイヤー
- ドーパミン放出のパーティクル表現
- 時間経過による拡散シミュレーション
- 受容体密度ヒートマップ

## 技術仕様

### 開発環境
- フロントエンド：React + TypeScript
- 3Dエンジン：Three.js
- データ可視化：D3.js
- 状態管理：Redux

### データフォーマット
- 脳構造：NIfTI形式
- 接続データ：JSON/CSV
- 時系列データ：HDF5

### パフォーマンス要件
- FPS：60fps以上
- 初期読み込み：3秒以内
- メモリ使用量：2GB以下

## UI/UX要件
- レスポンシブデザイン
- ダークモード対応
- キーボードショートカット
- タッチジェスチャー対応

## 納品物
1. Webアプリケーション
2. APIドキュメント
3. ユーザーマニュアル
4. ソースコード（GitHubリポジトリ）

## 開発スケジュール
- Phase 1（2週間）：基本3D表示機能
- Phase 2（3週間）：データ統合・可視化
- Phase 3（2週間）：インタラクション実装
- Phase 4（1週間）：最適化・テスト