import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "くまでのプライバシーポリシー。個人情報の取り扱いについてご説明します。",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-44 md:pb-16 bg-surface-tint border-b border-border overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-mono text-accent/50 tracking-[0.3em] uppercase">
            &lt; Privacy /&gt;
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-display font-black text-ink uppercase tracking-tight">
            Privacy Policy
          </h1>
          <div className="mt-6 w-16 h-px bg-gradient-to-r from-accent to-transparent" />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-10 text-muted leading-relaxed text-sm">
            <div>
              <h2 className="text-lg font-bold text-ink mb-3">
                1. 個人情報の取得
              </h2>
              <p>
                株式会社くまで（以下「当社」）は、お問い合わせフォームを通じて、
                お名前、メールアドレス、電話番号、会社名などの個人情報をご提供いただく場合があります。
                これらの情報は、お客さまのご同意のもと、適法かつ公正な手段により取得いたします。
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-ink mb-3">
                2. 個人情報の利用目的
              </h2>
              <p>取得した個人情報は、以下の目的に利用いたします。</p>
              <ul className="list-none pl-0 mt-3 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-accent/40 font-mono text-xs mt-0.5">&gt;</span>
                  お問い合わせへの回答・ご連絡
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent/40 font-mono text-xs mt-0.5">&gt;</span>
                  サービスのご案内・ご提案
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent/40 font-mono text-xs mt-0.5">&gt;</span>
                  サービス品質の向上のための分析
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-ink mb-3">
                3. 個人情報の第三者提供
              </h2>
              <p>
                当社は、法令に基づく場合を除き、お客さまの同意なく個人情報を第三者に提供することはありません。
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-ink mb-3">
                4. 個人情報の管理
              </h2>
              <p>
                当社は、個人情報の漏えい、滅失またはき損の防止その他の安全管理のために必要かつ適切な措置を講じます。
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-ink mb-3">
                5. アクセス解析ツールについて
              </h2>
              <p>
                当サイトでは、Googleによるアクセス解析ツール「Google
                Analytics」を利用しています。 Google
                Analyticsはトラフィックデータの収集のためにCookieを使用しています。
                このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              </p>
              <p className="mt-3">
                この機能はCookieを無効にすることで収集を拒否できますので、
                お使いのブラウザの設定をご確認ください。
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-ink mb-3">
                6. お問い合わせ
              </h2>
              <p>
                個人情報の取り扱いに関するお問い合わせは、
                当サイトのお問い合わせフォームよりご連絡ください。
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-xs text-muted font-mono">
                // 制定日：2026-06-18
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
