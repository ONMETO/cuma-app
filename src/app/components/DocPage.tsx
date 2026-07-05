import React, { useEffect } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import {
  docTwPrivacy,
  docTwTerms,
  docJpPrivacy,
  docJpTerms,
  docEnPrivacy,
  docEnTerms,
} from '../utils/docsData';

type ActiveView = 'landing' | 'region-select' | 'doc-viewer';
type DocType = 'privacy' | 'terms';
type Region = 'tw' | 'jp' | 'en';

interface DocPageProps {
  view: ActiveView;
  setView: (view: ActiveView) => void;
  docType: DocType;
  setDocType: (type: DocType) => void;
  region: Region | null;
  setRegion: (region: Region | null) => void;
}

// Tokenize and parse inline markdown elements (bold, links, emails, code snippets)
function parseInline(text: string): React.ReactNode[] {
  const regex = /(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\)|<[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}>|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const tokens = text.split(regex);

  return tokens.map((token, idx) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return <strong key={idx} className="font-semibold text-[#fffce1]">{token.slice(2, -2)}</strong>;
    }
    if (token.startsWith('`') && token.endsWith('`')) {
      return (
        <code key={idx} className="bg-[#242420] px-1.5 py-0.5 rounded text-xs text-[#fffce1] font-mono border border-[#42433d]">
          {token.slice(1, -1)}
        </code>
      );
    }
    if (token.startsWith('[') && token.includes('](')) {
      const closeBracket = token.indexOf(']');
      const label = token.slice(1, closeBracket);
      const url = token.slice(closeBracket + 2, -1);
      return (
        <a
          key={idx}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9d95ff] hover:underline"
        >
          {label}
        </a>
      );
    }
    if (token.startsWith('<') && token.endsWith('>') && token.includes('@')) {
      const email = token.slice(1, -1);
      return (
        <a key={idx} href={`mailto:${email}`} className="text-[#9d95ff] hover:underline">
          {email}
        </a>
      );
    }
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(token)) {
      return (
        <a key={idx} href={`mailto:${token}`} className="text-[#9d95ff] hover:underline">
          {token}
        </a>
      );
    }
    return token;
  });
}

