# ものづくりアベンジャーズ - Landing Page

**一般社団法人 ものづくりアベンジャーズ** の公式ランディングページ（資料ベースの再構築版）。

愛知県豊田市発、地域の中小製造事業者のトランスフォーメーションを促進する共創コミュニティの世界観を、ヒーロー風のビジュアルデザインで表現したウェブサイトです。

## 🌐 公開URL（GitHub Pages）

**👉 [https://amane7.github.io/ave_2026/](https://amane7.github.io/ave_2026/)**

> 初回デプロイ後、GitHub Actions が自動でビルド・公開します（約1〜2分）。

---

## 🎨 デザインコンセプト

- **テーマ**: ヒーロー・アベンジャーズの世界観 × 日本の製造業の重厚感
- **カラーパレット**:
  - ディープネイビー `#0a0e1a` — 信頼・製造業の土台
  - ヒーローレッド `#e63946` — 情熱・行動
  - ゴールド `#f4c430` — 熟練技術・価値
- **タイポグラフィ**: Noto Sans JP（本文）+ Bebas Neue（見出し）
- **動き**: スクロール連動リビール、スタッツカウンター、マウス追従グロー

---

## 📁 プロジェクト構成

```
webapp/
├── index.html            # メインHTML（全セクション）
├── assets/
│   ├── css/style.css     # スタイルシート
│   ├── js/main.js        # インタラクション
│   └── images/           # 画像アセット
└── README.md             # 本ファイル
```

---

## 🗂 ページ構成（セクション）

| # | セクション | 内容 |
|---|-----------|------|
| 1 | **Hero** | キャッチコピー・CTA・「誰もがスーパーヒーローに」 |
| 2 | **Mission** | 3つのミッションカード |
| 3 | **Problem** | 課題構造フロー + Before/After比較 |
| 4 | **About** | アベンジャーズとは（引用+4ステップ立ち位置） |
| 5 | **Activities** | 3つの活動の柱 + "かけこみ寺"ロール |
| 6 | **Cases** | 企業間プロジェクト事例3社 |
| 7 | **Action Plan** | 4ステップタイムライン + 3つのゴール |
| 8 | **Stats** | 数値で見るプロジェクト |
| 9 | **Join** | 4つの参加チャネル |
| 10 | **Footer** | サイトマップ・連絡先 |

---

## 🚀 デプロイ方法（GitHub Pages）

本リポジトリは静的サイトです。GitHub Pages に**ワークフロー不要で**デプロイできます。

### 初回セットアップ（リポジトリ管理者の1回限りの作業）

1. GitHub リポジトリの **Settings → Pages** を開く
   👉 [https://github.com/amane7/ave_2026/settings/pages](https://github.com/amane7/ave_2026/settings/pages)
2. **Source** で `Deploy from a branch` を選択
3. **Branch** で `main` / `/ (root)` を選択し **Save** をクリック
4. 数十秒〜数分後、以下のURLで公開されます：
   👉 **https://amane7.github.io/ave_2026/**

### 以降の更新
- main ブランチに push するだけで自動的に再デプロイされます（GitHub Pages標準動作）

---

## 💻 ローカルでの起動方法

依存関係はなし（Vanilla HTML/CSS/JS）。任意のHTTPサーバーで配信できます。

```bash
# Python 3 の場合
cd /home/user/webapp
python3 -m http.server 8000

# Node.js の場合
npx serve -p 8000
```

ブラウザで `http://localhost:8000` を開いてください。

---

## 📱 レスポンシブ対応

- **Desktop**: ~1180px 中央寄せ
- **Tablet** (~960px): 2カラムレイアウト
- **Mobile** (~720px): 1カラム + ハンバーガーメニュー

---

## 🔗 公式リンク

- Webサイト: [https://monozukuri-avengers.com/](https://monozukuri-avengers.com/)
- Instagram: [@monozukuri.avengers](https://instagram.com/monozukuri.avengers)
- Facebook: SENTANコミュニティ
- LINE: オープンチャットグループ

---

## 📝 クレジット

- フォント: [Google Fonts](https://fonts.google.com/) (Noto Sans JP / Bebas Neue / Oswald)
- アイコン: [Font Awesome 6](https://fontawesome.com/)
- 内容: 「一般社団法人ものづくりアベンジャーズ概要」資料（2025年版）より

© 2025 一般社団法人 ものづくりアベンジャーズ
