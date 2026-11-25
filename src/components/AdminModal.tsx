import React, { useState, useEffect } from 'react';
import { X, Lock, CheckCircle, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const { data } = useLanguage();
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPin('');
      setIsAuthenticated(false);
      setError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '7777' || pin === '1234') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPin('');
    }
  };

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-slate-950/70 dark:bg-black/80 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 dark:border-slate-700 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 transition"
        >
          <X size={16} />
        </button>

        {!isAuthenticated ? (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <Lock size={22} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Portfolio Console
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Enter authorized PIN to view session details and telemetry.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter 4-digit PIN (e.g. 7777)"
                  autoFocus
                  className="w-full px-4 py-3 text-center tracking-widest text-lg font-mono rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
                />
                {error && (
                  <p className="text-xs text-red-500 mt-2 text-center">
                    Incorrect PIN. Try 7777.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-900 dark:hover:bg-slate-100 transition"
              >
                Access
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-4">
              <CheckCircle size={20} />
              <span className="text-xs font-bold uppercase tracking-wider">
                Authenticated Access
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-4">
              System Telemetry Status
            </h3>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 text-xs space-y-2.5 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/60 mb-5">
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">Device:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{data.systemTelemetry.deviceName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">Environment:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{data.systemTelemetry.osVersion}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">Node / Host:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{data.systemTelemetry.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">Published:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{data.systemTelemetry.publishedDateString}</span>
              </div>
            </div>

            <div className="p-3 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/50 rounded-xl text-[11px] text-blue-700 dark:text-blue-300 flex items-center gap-2 mb-4">
              <Shield size={14} className="shrink-0" />
              <span>All assets, routes, and components operational.</span>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition"
            >
              Close Console
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