// Custom block parser for Markdown
function parseMarkdown(text: string): React.ReactNode[] {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();

    // Skip empty lines
    if (line === '') {
      i++;
      continue;
    }

    // Header 1
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="text-2xl md:text-3xl font-semibold text-[#fffce1] mt-8 mb-6 pb-2 border-b border-[#42433d]">
          {parseInline(line.slice(2))}
        </h1>
      );
      i++;
      continue;
    }

    // Header 2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-xl md:text-2xl font-semibold text-[#fffce1] mt-8 mb-4">
          {parseInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // Header 3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-lg md:text-xl font-semibold text-[#fffce1] mt-6 mb-3">
          {parseInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Header 4
    if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={i} className="text-base md:text-lg font-semibold text-[#fffce1] mt-4 mb-2">
          {parseInline(line.slice(5))}
        </h4>
      );
      i++;
      continue;
    }

    // Horizontal Rule
    if (line === '---') {
      elements.push(<hr key={i} className="border-[#42433d] my-8" />);
      i++;
      continue;
    }

    // Blockquote or Alert
    if (line.startsWith('>')) {
      const quoteLines: string[] = [];
      let isAlert = false;
      let alertType = '';

      while (i < lines.length && lines[i].trim().startsWith('>')) {
        let content = lines[i].trim().slice(1).trim();
        if (content.startsWith('[!IMPORTANT]')) {
          isAlert = true;
          alertType = 'IMPORTANT';
          content = content.replace('[!IMPORTANT]', '').trim();
        } else if (content.startsWith('[!NOTE]')) {
          isAlert = true;
          alertType = 'NOTE';
          content = content.replace('[!NOTE]', '').trim();
        }

        if (content !== '') {
          quoteLines.push(content);
        }
        i++;
      }

      if (isAlert) {
        elements.push(
          <div key={i} className="my-6 p-5 rounded bg-[#191919] border-l-4 border-[#fffce1] border-y border-r border-[#42433d]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold tracking-wider text-[#fffce1]">{alertType}</span>
            </div>
            <div className="text-sm md:text-base text-[#7c7c6f] space-y-2 leading-relaxed">
              {quoteLines.map((ql, qidx) => (
                <p key={qidx}>{parseInline(ql)}</p>
              ))}
            </div>
          </div>
        );
      } else {
        elements.push(
          <blockquote key={i} className="my-6 pl-4 border-l-4 border-[#7c7c6f] italic text-[#7c7c6f] space-y-2">
            {quoteLines.map((ql, qidx) => (
              <p key={qidx}>{parseInline(ql)}</p>
            ))}
          </blockquote>
        );
      }
      continue;
    }

    // Table
    if (line.startsWith('|')) {
      const tableRows: string[][] = [];
      let hasHeaderSeparator = false;

      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const rowText = lines[i].trim();
        if (rowText.includes('---')) {
          hasHeaderSeparator = true;
          i++;
          continue;
        }

        const cells = rowText
          .split('|')
          .map(c => c.trim())
          .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
        tableRows.push(cells);
        i++;
      }

      if (tableRows.length > 0) {
        const headers = hasHeaderSeparator ? tableRows[0] : [];
        const bodyRows = hasHeaderSeparator ? tableRows.slice(1) : tableRows;

        elements.push(
          <div key={i} className="overflow-x-auto my-6 border border-[#42433d] rounded-lg">
            <table className="w-full border-collapse text-left text-sm">
              {headers.length > 0 && (
                <thead>
                  <tr className="bg-[#191919] border-b border-[#42433d]">
                    {headers.map((h, hidx) => (
                      <th
                        key={hidx}
                        className="p-3 font-semibold text-[#fffce1] border-r border-[#42433d] last:border-r-0"
                      >
                        {parseInline(h)}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {bodyRows.map((row, ridx) => (
                  <tr
                    key={ridx}
                    className="border-b border-[#42433d] last:border-b-0 hover:bg-[#191919]/50 transition-colors"
                  >
                    {row.map((cell, cidx) => (
                      <td key={cidx} className="p-3 text-[#7c7c6f] border-r border-[#42433d] last:border-r-0">
                        {parseInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Bullet List
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const listItems: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))
      ) {
        listItems.push(lines[i].trim().slice(2).trim());
        i++;
      }
      elements.push(
        <ul key={i} className="list-disc pl-6 my-4 space-y-2 text-[#7c7c6f] text-sm md:text-base leading-relaxed">
          {listItems.map((li, lidx) => (
            <li key={lidx}>{parseInline(li)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered List
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        const match = lines[i].trim().match(/^\d+\.\s(.*)/);
        if (match) {
          listItems.push(match[1].trim());
        }
        i++;
      }
      elements.push(
        <ol key={i} className="list-decimal pl-6 my-4 space-y-2 text-[#7c7c6f] text-sm md:text-base leading-relaxed">
          {listItems.map((li, lidx) => (
            <li key={lidx}>{parseInline(li)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph
    elements.push(
      <p key={i} className="my-4 text-sm md:text-base text-[#7c7c6f] leading-relaxed">
        {parseInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

export const DocPage: React.FC<DocPageProps> = ({
  view,
  setView,
  docType,
  setDocType,
  region,
  setRegion,
}) => {
  // Always scroll to top when view, docType, or region changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [view, docType, region]);

  // Determine which document text to display
  const getDocContent = (): string => {
    if (!region) return '';
    if (region === 'tw') {
      return docType === 'privacy' ? docTwPrivacy : docTwTerms;
    } else if (region === 'jp') {
      return docType === 'privacy' ? docJpPrivacy : docJpTerms;
    } else {
      return docType === 'privacy' ? docEnPrivacy : docEnTerms;
    }
  };

  const handleRegionSelect = (selectedRegion: Region) => {
    setRegion(selectedRegion);
    setView('doc-viewer');
  };

  if (view === 'region-select') {
    return (
      <div className="w-full bg-[#0e100f] min-h-screen text-[#fffce1] pt-32 pb-24 flex flex-col items-center px-4 relative z-10">
        <div className="max-w-3xl w-full">
          {/* Eyebrow */}
          <div className="text-center mb-4">
            <span className="text-[#fffce1] text-base font-normal tracking-wide">
              {'{ Language & Region }'}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold text-center text-[#fffce1] mb-2 tracking-tight">
            Select Country or Region
          </h1>
          <p className="text-[#7c7c6f] text-center text-sm md:text-base mb-12">
            Please select your country or region to view the corresponding terms and privacy policy.
          </p>

          {/* Cards Stack */}
          <div className="grid grid-cols-1 gap-4 mb-12">
            {/* Global English - Now on top */}
            <button
              onClick={() => handleRegionSelect('en')}
              className="w-full p-6 bg-[#191919] hover:bg-[#1f1f1f] border border-[#42433d] hover:border-[#fffce1] rounded-lg transition-all duration-300 flex items-center justify-between text-left group cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#fffce1] mb-1">
                  Global Regions (English)
                </h3>
                <p className="text-sm text-[#7c7c6f]">United States, Canada, United Kingdom, Australia, New Zealand, Singapore, EU</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#7c7c6f] group-hover:text-[#fffce1] transition-colors" />
            </button>

            {/* Japan */}
            <button
              onClick={() => handleRegionSelect('jp')}
              className="w-full p-6 bg-[#191919] hover:bg-[#1f1f1f] border border-[#42433d] hover:border-[#fffce1] rounded-lg transition-all duration-300 flex items-center justify-between text-left group cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#fffce1] mb-1">
                  日本 (日本語)
                </h3>
                <p className="text-sm text-[#7c7c6f]">Japan (Japanese)</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#7c7c6f] group-hover:text-[#fffce1] transition-colors" />
            </button>

            {/* Taiwan */}
            <button
              onClick={() => handleRegionSelect('tw')}
              className="w-full p-6 bg-[#191919] hover:bg-[#1f1f1f] border border-[#42433d] hover:border-[#fffce1] rounded-lg transition-all duration-300 flex items-center justify-between text-left group cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#fffce1] mb-1">
                  台灣 (繁體中文)
                </h3>
                <p className="text-sm text-[#7c7c6f]">Taiwan (Traditional Chinese)</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#7c7c6f] group-hover:text-[#fffce1] transition-colors" />
            </button>
          </div>

          {/* Back Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setView('landing')}
              className="inline-flex items-center gap-2 border border-[#fffce1] text-[#fffce1] bg-transparent rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#fffce1] hover:text-[#0e100f] transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'doc-viewer' && region) {
    const regionNames = {
      tw: 'Taiwan',
      jp: 'Japan',
      en: 'Global Regions',
    };

    return (
      <div className="w-full bg-[#0e100f] min-h-screen text-[#fffce1] pt-32 pb-24 px-4 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl w-full">
          {/* Header Switchers */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            {/* Region switch indicator */}
            <div className="flex items-center gap-2 text-sm text-[#7c7c6f]">
              <span>Region:</span>
              <span className="text-[#fffce1] font-semibold">{regionNames[region]}</span>
              <span>•</span>
              <button
                onClick={() => setView('region-select')}
                className="text-[#0ae448] hover:underline cursor-pointer"
              >
                Change Region
              </button>
            </div>

            {/* Document Type tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setDocType('privacy')}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                  docType === 'privacy'
                    ? 'bg-[#fffce1] !text-[#0e100f] border-[#fffce1]'
                    : 'bg-transparent text-[#fffce1] border-[#42433d] hover:border-[#fffce1]'
                }`}
              >
                {region === 'tw' ? '隱私與個人資料保護政策' : region === 'jp' ? 'プライバシーポリシー' : 'Privacy Policy'}
              </button>
              <button
                onClick={() => setDocType('terms')}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                  docType === 'terms'
                    ? 'bg-[#fffce1] !text-[#0e100f] border-[#fffce1]'
                    : 'bg-transparent text-[#fffce1] border-[#42433d] hover:border-[#fffce1]'
                }`}
              >
                {region === 'tw' ? '服務條款與 EULA' : region === 'jp' ? '利用規約及び EULA' : 'Terms & EULA'}
              </button>
            </div>
          </div>

          {/* Document Content Card */}
          <div className="w-full bg-[#191919] border border-[#42433d] rounded-lg p-6 md:p-12 mb-8 shadow-2xl">
            {/* Eyebrow */}
            <div className="text-center mb-6">
              <span className="text-[#7c7c6f] text-sm">
                {'{ ' + (docType === 'privacy' ? 'Privacy Policy' : 'Terms of Service') + ' }'}
              </span>
            </div>

            {/* Clean Markdown parsing output */}
            <div className="prose prose-invert max-w-none">
              {parseMarkdown(getDocContent())}
            </div>
          </div>

          {/* Action Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setView('region-select')}
              className="inline-flex items-center gap-2 border border-[#42433d] hover:border-[#fffce1] text-[#7c7c6f] hover:text-[#fffce1] bg-transparent rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Change Region
            </button>
            <button
              onClick={() => setView('landing')}
              className="inline-flex items-center gap-2 border border-[#fffce1] text-[#fffce1] bg-transparent rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#fffce1] hover:text-[#0e100f] transition-all duration-300 cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
