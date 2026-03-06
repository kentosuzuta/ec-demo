# EC Demo

Next.js + TypeScript + MUI + Supabase で実装した EC サイトのデモです。  
商品一覧からカート投入、配送先入力、支払い方法選択、注文確定、完了画面までの購入フローを実装しています。

## 公開URL

- Production: `https://<your-vercel-domain>.vercel.app`

## 主な機能

- 商品一覧表示（カテゴリ/検索）
- 商品詳細表示（カラー・サイズ・数量選択）
- お気に入り追加/削除
- カート追加/削除/数量変更
- ヘッダー通知バッジ（お気に入り・カート）
- 共通 Snackbar 通知（カート追加時）
- チェックアウト 3 ステップ
- 配送先フォームバリデーション
- 支払い方法フォームバリデーション
- 注文確認画面
- 注文確定 API（`/api/orders`）で `orders` / `order_items` に保存
- 成功画面に注文番号表示

## 技術スタック

- Next.js 16 (App Router)
- React 19
- TypeScript
- MUI
- Supabase (PostgreSQL)
- ESLint

## ディレクトリ構成

```txt
src/
  app/                       # ルーティング・ページ・API Route
    api/orders/route.ts      # 注文確定 API
  features/
    product/                 # 商品一覧/詳細
    favorites/               # お気に入り
    cart/                    # カート
    checkout/                # 配送先/支払い/注文確認
    success/                 # 注文完了画面
    layout/                  # Header, Footer, providers
    common/                  # 共通 UI / hooks / constants
  lib/                       # API クライアント, 整形ユーティリティ
```

## セットアップ

1. 依存パッケージをインストール

```bash
npm install
```

2. 環境変数を設定（`.env.local`）

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

3. 開発サーバー起動

```bash
npm run dev
```

4. ブラウザで確認

```txt
http://localhost:3000
```

## Supabase 側で必要なテーブル

- `products`
- `orders`
- `order_items`

`/api/orders` はサーバー側で `SUPABASE_SERVICE_ROLE_KEY` を使用して insert します。  
`service_role` キーはクライアントへ公開しないでください（`NEXT_PUBLIC_` を付けない）。

## デプロイ（Vercel）

1. GitHub リポジトリを Vercel に接続
2. Vercel の Project Settings > Environment Variables に以下を設定

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

3. Deploy 実行
4. デプロイ完了後、上記「公開URL」を実URLに更新

## 実行コマンド

- 開発: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Start: `npm run start`

## ポートフォリオ観点のポイント

- 機能ごとの `features` 分割で責務を明確化
- 表示コンポーネントと状態管理 hooks の分離
- 再利用可能な共通部品（`CommonSnackbar` など）を整備
- フロントから直接 DB を更新せず API Route 経由で注文登録
