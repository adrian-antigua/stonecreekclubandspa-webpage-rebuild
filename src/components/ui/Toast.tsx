"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type ToastItem = { id: number; message: string };
type ToastContextValue = { showToast: (message: string) => void };

const ToastContext = createContext<ToastContextValue | null>(null);

const DISMISS_MS = 5000;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextId = useRef(0);

  const dismiss = useCallback((id: number) => {
    setToasts((all) => all.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message: string) => {
    const id = ++nextId.current;
    setToasts((all) => [...all, { id, message }]);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        role="status"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex flex-col items-center gap-3 p-5 md:items-end md:p-8"
      >
        {toasts.map((t) => (
          <Toast key={t.id} item={t} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function Toast({ item, onDismiss }: { item: ToastItem; onDismiss: (id: number) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(item.id), DISMISS_MS);
    return () => clearTimeout(timer);
  }, [item.id, onDismiss]);

  return (
    <div className="tone-dark pointer-events-auto flex w-full max-w-md items-start gap-4 border-l-2 border-sky-300 bg-slate-950 px-6 py-5 text-stone-50 shadow-[0_20px_40px_-20px_rgb(31_44_54/0.6)]">
      <p className="flex-1 text-small">{item.message}</p>
      <button
        type="button"
        onClick={() => onDismiss(item.id)}
        className="-m-1 p-1 text-stone-100 transition-colors hover:text-sky-300"
        aria-label="Dismiss notification"
      >
        <span aria-hidden>✕</span>
      </button>
    </div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
}
