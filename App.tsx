import React, { useState, useEffect, useRef } from 'react';
import { LANGUAGES, CONTENT } from './data';
import { Language, SkillLevel, Topic, SubTopic, ChatMessage } from './types';
import { Icon } from './components/Icon';
import { askGeminiTutor, generateNewExercise } from './services/geminiService';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';

type ViewState = 'HOME' | 'LEVEL_SELECT' | 'DASHBOARD';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedLang, setSelectedLang] = useState<Language | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | null>(null);

  const [expandedTopicIds, setExpandedTopicIds] = useState<Set<string>>(new Set());
  const [activeSubTopic, setActiveSubTopic] = useState<SubTopic | null>(null);

  const [isAiLoading, setIsAiLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [aiInput, setAiInput] = useState('');
  const [showAiModal, setShowAiModal] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  // Handlers (unchanged logic, just cleaner)
  const handleLanguageSelect = (lang: Language) => {
    setSelectedLang(lang);
    setView('LEVEL_SELECT');
  };

  const handleLevelSelect = (level: SkillLevel) => {
    setSelectedLevel(level);
    const content = CONTENT[selectedLang!.id]?.[level];
    setExpandedTopicIds(new Set(content?.topics[0]?.id ? [content.topics[0].id] : []));
    setActiveSubTopic(content?.topics[0]?.subTopics[0] || null);
    setView('DASHBOARD');
  };

  const toggleTopicExpand = (id: string) => {
    setExpandedTopicIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleAskAI = async () => {
    if (!aiInput.trim() || !activeSubTopic || !selectedLang) return;

    const userMsg: ChatMessage = { role: 'user', text: aiInput };
    setChatHistory(h => [...h, userMsg]);
    setAiInput('');
    setIsAiLoading(true);

    const codeContext = activeSubTopic.codeExamples
      .map(ex => `// ${ex.title}\n${ex.code}`)
      .join('\n\n');

    const response = await askGeminiTutor(selectedLang.name, activeSubTopic.title, codeContext, aiInput);
    setChatHistory(h => [...h, { role: 'model', text: response }]);
    setIsAiLoading(false);
  };

  const handleGenerateExercise = async () => {
    if (!selectedLang || !selectedLevel || !activeSubTopic) return;
    setIsAiLoading(true);
    setShowAiModal(true);

    const userMsg: ChatMessage = { role: 'user', text: 'Generate a new practice exercise for me.' };
    setChatHistory(h => [...h, userMsg]);

    const response = await generateNewExercise(selectedLang.name, selectedLevel, activeSubTopic.title);
    setChatHistory(h => [...h, { role: 'model', text: response }]);
    setIsAiLoading(false);
  };

  // === PREMIUM RENDERS ===

  const renderHome = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30"
    >
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg mb-8">
            <Icon name="Sparkles" size={18} className="text-amber-500" />
            <span className="text-sm font-medium">Powered by Gemini 2.5 Flash</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-800 dark:from-white dark:via-blue-400 dark:to-indigo-300 mb-6">
            Learn to Code<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Like a Pro
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light">
            Interactive lessons • AI-powered tutor • Real code examples • Progressive curriculum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {LANGUAGES.map((lang, i) => (
            <motion.button
              key={lang.id}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.4 }}
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleLanguageSelect(lang)}
              className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${lang.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl ring-1 ring-black/5">
                    <Icon name={lang.icon} size={40} className="text-slate-800 dark:text-white drop-shadow" />
                  </div>
                  <Icon name="ArrowRight" size={24} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{lang.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{lang.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderLevelSelect = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 px-6 py-20"
    >
      <button
        onClick={() => setView('HOME')}
        className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white mb-12 transition-colors"
      >
        <Icon name="ArrowLeft" size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back</span>
      </button>

      <motion.div className="max-w-5xl mx-auto text-center mb-16">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 mb-8"
        >
          <Icon name={selectedLang?.icon || 'Code'} size={64} className="text-slate-900 dark:text-white" />
        </motion.div>

        <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
          Choose Your Level
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Learning path for <span className="font-bold text-blue-600">{selectedLang?.name}</span>
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {(['Beginner', 'Intermediate', 'Advanced'] as SkillLevel[]).map((level, i) => {
          const hasContent = !!CONTENT[selectedLang!.id]?.[level];
          const colors = {
            Beginner: 'from-emerald-500 to-teal-600',
            Intermediate: 'from-blue-500 to-cyan-600',
            Advanced: 'from-purple-500 to-purple-600'
          };

          return (
            <motion.button
              key={level}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              whileHover={hasContent ? { y: -16 } : {}}
              disabled={!hasContent}
              onClick={() => handleLevelSelect(level)}
              className={`relative p-10 rounded-3xl overflow-hidden shadow-2xl transition-all ${
                hasContent
                  ? 'bg-white dark:bg-slate-900 cursor-pointer'
                  : 'bg-slate-100/50 dark:bg-slate-800/30 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${colors[level]} opacity-10`} />
              <div className="relative z-10 text-left">
                <div className={`text-6xl font-black mb-4 bg-gradient-to-r ${colors[level]} bg-clip-text text-transparent`}>
                  0{ i + 1 }
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{level}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {hasContent ? `Master ${level.toLowerCase()} concepts with hands-on projects` : 'Coming soon'}
                </p>
              </div>
              {hasContent && (
                <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span>Start Learning</span>
                  <Icon name="ArrowRight" size={20} />
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );

  const renderDashboard = () => {
    const data = CONTENT[selectedLang!.id]?.[selectedLevel!];
    if (!data) return <div>No content</div>;

    return (
      <div className="flex h-screen bg-slate-50/50 dark:bg-slate-950">
        {/* Glass Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border-r border-white/20 dark:border-slate-800/50 flex flex-col shadow-2xl"
        >
          <div className="p-6 border-b border-white/20">
            <button
              onClick={() => setView('LEVEL_SELECT')}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-500 transition-colors"
            >
              <Icon name="ArrowLeft" size={16} />
              Change Level
            </button>
            <div className="flex items-center gap-4 mt-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                <Icon name={selectedLang?.icon || 'Code'} size={28} className="text-white" />
              </div>
              <div>
                <h2 className="font-bold text-xl">{selectedLang?.name}</h2>
                <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full">
                  {selectedLevel}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {data.topics.map(topic => {
              const open = expandedTopicIds.has(topic.id);
              return (
                <div key={topic.id} className="mb-2">
                  <button
                    onClick={() => toggleTopicExpand(topic.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                      open ? 'bg-blue-600 text-white' : 'hover:bg-white/50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-medium">{topic.title}</span>
                    <Icon name="ChevronDown" size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        {topic.subTopics.map(sub => (
                          <button
                            key={sub.id}
                            onClick={() => setActiveSubTopic(sub)}
                            className={`w-full text-left px-8 py-3 text-sm rounded-lg transition-colors ${
                              activeSubTopic?.id === sub.id
                                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold shadow-md'
                                : 'hover:bg-white/30 dark:hover:bg-slate-700/50'
                            }`}
                          >
                            {sub.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto relative">
          <div className="max-w-5xl mx-auto p-8 lg:p-16">
            {activeSubTopic ? (
              <motion.div
                key={activeSubTopic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-slate-900 to-blue-700 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                  {activeSubTopic.title}
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
                  <ReactMarkdown>{activeSubTopic.content}</ReactMarkdown>
                </div>

                {/* Code Examples */}
                {activeSubTopic.codeExamples.length > 0 && (
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                      <Icon name="Code" size={32} className="text-blue-600" />
                      Code Examples
                    </h2>
                    {activeSubTopic.codeExamples.map((ex, i) => (
                      <div key={i} className="mb-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-900 shadow-2xl">
                        <div className="bg-slate-800 px-6 py-3 border-b border-slate-700 flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-300">{ex.title}</span>
                        </div>
                        <pre className="p-6 overflow-x-auto">
                          <code className="text-sm text-blue-200 font-mono">{ex.code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                )}

                {/* Challenge */}
                {activeSubTopic.exercise && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mt-12 p-10 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 rounded-3xl border border-emerald-500/30 shadow-2xl"
                  >
                    <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-3">
                      <Icon name="CheckCircle" size={28} />
                      Practice Challenge
                    </h3>
                    <p className="text-lg mb-8 text-slate-700 dark:text-slate-300">{activeSubTopic.exercise}</p>
                    <button
                      onClick={handleGenerateExercise}
                      className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-3"
                    >
                      <Icon name="Sparkles" size={20} />
                      Generate New Exercise
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <Icon name="BookOpen" size={80} className="text-blue-500 mx-auto mb-6 opacity-20" />
                  <p className="text-2xl font-light text-slate-500">Select a lesson to begin</p>
                </div>
              </div>
            )}
          </div>

          {/* Floating AI Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowAiModal(!showAiModal)}
            className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50"
          >
            <Icon name={showAiModal ? "ChevronRight" : "MessageSquare"} size={28} className={showAiModal ? "rotate-90" : ""} />
          </motion.button>

          {/* AI Modal */}
          <AnimatePresence>
            {showAiModal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed bottom-28 right-8 w-96 h-[600px] bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 flex flex-col z-40 overflow-hidden"
              >
                <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Icon name="Brain" size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">AI Tutor</h3>
                      <p className="text-xs text-emerald-500 flex items-center gap-1">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        Ready to help
                      </p>
                    </div>
                  </div>
                  <button onClick={() => setChatHistory([])} className="text-xs opacity-60 hover:opacity-100">
                    Clear
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {chatHistory.length === 0 && (
                    <p className="text-center text-slate-400 mt-20">Ask anything about this lesson!</p>
                  )}
                  {chatHistory.map((m, i) => (
                    <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                      <div className={`inline-block max-w-xs px-4 py-3 rounded-2xl ${
                        m.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                      }`}>
                        {m.role === 'model' ? (
                          <div className="prose prose-sm dark:prose-invert">
                            <ReactMarkdown>{m.text}</ReactMarkdown>
                          </div>
                        ) : m.text}
                      </div>
                    </div>
                  ))}
                  {isAiLoading && <div className="flex gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div><div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div><div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div></div>}
                  <div ref={chatEndRef} />
                </div>

                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex gap-2">
                    <input
                      value={aiInput}
                      onChange={e => setAiInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleAskAI()}
                      placeholder="Ask the AI tutor..."
                      className="flex-1 px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleAskAI}
                      disabled={isAiLoading || !aiInput.trim()}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium disabled:opacity-50"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-x-hidden">
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-8 right-8 z-50 p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-full shadow-xl border border-white/20"
      >
        <Icon name={isDarkMode ? 'Sun' : 'Moon'} size={22} />
      </button>

      <AnimatePresence mode="wait">
        {view === 'HOME' && <motion.div key="home">{renderHome()}</motion.div>}
        {view === 'LEVEL_SELECT' && <motion.div key="levels">{renderLevelSelect()}</motion.div>}
        {view === 'DASHBOARD' && <motion.div key="dashboard">{renderDashboard()}</motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default App;