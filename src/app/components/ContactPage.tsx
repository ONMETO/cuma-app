import React, { useState } from 'react';
import { Mail, MessageSquare, Briefcase, ArrowLeft, Copy, Check, ExternalLink } from 'lucide-react';
import logoImg from '../../assets/logo.png';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white relative z-20 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Navigation */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-16">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-all text-sm backdrop-blur-md cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        <div onClick={onNavigateHome} className="flex items-center gap-3 cursor-pointer">
          <img
            src={logoImg}
            alt="Bagel Muse"
            className="w-7 h-7 rounded object-contain border border-neutral-800"
          />
          <span className="text-white font-semibold text-lg tracking-tight">Bagel Muse</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/80 text-xs font-medium text-neutral-400 mb-4 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          We'd love to hear from you
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          Whether you need support, want to join our creator community, or explore strategic partnerships & investment opportunities.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        {/* Card 1: User Support & Feedback */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-xl p-7 flex flex-col justify-between relative group hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-900/50">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Help & Support</h3>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Have questions, issues, or feedback regarding Bagel Muse? Our team is here to assist you.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-neutral-900">
            <div className="flex items-center justify-between bg-neutral-900/80 rounded-xl px-3.5 py-2.5 border border-neutral-800 text-xs font-mono text-neutral-300">
              <span className="truncate pr-2">douglasdouglasskikcn@outlook.com</span>
              <button
                onClick={() => copyToClipboard('douglasdouglasskikcn@outlook.com', 'support')}
                className="text-neutral-400 hover:text-white transition-colors p-1"
                title="Copy Email"
              >
                {copiedType === 'support' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <a
              href="mailto:douglasdouglasskikcn@outlook.com?subject=[Support%20Request]%20Bagel%20Muse"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-white text-sm font-medium transition-all"
            >
              Send Email
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 2: Discord Community */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-xl p-7 flex flex-col justify-between relative group hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-900/50">
          <div>
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Connect with fellow creators, share music insights, and get early access to exclusive updates.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-neutral-900">
            <div className="flex items-center justify-between bg-neutral-900/80 rounded-xl px-3.5 py-2.5 border border-neutral-800 text-xs font-mono text-neutral-300">
              <span className="truncate">discord.gg/bagelmuse</span>
              <button
                onClick={() => copyToClipboard('https://discord.gg/bagelmuse', 'discord')}
                className="text-neutral-400 hover:text-white transition-colors p-1"
                title="Copy Link"
              >
                {copiedType === 'discord' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <a
              href="https://discord.gg/bagelmuse"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-medium transition-all shadow-lg shadow-indigo-900/20"
            >
              Join Discord
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 3: Investors & Partnerships */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-xl p-7 flex flex-col justify-between relative group hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-900/50">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-105 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-white">Partnerships & IR</h3>
            </div>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              For investment inquiries, venture capital, strategic collaborations, and enterprise inquiries.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-neutral-900">
            <div className="flex items-center justify-between bg-neutral-900/80 rounded-xl px-3.5 py-2.5 border border-neutral-800 text-xs font-mono text-neutral-300">
              <span className="truncate pr-2">jackdouglassbbl@gmail.com</span>
              <button
                onClick={() => copyToClipboard('jackdouglassbbl@gmail.com', 'investors')}
                className="text-neutral-400 hover:text-white transition-colors p-1"
                title="Copy Email"
              >
                {copiedType === 'investors' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <a
              href="mailto:jackdouglassbbl@gmail.com?subject=[Partnership%20/%20Investor%20Inquiry]%20Bagel%20Muse"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-white text-sm font-medium transition-all"
            >
              Contact Business Team
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Note */}
      <div className="text-center text-neutral-500 text-xs max-w-lg">
        We typically respond to emails within 1-2 business days. For urgent assistance or product feedback, Discord is the fastest channel.
      </div>
    </div>
  );
};
