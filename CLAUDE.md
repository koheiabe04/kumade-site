@AGENTS.md

# くまで ブランドサイト — 開発ルール

## デザインテーマ: Cyberpunk
- ダークベースのサイバーパンク風デザイン
- ネオングロー、グリッチエフェクト、スキャンライン
- シャープなジオメトリ（角丸なし）
- モノスペースフォントをアクセントに使用

## カラーパレット
- Brand（ネオンレッド）: `#ff2d46` → `brand`
- Brand Dark: `#cc1a33` → `brand-dark`
- Accent（ネオンシアン）: `#00f0ff` → `accent`
- Accent Alt（マゼンタ）: `#ff2d78` → `accent-alt`
- Neon Yellow: `#f9b923` → `neon-yellow`
- Ink（テキスト）: `#e0e0e8` → `ink`
- Muted: `#5a5a6e` → `muted`
- Surface（背景）: `#0a0a0f` → `surface`
- Surface Tint: `#0d0d15` → `surface-tint`
- Surface Card: `#12121c` → `surface-card`
- Border: `#1a1a2e` → `border`

## フォント
- 和文: Noto Sans JP（見出しBold / 本文Regular）
- 欧文ディスプレイ: Orbitron（セクション見出し・ロゴテキスト）
- 欧文本文: Inter
- Tailwind: `font-sans`（Noto Sans JP + Inter）, `font-display`（Orbitron）, `font-mono`

## エフェクトクラス
- `cyber-grid` / `cyber-grid-dense` — グリッド背景
- `scan-lines` — スキャンライン（position: relativeの親要素に適用）
- `neon-text-cyan` / `neon-text-magenta` / `neon-text-red` — テキストグロー
- `neon-box-cyan` / `neon-box-magenta` — ボックスグロー
- `glitch` + `data-text` — グリッチテキスト（GlitchTextコンポーネント）

## 技術スタック
- Next.js (App Router) + Tailwind CSS v4
- TypeScript strict
- アイコン: lucide-react
- フォーム: Formspree
- ホスティング: Vercel

## コーディング規約
- コンポーネントは `src/components/` に配置
- ページは `src/app/` の App Router 規約に従う
- 実績データは `src/content/works/` に配置
- CSS は Tailwind ユーティリティクラス優先
- 画像は next/image を使用
- リンクは next/link を使用
