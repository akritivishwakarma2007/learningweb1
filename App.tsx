
import React, { useState, useEffect, useRef } from 'react';
import { LANGUAGES, CONTENT } from './data';
import { Language, SkillLevel, Topic, SubTopic, ChatMessage } from './types';
import { Icon } from './components/Icon';
import { askGeminiTutor, generateNewExercise } from './services/geminiService';
import ReactMarkdown from 'react-markdown';

type ViewState = 'HOME' | 'LEVEL_SELECT' | 'DASHBOARD';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedLang, setSelectedLang] = useState<Language | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | null>(null);
  
  // Accordion & Content State
  const [expandedTopicIds, setExpandedTopicIds] = useState<Set<string>>(new Set());
  const [activeSubTopic, setActiveSubTopic] = useState<SubTopic | null>(null);

  // AI State
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [aiInput, setAiInput] = useState('');
  const [showAiModal, setShowAiModal] = useState(false);
  
  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLang(lang);
    setView('LEVEL_SELECT');
  };

  const handleLevelSelect = (level: SkillLevel) => {
    setSelectedLevel(level);
    const content = CONTENT[selectedLang!.id]?.[level];
    
    setExpandedTopicIds(new Set());
    
    if (content && content.topics.length > 0) {
      setExpandedTopicIds(new Set([content.topics[0].id]));
      if (content.topics[0].subTopics.length > 0) {
        setActiveSubTopic(content.topics[0].subTopics[0]);
      } else {
        setActiveSubTopic(null);
      }
    } else {
      setActiveSubTopic(null);
    }
    setView('DASHBOARD');
  };

  const toggleTopicExpand = (topicId: string) => {
    setExpandedTopicIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
      } else {
        newSet.add(topicId);
      }
      return newSet;
    });
  };

  const goBack = () => {
    if (view === 'DASHBOARD') setView('LEVEL_SELECT');
    else if (view === 'LEVEL_SELECT') {
      setSelectedLang(null);
      setView('HOME');
    }
  };

  const handleAskAI = async () => {
    if (!aiInput.trim() || !selectedLang || !activeSubTopic) return;
    
    const userMsg: ChatMessage = { role: 'user', text: aiInput };
    setChatHistory(prev => [...prev, userMsg]);
    setAiInput('');
    setIsAiLoading(true);

    const codeContext = activeSubTopic.codeExamples
        .map(ex => `// Example: ${ex.title}\n${ex.code}`)
        .join('\n\n');

    const response = await askGeminiTutor(
        selectedLang.name,
        activeSubTopic.title,
        codeContext,
        userMsg.text
    );

    setChatHistory(prev => [...prev, { role: 'model', text: response }]);
    setIsAiLoading(false);
  };

  const handleGenerateExercise = async () => {
      if(!selectedLang || !selectedLevel || !activeSubTopic) return;
      setIsAiLoading(true);
      setShowAiModal(true); 
      
      const prompt = "Generate a new practice exercise for me.";
      const userMsg: ChatMessage = { role: 'user', text: prompt };
      setChatHistory(prev => [...prev, userMsg]);

      const response = await generateNewExercise(selectedLang.name, selectedLevel, activeSubTopic.title);
      
      setChatHistory(prev => [...prev, { role: 'model', text: response }]);
      setIsAiLoading(false);
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, showAiModal]);


  // --- Render Helpers ---

  const renderHome = () => (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-fade-in">
      <div className="text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-slate-900 dark:text-white tracking-tight leading-tight">
          Master code,<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">one concept at a time.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
          Select a language to begin your interactive learning journey tailored to your skill level.
        </p>
        <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-sm font-medium text-slate-600 dark:text-slate-300">
          <Icon name="Sparkles" size={16} className="text-amber-500 mr-2" />
          Powered by Gemini 2.5 AI
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            onClick={() => handleLanguageSelect(lang)}
            className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 p-8 rounded-3xl text-left flex flex-col h-full overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transform hover:-translate-y-1"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${lang.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Icon name={lang.icon} size={32} className="text-slate-900 dark:text-white" />
              </div>
              <Icon name="ChevronRight" className="text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{lang.name}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{lang.description}</p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderLevelSelect = () => (
    <div className="max-w-5xl mx-auto px-6 py-20 animate-slide-up">
      <button onClick={goBack} className="group flex items-center text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-12 transition-colors">
        <div className="p-2 bg-white dark:bg-slate-800 rounded-full mr-3 shadow-sm border border-slate-200 dark:border-slate-700 group-hover:border-blue-500 transition-colors">
          <Icon name="ArrowLeft" size={16} />
        </div>
        Back to Languages
      </button>
      
      <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 mb-8">
            <Icon name={selectedLang?.icon || 'Code'} size={48} className="text-slate-900 dark:text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight">Select Your Level</h2>
        <p className="text-lg text-slate-500 dark:text-slate-400">Choose the curriculum complexity for <span className="text-slate-900 dark:text-white font-semibold">{selectedLang?.name}</span></p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {(['Beginner', 'Intermediate', 'Advanced'] as SkillLevel[]).map((level) => {
           const hasContent = CONTENT[selectedLang!.id]?.[level];
           return (
            <button
              key={level}
              onClick={() => handleLevelSelect(level)}
              disabled={!hasContent}
              className={`relative p-8 rounded-3xl border-2 text-left transition-all duration-300 h-full flex flex-col ${
                hasContent 
                ? 'bg-white dark:bg-slate-900 border-transparent hover:border-blue-500/30 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 cursor-pointer' 
                : 'bg-slate-50 dark:bg-slate-950 border-transparent opacity-50 cursor-not-allowed grayscale'
              }`}
            >
              <div className={`text-sm font-bold uppercase tracking-wider mb-4 ${
                level === 'Beginner' ? 'text-emerald-500' :
                level === 'Intermediate' ? 'text-blue-500' :
                'text-purple-500'
              }`}>
                Level {level === 'Beginner' ? '01' : level === 'Intermediate' ? '02' : '03'}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{level}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {hasContent ? `Master ${level.toLowerCase()} concepts, syntax, and best practices.` : 'Content coming soon.'}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500">Start Learning</span>
                <div className={`p-2 rounded-full text-white ${
                   level === 'Beginner' ? 'bg-emerald-500' :
                   level === 'Intermediate' ? 'bg-blue-500' :
                   'bg-purple-500'
                }`}>
                  <Icon name="Play" size={16} className="ml-0.5" />
                </div>
              </div>
            </button>
           );
        })}
      </div>
    </div>
  );

  const renderDashboard = () => {
    const courseData = CONTENT[selectedLang!.id]?.[selectedLevel!];
    
    if (!courseData) return <div>No data found.</div>;

    return (
      <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Modern Sidebar */}
        <div className="w-80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 flex flex-col hidden md:flex z-10">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <button onClick={goBack} className="group flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors uppercase tracking-wider">
               <Icon name="ArrowLeft" size={14} className="mr-2 group-hover:-translate-x-1 transition-transform"/> Change Level
            </button>
            <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <Icon name={selectedLang?.icon || 'Code'} className="text-slate-900 dark:text-white" size={24}/>
                </div>
                <div>
                    <h2 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">{selectedLang?.name}</h2>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">{selectedLevel}</span>
                </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
            <div className="px-2 mb-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Modules</div>
            
            {courseData.topics.map(topic => {
                const isExpanded = expandedTopicIds.has(topic.id);
                return (
                    <div key={topic.id} className="rounded-xl overflow-hidden border border-transparent transition-colors duration-200">
                        <button
                            onClick={() => toggleTopicExpand(topic.id)}
                            className={`w-full text-left px-4 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                                isExpanded 
                                ? 'bg-slate-100 dark:bg-slate-800/50 text-slate-900 dark:text-white' 
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                            }`}
                        >
                            <span>{topic.title}</span>
                            <Icon 
                                name="ChevronRight" 
                                size={14} 
                                className={`text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                            />
                        </button>

                        {isExpanded && (
                            <div className="bg-slate-50/50 dark:bg-slate-900/30 px-2 py-2 space-y-0.5">
                                {topic.subTopics.map(sub => (
                                    <button
                                        key={sub.id}
                                        onClick={() => setActiveSubTopic(sub)}
                                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all flex items-center ${
                                            activeSubTopic?.id === sub.id
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-medium'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${activeSubTopic?.id === sub.id ? 'bg-white' : 'bg-slate-300 dark:bg-slate-600'}`}></div>
                                        <span className="truncate">{sub.title}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            {/* Mobile Header */}
            <div className="md:hidden p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex justify-between items-center z-20 sticky top-0">
                <button onClick={goBack} className="p-2 -ml-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"><Icon name="ArrowLeft" size={20}/></button>
                <span className="font-bold text-slate-900 dark:text-white text-sm">{selectedLang?.name} &middot; {selectedLevel}</span>
                <div className="w-8"></div>
            </div>

            <div className="flex-1 overflow-y-auto scroll-smooth p-6 lg:p-12">
                {activeSubTopic ? (
                    <div className="max-w-4xl mx-auto pb-32 animate-fade-in">
                        <div className="mb-8">
                           <div className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Current Topic</div>
                           <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">{activeSubTopic.title}</h1>
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 lg:p-10 mb-8 shadow-sm">
                            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none marker:text-blue-500">
                                <ReactMarkdown>{activeSubTopic.content}</ReactMarkdown>
                            </div>
                        </div>

                        {/* Code Examples */}
                        {activeSubTopic.codeExamples && activeSubTopic.codeExamples.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                                    <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                                        <Icon name="Terminal" className="text-purple-600 dark:text-purple-400" size={20}/> 
                                    </div>
                                    Code Examples
                                </h3>
                                
                                <div className="grid gap-8">
                                {activeSubTopic.codeExamples.map((example, idx) => (
                                    <div key={idx} className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg bg-[#0f172a]">
                                        <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b] border-b border-slate-700/50">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{example.title}</span>
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
                                            </div>
                                        </div>
                                        <div className="p-6 overflow-x-auto custom-scrollbar">
                                            <pre className="text-sm md:text-base font-mono leading-relaxed text-blue-100/90 tab-4">
                                                <code>{example.code}</code>
                                            </pre>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        )}

                        {/* Exercise Block */}
                        {activeSubTopic.exercise && (
                            <div className="relative bg-gradient-to-br from-white to-emerald-50/50 dark:from-slate-900 dark:to-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-8 shadow-lg overflow-hidden">
                                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
                                
                                <h3 className="relative flex items-center text-emerald-800 dark:text-emerald-400 font-bold text-xl mb-4">
                                    <Icon name="CheckCircle" size={24} className="mr-3"/>
                                    Challenge
                                </h3>
                                <p className="relative text-slate-700 dark:text-slate-300 text-lg mb-8 leading-relaxed">{activeSubTopic.exercise}</p>
                                
                                <button 
                                    onClick={handleGenerateExercise}
                                    className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-xl transition-all shadow-md hover:shadow-emerald-500/20 hover:-translate-y-0.5"
                                >
                                    <Icon name="Sparkles" size={18} className="mr-2"/>
                                    Generate New Exercise with AI
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center px-4">
                        <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/50 dark:shadow-none mb-8">
                            <Icon name="BookOpen" size={40} className="text-blue-500"/>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Ready to learn?</h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md">Select a topic from the sidebar menu to start your lesson.</p>
                    </div>
                )}
            </div>

            {/* Floating AI Button */}
            <button
                onClick={() => setShowAiModal(!showAiModal)}
                className="absolute bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 transition-all hover:scale-110 z-30 flex items-center justify-center"
                aria-label="Ask AI Tutor"
            >
                {showAiModal ? <Icon name="ChevronRight" className="rotate-90" size={24}/> : <Icon name="MessageSquare" size={24}/>}
            </button>

            {/* Enhanced AI Modal */}
            {showAiModal && (
                <div className="absolute bottom-24 right-4 md:right-8 w-[calc(100vw-2rem)] md:w-[420px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col h-[600px] max-h-[70vh] z-30 animate-slide-up overflow-hidden ring-1 ring-black/5">
                    {/* Header */}
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex justify-between items-center sticky top-0 z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                                <Icon name="Brain" size={18}/> 
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm">AI Tutor</h3>
                                <p className="text-[10px] font-medium text-emerald-500 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Online
                                </p>
                            </div>
                        </div>
                        <button onClick={() => setChatHistory([])} className="text-xs font-medium text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors px-2 py-1">Clear</button>
                    </div>
                    
                    {/* Chat Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50 dark:bg-slate-950">
                        {chatHistory.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full text-center p-6 opacity-60">
                                <Icon name="Sparkles" className="text-blue-400 mb-4" size={32}/>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                                    Ask me to explain code, debugging tips,<br/>or generate more examples!
                                </p>
                            </div>
                        )}
                        {chatHistory.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm shadow-sm ${
                                    msg.role === 'user' 
                                    ? 'bg-blue-600 text-white rounded-br-sm' 
                                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-sm border border-slate-200 dark:border-slate-700'
                                }`}>
                                    {msg.role === 'model' ? (
                                        <div className="prose prose-sm dark:prose-invert max-w-none">
                                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                                        </div>
                                    ) : msg.text}
                                </div>
                            </div>
                        ))}
                        {isAiLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-bl-sm px-5 py-4 border border-slate-200 dark:border-slate-700 flex gap-2 items-center">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex gap-2 items-end bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl border border-slate-200 dark:border-slate-700 focus-within:border-blue-500/50 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                            <input
                                type="text"
                                value={aiInput}
                                onChange={(e) => setAiInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                                placeholder="Ask a question..."
                                className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 py-2.5 text-slate-800 dark:text-white placeholder:text-slate-400"
                            />
                            <button 
                                onClick={handleAskAI}
                                disabled={isAiLoading || !aiInput.trim()}
                                className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white p-2.5 rounded-xl transition-colors"
                            >
                                <Icon name="ChevronRight" size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-slate-900 dark:text-white font-sans selection:bg-blue-500/20 dark:selection:bg-blue-500/30">
        {/* Theme Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed top-6 right-6 z-50 p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 shadow-lg transition-all"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <Icon name={isDarkMode ? "Sun" : "Moon"} size={20} />
        </button>

        {view === 'HOME' && renderHome()}
        {view === 'LEVEL_SELECT' && renderLevelSelect()}
        {view === 'DASHBOARD' && renderDashboard()}
    </div>
  );
};

export default App;
