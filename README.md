# ホスティング：Xserver（Vercel は使わない）

> **このサイトは Vercel ではなく Xserver（sv10860 / サーバーID mons）で公開する。**
> 2026/10/19 に Vercel から移行し、Vercel の有料プランは解約済み。
> GitHub に push しても、サイトは自動では更新されない。

- 状態：公開中 https://le-soleil0615.com/
- 作業ブランチ：`xserver-static`
- 静的書き出し：`next.config.ts` の `output: "export"`（サーバー機能・API Routes・画像最適化は使えない）

## 公開のしかた

```bash
# C:\Users\lesol\AI_Project で実行
bash deploy-xserver.sh soleil le-soleil0615.com
```

書き出し（`next build` → `out/`）と、Xserver の `~/le-soleil0615.com/public_html` へのアップロードを自動で行う。

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
