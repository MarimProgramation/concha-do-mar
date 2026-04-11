"use client";

import { useState } from "react";

export default function AdminNewsletterPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [emails, setEmails] = useState<string[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao fazer login.");
        return;
      }

      setEmails(data.emails);
      setTotal(data.total);
      setLoggedIn(true);
    } catch {
      setError("Erro de ligação ao servidor.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emails.join(", "));
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = emails.join(", ");
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleOpenEmail = () => {
    const bcc = emails.join(",");
    const subject = encodeURIComponent("Novidades Concha do Mar 🐚");
    const body = encodeURIComponent(
      "Olá!\n\nTemos boas notícias — acabámos de receber stock novo!\n\nVisite a nossa loja para ver os produtos disponíveis.\n\nCom carinho,\nConcha do Mar 🐚"
    );
    window.open(`mailto:?bcc=${bcc}&subject=${subject}&body=${body}`, "_self");
  };

  // Login screen
  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-sand-50 flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-5xl mb-4">🐚</div>
          <h1 className="text-xl font-bold text-ocean-800 mb-1">Área de Gestão</h1>
          <p className="text-sm text-gray-500 mb-6">
            Introduza a password para continuar
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-center text-lg tracking-widest focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors disabled:opacity-50"
            >
              {loading ? "A verificar..." : "Entrar"}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-sm text-red-600 bg-red-50 rounded-lg p-3">{error}</p>
          )}
        </div>
      </div>
    );
  }

  // Admin panel
  return (
    <div className="min-h-screen bg-sand-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">📧</div>
          <h1 className="text-xl font-bold text-ocean-800">Notificar Clientes</h1>
          <p className="text-sm text-gray-500 mt-1">
            {total} {total === 1 ? "pessoa inscrita" : "pessoas inscritas"}
          </p>
        </div>

        {total === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <p className="text-lg mb-1">Ainda não há inscritos</p>
            <p className="text-sm">Quando alguém se inscrever no site, aparece aqui.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Option 1: Open email app */}
            <button
              onClick={handleOpenEmail}
              className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-4 px-4 rounded-xl transition-colors text-base flex items-center justify-center gap-3"
            >
              <span className="text-xl">✉️</span>
              Abrir o meu email para enviar
            </button>
            <p className="text-xs text-gray-400 text-center">
              Abre o seu email com todos os contactos já preenchidos. Só precisa de clicar &quot;Enviar&quot;.
            </p>

            <div className="flex items-center gap-3 py-2">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">ou</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Option 2: Copy emails */}
            <button
              onClick={handleCopy}
              className="w-full bg-white hover:bg-gray-50 text-ocean-700 font-semibold py-4 px-4 rounded-xl transition-colors text-base border-2 border-ocean-200 flex items-center justify-center gap-3"
            >
              <span className="text-xl">{copied ? "✅" : "📋"}</span>
              {copied ? "Emails copiados!" : "Copiar todos os emails"}
            </button>
            <p className="text-xs text-gray-400 text-center">
              Copia todos os emails para poder colar no Gmail, Outlook, ou outro email.
            </p>
          </div>
        )}

        {/* Email list preview */}
        {total > 0 && (
          <details className="mt-6">
            <summary className="text-sm text-gray-500 cursor-pointer hover:text-ocean-600">
              Ver lista de emails ({total})
            </summary>
            <div className="mt-2 max-h-40 overflow-y-auto bg-gray-50 rounded-lg p-3 text-sm text-gray-600 space-y-1">
              {emails.map((email) => (
                <div key={email}>{email}</div>
              ))}
            </div>
          </details>
        )}

        <button
          onClick={() => { setLoggedIn(false); setPassword(""); }}
          className="mt-6 w-full text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
