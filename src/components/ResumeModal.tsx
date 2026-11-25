import React from 'react';
import { X, Download, ExternalLink, Printer, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { isBn } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    const iframe = document.getElementById('resume-iframe') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } else {
      window.open('/resume.html', '_blank');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-[999999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/75 dark:bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-white dark:bg-slate-950 rounded-2xl sm:rounded-3xl max-w-4xl w-full h-[92vh] sm:h-[88vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <FileText size={18} />
            </div>
            <div className="min-w-0">
              <h3 id="resume-modal-title" className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm truncate">
                {isBn ? 'মোঃ নাঈম হোসেন — ফুল-স্ট্যাক সিভি' : 'Md. Nayem Hossain — Full-Stack CV'}
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">
                PDF & Print Ready &bull; ATS Optimized
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Direct Download Button */}
            <a
              href="/Md_Nayem_Hossain_Resume.pdf"
              download="Md_Nayem_Hossain_Resume.pdf"
              className="press-3d px-3 sm:px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-blue-500/20"
              title={isBn ? 'পিডিএফ ডাউনলোড করুন' : 'Download PDF'}
            >
              <Download size={14} />
              <span className="hidden xs:inline">{isBn ? 'ডাউনলোড PDF' : 'Download PDF'}</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="press-3d p-2 sm:px-3 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              title={isBn ? 'প্রিন্ট করুন' : 'Print Resume'}
            >
              <Printer size={14} />
              <span className="hidden sm:inline">{isBn ? 'প্রিন্ট' : 'Print'}</span>
            </button>

            {/* Open in New Tab Button */}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="press-3d p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs cursor-pointer"
              title={isBn ? 'নতুন ট্যাবে খুলুন' : 'Open in new tab'}
            >
              <ExternalLink size={14} />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="press-3d p-2 rounded-xl bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer ml-1"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Iframe Content */}
        <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950 p-0 sm:p-2 overflow-hidden relative">
          <iframe
            id="resume-iframe"
            src="/resume.html"
            title="Md. Nayem Hossain Resume"
            className="w-full h-full border-0 rounded-none sm:rounded-xl bg-white shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};
