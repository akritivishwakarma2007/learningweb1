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
  
  // New state for accordion structure
  const [expandedTopicIds, setExpandedTopicIds] = useState<Set<string>>(new Set());
  const [activeSubTopic, setActiveSubTopic] = useState<SubTopic | null>(null);

  // AI State
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [aiInput, setAiInput] = useState('');
  const [showAiModal, setShowAiModal] = useState(false);
  
  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme === 'dark';
    }
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
    
    // Reset state
    setExpandedTopicIds(new Set());
    
    if (content && content.topics.length > 0) {
      // Auto expand the first topic
      setExpandedTopicIds(new Set([content.topics[0].id]));
      // Auto select the first subtopic of the first topic
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

    // Combine all code examples for context
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

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, showAiModal]);


  // --- Render Helpers ---

  const renderHome = () => (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
          CodeMastery AI
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
          Select a programming language to begin your journey. 
          <span className="block text-sm mt-3 text-slate-500 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 inline-block px-3 py-1 rounded-full">Powered by Gemini 2.5</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            onClick={() => handleLanguageSelect(lang)}
            className="group relative bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 p-8 rounded-2xl text-left flex flex-col h-full overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1"
          >
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${lang.color} opacity-10 rounded-bl-full transition-opacity group-hover:opacity-20`} />
            
            <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl w-fit border border-slate-100 dark:border-slate-700 shadow-sm group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
              <Icon name={lang.icon} size={40} className="text-slate-800 dark:text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{lang.name}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 flex-grow leading-relaxed">{lang.description}</p>
            
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
              Start Learning <Icon name="ChevronRight" size={16} className="ml-1" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderLevelSelect = () => (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <button onClick={goBack} className="flex items-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-10 transition-colors font-medium">
        <Icon name="ArrowLeft" size={20} className="mr-2" /> Back to Languages
      </button>
      
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 mb-6">
            <Icon name={selectedLang?.icon || 'Code'} size={32} className="text-slate-800 dark:text-white" />
        </div>
        <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-white">Select Proficiency Level</h2>
        <p className="text-slate-500 dark:text-slate-400">Curriculum for <span className="text-slate-900 dark:text-white font-bold">{selectedLang?.name}</span></p>
      </div>

      <div className="grid gap-6">
        {(['Beginner', 'Intermediate', 'Advanced'] as SkillLevel[]).map((level) => {
           const hasContent = CONTENT[selectedLang!.id]?.[level];
           return (
            <button
              key={level}
              onClick={() => handleLevelSelect(level)}
              disabled={!hasContent}
              className={`flex items-center p-8 rounded-2xl border transition-all duration-300 ${
                hasContent 
                ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg cursor-pointer' 
                : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 opacity-60 cursor-not-allowed grayscale'
              }`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mr-8 font-bold text-lg shadow-sm ${
                level === 'Beginner' ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800' :
                level === 'Intermediate' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800' :
                'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-800'
              }`}>
                {level === 'Beginner' ? '1' : level === 'Intermediate' ? '2' : '3'}
              </div>
              <div className="text-left flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{level}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {hasContent ? `Master ${level.toLowerCase()} concepts and syntax` : 'Content currently in development'}
                </p>
              </div>
              {hasContent && <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-full"><Icon name="ChevronRight" className="text-slate-400 dark:text-slate-500" /></div>}
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
        {/* Sidebar */}
        <div className="w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col hidden md:flex shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)] z-10">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <button onClick={goBack} className="text-xs font-semibold text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 mb-6 flex items-center uppercase tracking-wider transition-colors">
               <Icon name="ArrowLeft" size={12} className="mr-1"/> Change Level
            </button>
            <div className="flex items-center gap-3 mb-1">
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                    <Icon name={selectedLang?.icon || 'Code'} className="text-slate-900 dark:text-white" size={20}/>
                </div>
                <div>
                    <h2 className="font-bold text-slate-900 dark:text-white leading-none">{selectedLang?.name}</h2>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{selectedLevel}</span>
                </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            <div className="px-4 py-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Modules</div>
            
            {courseData.topics.map(topic => {
                const isExpanded = expandedTopicIds.has(topic.id);
                return (
                    <div key={topic.id} className="mb-2">
                        {/* Parent Topic Header */}
                        <button
                            onClick={() => toggleTopicExpand(topic.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-between ${
                                isExpanded ? 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }`}
                        >
                            <span>{topic.title}</span>
                            <Icon 
                                name="ChevronRight" 
                                size={14} 
                                className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                            />
                        </button>

                        {/* Subtopics List (Dropdown) */}
                        {isExpanded && (
                            <div className="ml-2 mt-1 pl-2 border-l-2 border-slate-100 dark:border-slate-800 space-y-1">
                                {topic.subTopics.map(sub => (
                                    <button
                                        key={sub.id}
                                        onClick={() => setActiveSubTopic(sub)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center ${
                                            activeSubTopic?.id === sub.id
                                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${activeSubTopic?.id === sub.id ? 'bg-blue-500 dark:bg-blue-400' : 'bg-transparent'}`}></div>
                                        {sub.title}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50 dark:bg-slate-950">
            {/* Mobile Header */}
            <div className="md:hidden p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center shadow-sm">
                <button onClick={goBack} className="text-slate-600 dark:text-slate-300"><Icon name="ArrowLeft"/></button>
                <span className="font-bold text-slate-900 dark:text-white">{selectedLang?.name} · {selectedLevel}</span>
            </div>

            <div className="flex-1 overflow-y-auto p-6 lg:p-12 scroll-smooth">
                {activeSubTopic ? (
                    <div className="max-w-5xl mx-auto pb-24">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 lg:p-10 mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">{activeSubTopic.title}</h1>
                            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none text-slate-600 dark:text-slate-300">
                                <ReactMarkdown>{activeSubTopic.content}</ReactMarkdown>
                            </div>
                        </div>

                        {/* Render Multiple Code Examples */}
                        {activeSubTopic.codeExamples && activeSubTopic.codeExamples.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                   <Icon name="Terminal" className="mr-2" size={24}/> Code Examples
                                </h3>
                                
                                {activeSubTopic.codeExamples.map((example, idx) => (
                                    <div key={idx} className="mb-6 last:mb-0">
                                        <div className="flex items-center justify-between px-4 py-2 bg-slate-200 dark:bg-slate-800 rounded-t-lg border-b border-slate-300 dark:border-slate-700">
                                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{example.title}</span>
                                        </div>
                                        <div className="rounded-b-lg overflow-hidden shadow-lg ring-1 ring-slate-900/5 bg-[#0f172a]">
                                            <div className="flex items-center justify-between px-4 py-2 bg-[#1e293b] border-b border-slate-700">
                                                <div className="flex gap-1.5 opacity-70">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                                </div>
                                                <span className="text-xs text-slate-500 font-mono">Example {idx + 1}</span>
                                            </div>
                                            <div className="p-6 md:p-8 overflow-x-auto bg-[#0f172a]">
                                                <pre className="text-sm md:text-base font-mono leading-relaxed text-blue-100">
                                                    <code>{example.code}</code>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Exercise Block */}
                        {activeSubTopic.exercise && (
                            <div className="bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-8 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 dark:bg-emerald-900/20 rounded-bl-full opacity-50 pointer-events-none"></div>
                                <h3 className="flex items-center text-emerald-700 dark:text-emerald-400 font-bold text-lg mb-4">
                                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg mr-3">
                                        <Icon name="CheckCircle" size={20}/>
                                    </div>
                                    Practice Exercise
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg">{activeSubTopic.exercise}</p>
                                <button 
                                    onClick={handleGenerateExercise}
                                    className="group text-sm font-medium bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow flex items-center gap-2"
                                >
                                    <Icon name="Sparkles" size={16} className="text-emerald-500 group-hover:text-emerald-600"/>
                                    Generate New Exercise with AI
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-600">
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-full shadow-sm mb-6">
                            <Icon name="BookOpen" size={48} className="text-slate-300 dark:text-slate-600"/>
                        </div>
                        <p className="text-lg font-medium text-slate-500 dark:text-slate-400">Select a topic from the sidebar to start learning</p>
                    </div>
                )}
            </div>

            {/* AI Floating Button */}
            <button
                onClick={() => setShowAiModal(!showAiModal)}
                className="absolute bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-blue-600/30 transition-all z-20 flex items-center justify-center"
                title="Ask AI Tutor"
            >
                {showAiModal ? <Icon name="ChevronRight" className="rotate-90"/> : <Icon name="MessageSquare" />}
            </button>

            {/* AI Chat Modal/Panel */}
            {showAiModal && (
                <div className="absolute bottom-24 right-4 md:right-8 w-[90vw] md:w-[450px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[600px] h-[60vh] z-20 animate-in fade-in slide-in-from-bottom-4 ring-1 ring-slate-900/5">
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 rounded-t-2xl flex justify-between items-center backdrop-blur-sm">
                        <h3 className="font-bold flex items-center gap-2 text-slate-800 dark:text-white">
                            <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                <Icon name="Brain" size={16} className="text-blue-600 dark:text-blue-400"/> 
                            </div>
                            AI Tutor
                        </h3>
                        <button onClick={() => setChatHistory([])} className="text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Clear Chat</button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-white dark:bg-slate-900">
                        {chatHistory.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full text-center p-4">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-3">
                                    <Icon name="Sparkles" className="text-blue-400" size={20}/>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                                    Hi! I'm your AI Tutor. <br/>Ask me to explain the code or help with the exercise.
                                </p>
                            </div>
                        )}
                        {chatHistory.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl p-4 text-sm shadow-sm ${
                                    msg.role === 'user' 
                                    ? 'bg-blue-600 text-white rounded-br-none' 
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-700'
                                }`}>
                                    {msg.role === 'model' ? (
                                        <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                                        </div>
                                    ) : msg.text}
                                </div>
                            </div>
                        ))}
                        {isAiLoading && (
                            <div className="flex justify-start">
                                <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-none p-4 text-sm flex gap-2 items-center border border-slate-200 dark:border-slate-700">
                                    <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce delay-200"></div>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 rounded-b-2xl backdrop-blur-sm">
                        <div className="flex gap-2 relative">
                            <input
                                type="text"
                                value={aiInput}
                                onChange={(e) => setAiInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                                placeholder="Type your question..."
                                className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 shadow-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            />
                            <button 
                                onClick={handleAskAI}
                                disabled={isAiLoading || !aiInput.trim()}
                                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl shadow-sm hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center aspect-square"
                            >
                                <Icon name="MessageSquare" size={18} className="fill-current"/>
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans selection:bg-blue-100 dark:selection:bg-blue-900/50 selection:text-blue-900 dark:selection:text-blue-100">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm hover:shadow-md transition-all"
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