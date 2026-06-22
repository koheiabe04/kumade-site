"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, AlertCircle, Loader2, ArrowRight } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

type FormData = {
  company: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

const categories = [
  "Webサイト制作",
  "ロゴ・名刺デザイン",
  "バナー・広告制作",
  "ブランディング相談",
  "PR・SNS運用",
  "その他",
];

const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [data, setData] = useState<FormData>({
    company: "",
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!data.name.trim()) newErrors.name = "お名前を入力してください";
    if (!data.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "正しいメールアドレスを入力してください";
    }
    if (!data.message.trim()) {
      newErrors.message = "お問い合わせ内容を入力してください";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "10文字以上で入力してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setState("submitting");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: data.company,
          name: data.name,
          email: data.email,
          phone: data.phone,
          category: data.category,
          message: data.message,
          _subject: `【くまで】お問い合わせ: ${data.name}様`,
        }),
      });

      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  function updateField(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  if (state === "success") {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 mx-auto border border-accent/30 flex items-center justify-center mb-6 neon-box-cyan">
          <CheckCircle className="text-accent" size={32} />
        </div>
        <h2 className="text-2xl font-display font-black text-ink mb-3 uppercase tracking-tight">
          Sent
        </h2>
        <p className="text-muted leading-relaxed max-w-md mx-auto text-sm">
          お問い合わせありがとうございます。
          <br />
          内容を確認の上、担当よりご連絡いたします。
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full border bg-surface-card px-4 py-3.5 text-ink text-sm placeholder:text-muted/30 outline-none transition-all font-sans";
  const inputNormal = `${inputBase} border-border focus:border-accent/50 focus:ring-1 focus:ring-accent/10 hover:border-accent/20`;
  const inputError = `${inputBase} border-accent-alt/40 focus:border-accent-alt/60 focus:ring-1 focus:ring-accent-alt/10`;

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="space-y-6">
        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-bold text-ink mb-2"
          >
            会社名
            <span className="text-muted/40 text-xs font-mono font-normal ml-2">
              optional
            </span>
          </label>
          <input
            type="text"
            id="company"
            value={data.company}
            onChange={(e) => updateField("company", e.target.value)}
            className={inputNormal}
            placeholder="株式会社〇〇"
          />
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-ink mb-2"
          >
            お名前
            <span className="text-accent text-xs font-mono font-bold ml-2">
              required
            </span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={data.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={errors.name ? inputError : inputNormal}
            placeholder="山田 太郎"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p
              id="name-error"
              className="mt-1.5 text-xs text-accent-alt flex items-center gap-1 font-mono"
            >
              <AlertCircle size={12} />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-ink mb-2"
          >
            メールアドレス
            <span className="text-accent text-xs font-mono font-bold ml-2">
              required
            </span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={data.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={errors.email ? inputError : inputNormal}
            placeholder="info@example.com"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1.5 text-xs text-accent-alt flex items-center gap-1 font-mono"
            >
              <AlertCircle size={12} />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-bold text-ink mb-2"
          >
            電話番号
            <span className="text-muted/40 text-xs font-mono font-normal ml-2">
              optional
            </span>
          </label>
          <input
            type="tel"
            id="phone"
            value={data.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputNormal}
            placeholder="090-1234-5678"
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-bold text-ink mb-2"
          >
            ご相談内容
            <span className="text-muted/40 text-xs font-mono font-normal ml-2">
              optional
            </span>
          </label>
          <select
            id="category"
            value={data.category}
            onChange={(e) => updateField("category", e.target.value)}
            className={inputNormal}
          >
            <option value="">選択してください</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-ink mb-2"
          >
            お問い合わせ内容
            <span className="text-accent text-xs font-mono font-bold ml-2">
              required
            </span>
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={data.message}
            onChange={(e) => updateField("message", e.target.value)}
            className={`${errors.message ? inputError : inputNormal} resize-y`}
            placeholder="ご相談内容をお書きください"
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1.5 text-xs text-accent-alt flex items-center gap-1 font-mono"
            >
              <AlertCircle size={12} />
              {errors.message}
            </p>
          )}
        </div>

        {/* Error message */}
        {state === "error" && (
          <div className="border border-accent-alt/30 bg-accent-alt/5 p-4 flex items-start gap-3">
            <AlertCircle
              className="text-accent-alt shrink-0 mt-0.5"
              size={16}
            />
            <div>
              <p className="text-sm font-bold text-accent-alt">
                送信に失敗しました
              </p>
              <p className="text-xs text-muted mt-1">
                通信環境をご確認の上、もう一度お試しください。
              </p>
            </div>
          </div>
        )}

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={state === "submitting"}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-accent/40 px-8 py-4 text-base font-display font-bold tracking-wider uppercase text-accent hover:bg-accent/10 hover:border-accent/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            {state === "submitting" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </>
            )}
          </button>
          <p className="mt-3 text-[11px] text-muted/40 font-mono">
            // 送信いただいた情報は
            <a
              href="/privacy"
              className="underline hover:text-accent transition-colors"
            >
              プライバシーポリシー
            </a>
            に基づき適切に管理いたします。
          </p>
        </div>
      </div>
    </form>
  );
}
