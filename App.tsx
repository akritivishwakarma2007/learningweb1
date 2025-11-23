import React, { useState, useEffect, useRef } from 'react';
import { LANGUAGES, CONTENT } from './data';
import { Language, SkillLevel, Topic, ChatMessage } from './types';
import { Icon } from './components/Icon';
import { askGeminiTutor, generateNewExercise } from './services/geminiService';
import ReactMarkdown from 'react-markdown'; // Assuming standard libraries are okay, but if not, plain text render is fallback.
// Since I can't guarantee `react-markdown` is installed in the environment, I will build a simple text display with basic formatting.

type ViewState = 'HOME' | 'LEVEL_SELECT' | 'DASHBOARD';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedLang, setSelectedLang] = useState<Language | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | null>(null);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);

  // AI State
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [aiInput, setAiInput] = useState('');
  const [showAiModal, setShowAiModal] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLang(lang);
    setView('LEVEL_SELECT');
  };

  const handleLevelSelect = (level: SkillLevel) => {
    setSelectedLevel(level);
    // Set first topic as active by default if content exists
    const content = CONTENT[selectedLang!.id]?.[level];
    if (content && content.topics.length > 0) {
      setActiveTopic(content.topics[0]);
    } else {
      setActiveTopic(null);
    }
    setView('DASHBOARD');
  };

  const goBack = () => {
    if (view === 'DASHBOARD') setView('LEVEL_SELECT');
    else if (view === 'LEVEL_SELECT') {
      setSelectedLang(null);
      setView('HOME');
    }
  };

  const handleAskAI = async () => {
    if (!aiInput.trim() || !selectedLang || !activeTopic) return;
    
    const userMsg: ChatMessage = { role: 'user', text: aiInput };
    setChatHistory(prev => [...prev, userMsg]);
    setAiInput('');
    setIsAiLoading(true);

    const response = await askGeminiTutor(
        selectedLang.name,
        activeTopic.title,
        activeTopic.codeExample,
        userMsg.text
    );

    setChatHistory(prev => [...prev, { role: 'model', text: response }]);
    setIsAiLoading(false);
  };

  const handleGenerateExercise = async () => {
      if(!selectedLang || !selectedLevel || !activeTopic) return;
      setIsAiLoading(true);
      setShowAiModal(true); // Ensure modal is open to see result
      
      const prompt = "Generate a new practice exercise for me.";
      const userMsg: ChatMessage = { role: 'user', text: prompt };
      setChatHistory(prev => [...prev, userMsg]);

      const response = await generateNewExercise(selectedLang.name, selectedLevel, activeTopic.title);
      
      setChatHistory(prev => [...prev, { role: 'model', text: response }]);
      setIsAiLoading(false);
  }

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, showAiModal]);


  // --- Render Helpers ---

  const renderHome = () => (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          CodeMastery AI
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          Choose your path. Master a language. 
          <span className="block text-sm mt-2 text-slate-500">Powered by Gemini 2.5</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            onClick={() => handleLanguageSelect(lang)}
            className="group relative bg-card hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 p-8 rounded-2xl text-left flex flex-col h-full overflow-hidden shadow-lg hover:shadow-blue-900/20"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${lang.color} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity`} />
            <div className="mb-6 p-4 bg-slate-900/50 rounded-xl w-fit border border-slate-700 group-hover:border-slate-500 transition-colors">
              <Icon name={lang.icon} size={40} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{lang.name}</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">{lang.description}</p>
            <div className="flex items-center text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
              Start Learning <Icon name="ChevronRight" size={16} className="ml-1" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderLevelSelect = () => (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={goBack} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
        <Icon name="ArrowLeft" size={20} className="mr-2" /> Back to Languages
      </button>
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">Select Your Skill Level</h2>
        <p className="text-slate-400">Current Language: <span className="text-blue-400 font-semibold">{selectedLang?.name}</span></p>
      </div>

      <div className="grid gap-6">
        {(['Beginner', 'Intermediate', 'Advanced'] as SkillLevel[]).map((level) => {
           const hasContent = CONTENT[selectedLang!.id]?.[level];
           return (
            <button
              key={level}
              onClick={() => handleLevelSelect(level)}
              disabled={!hasContent}
              className={`flex items-center p-6 rounded-xl border transition-all duration-300 ${
                hasContent 
                ? 'bg-card border-slate-700 hover:border-emerald-500 hover:bg-slate-800 cursor-pointer' 
                : 'bg-slate-900/50 border-slate-800 opacity-50 cursor-not-allowed'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-6 ${
                level === 'Beginner' ? 'bg-emerald-500/20 text-emerald-400' :
                level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                'bg-purple-500/20 text-purple-400'
              }`}>
                {level === 'Beginner' ? '1' : level === 'Intermediate' ? '2' : '3'}
              </div>
              <div className="text-left flex-grow">
                <h3 className="text-xl font-bold">{level}</h3>
                <p className="text-sm text-slate-400">
                    {hasContent ? `Explore ${level} concepts in ${selectedLang?.name}` : 'Coming soon...'}
                </p>
              </div>
              {hasContent && <Icon name="ChevronRight" className="text-slate-500" />}
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
      <div className="flex h-screen overflow-hidden bg-darker">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-slate-800 flex flex-col hidden md:flex">
          <div className="p-6 border-b border-slate-800">
            <button onClick={goBack} className="text-xs font-mono text-slate-500 hover:text-white mb-4 flex items-center">
               <Icon name="ArrowLeft" size={12} className="mr-1"/> CHANGE LEVEL
            </button>
            <h2 className="font-bold text-lg text-white flex items-center gap-2">
                <Icon name={selectedLang?.icon || 'Code'} className="text-blue-500" size={20}/>
                {selectedLang?.name}
            </h2>
            <span className="text-xs text-emerald-400 font-mono border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded mt-2 inline-block">
                {selectedLevel}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Topics</div>
            {courseData.topics.map(topic => (
                <button
                    key={topic.id}
                    onClick={() => setActiveTopic(topic)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors flex items-center ${
                        activeTopic?.id === topic.id 
                        ? 'bg-blue-600 text-white' 
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                >
                    {activeTopic?.id === topic.id && <Icon name="Play" size={12} className="mr-2 fill-current"/>}
                    {topic.title}
                </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            {/* Mobile Header */}
            <div className="md:hidden p-4 bg-card border-b border-slate-800 flex justify-between items-center">
                <button onClick={goBack}><Icon name="ArrowLeft"/></button>
                <span className="font-bold">{selectedLang?.name} - {selectedLevel}</span>
            </div>

            <div className="flex-1 overflow-y-auto p-6 lg:p-12 scroll-smooth">
                {activeTopic ? (
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{activeTopic.title}</h1>
                            <div className="prose prose-invert prose-lg text-slate-300">
                                <p>{activeTopic.content}</p>
                            </div>
                        </div>

                        {/* Code Block */}
                        <div className="bg-[#0d1117] rounded-xl border border-slate-800 overflow-hidden mb-8 shadow-2xl">
                            <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-800">
                                <span className="text-xs font-mono text-slate-400">Example Code</span>
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                </div>
                            </div>
                            <pre className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed text-blue-100">
                                <code>{activeTopic.codeExample}</code>
                            </pre>
                        </div>

                        {/* Exercise Block */}
                        <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-6 mb-8">
                            <h3 className="flex items-center text-emerald-400 font-bold text-lg mb-3">
                                <Icon name="CheckCircle" className="mr-2" size={20}/>
                                Practice Exercise
                            </h3>
                            <p className="text-slate-300 mb-4">{activeTopic.exercise}</p>
                            <button 
                                onClick={handleGenerateExercise}
                                className="text-sm bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <Icon name="Sparkles" size={14}/>
                                Generate Another Exercise with AI
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-500">
                        <Icon name="BookOpen" size={48} className="mb-4 opacity-50"/>
                        <p>Select a topic to start learning</p>
                    </div>
                )}
            </div>

            {/* AI Floating Button */}
            <button
                onClick={() => setShowAiModal(!showAiModal)}
                className="absolute bottom-8 right-8 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-xl hover:shadow-blue-500/30 transition-all z-20"
                title="Ask AI Tutor"
            >
                {showAiModal ? <Icon name="ChevronRight" className="rotate-90"/> : <Icon name="Sparkles" />}
            </button>

            {/* AI Chat Modal/Panel */}
            {showAiModal && (
                <div className="absolute bottom-24 right-4 md:right-8 w-[90vw] md:w-96 bg-card border border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[60vh] z-20 animate-in fade-in slide-in-from-bottom-4">
                    <div className="p-4 border-b border-slate-700 bg-slate-800/50 rounded-t-2xl flex justify-between items-center">
                        <h3 className="font-bold flex items-center gap-2">
                            <Icon name="Brain" className="text-purple-400"/> AI Tutor
                        </h3>
                        <button onClick={() => setChatHistory([])} className="text-xs text-slate-400 hover:text-white">Clear</button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {chatHistory.length === 0 && (
                            <p className="text-center text-slate-500 text-sm py-4">
                                Ask me to explain the code or help with the exercise!
                            </p>
                        )}
                        {chatHistory.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-lg p-3 text-sm ${
                                    msg.role === 'user' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-slate-700 text-slate-200'
                                }`}>
                                    {msg.role === 'model' ? (
                                        <div className="prose prose-invert prose-sm max-w-none">
                                            {/* Simple renderer for line breaks if not using markdown lib, 
                                                but here we assume simple text mapping */}
                                             {msg.text.split('\n').map((line, i) => <p key={i} className="mb-1">{line}</p>)}
                                        </div>
                                    ) : msg.text}
                                </div>
                            </div>
                        ))}
                        {isAiLoading && (
                            <div className="flex justify-start">
                                <div className="bg-slate-700 rounded-lg p-3 text-sm flex gap-2 items-center">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    <div className="p-3 border-t border-slate-700 bg-slate-800/30 rounded-b-2xl">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={aiInput}
                                onChange={(e) => setAiInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                                placeholder="Ask a question..."
                                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                            />
                            <button 
                                onClick={handleAskAI}
                                disabled={isAiLoading || !aiInput.trim()}
                                className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Icon name="MessageSquare" size={18}/>
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
    <div className="min-h-screen bg-dark text-slate-200 font-sans selection:bg-blue-500/30">
        {view === 'HOME' && renderHome()}
        {view === 'LEVEL_SELECT' && renderLevelSelect()}
        {view === 'DASHBOARD' && renderDashboard()}
    </div>
  );
};

export default App;