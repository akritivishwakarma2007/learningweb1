import React from 'react';
import { 
  Code, 
  Terminal, 
  Cpu, 
  ChevronRight, 
  BookOpen, 
  Brain, 
  ArrowLeft,
  Sparkles,
  MessageSquare,
  Play,
  CheckCircle,
  Coffee,   // Java
  FileCode, // TypeScript
  Zap,       // Go
  Sun,
  Moon,
  Palette, // CSS
  Gem,     // Ruby
  Database, // SQL
  Smartphone, // Swift/Kotlin
  Globe,    // HTML/PHP
  Hash      // C# (using Hash for C/C++)
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  switch (name) {
    case 'Python': return <Terminal size={size} className={className} />;
    case 'Javascript': return <Code size={size} className={className} />;
    case 'Cpp': return <Cpu size={size} className={className} />;
    case 'C': return <Cpu size={size} className={className} />;
    case 'Java': return <Coffee size={size} className={className} />;
    case 'TypeScript': return <FileCode size={size} className={className} />;
    case 'Go': return <Zap size={size} className={className} />;
    case 'CSS': return <Palette size={size} className={className} />;
    case 'HTML': return <Globe size={size} className={className} />;
    case 'Ruby': return <Gem size={size} className={className} />;
    case 'PHP': return <Globe size={size} className={className} />;
    case 'SQL': return <Database size={size} className={className} />;
    case 'PL/SQL': return <Database size={size} className={className} />;
    case 'Swift': return <Smartphone size={size} className={className} />;
    case 'Kotlin': return <Smartphone size={size} className={className} />;
    
    // UI Icons
    case 'ChevronRight': return <ChevronRight size={size} className={className} />;
    case 'BookOpen': return <BookOpen size={size} className={className} />;
    case 'Brain': return <Brain size={size} className={className} />;
    case 'ArrowLeft': return <ArrowLeft size={size} className={className} />;
    case 'Sparkles': return <Sparkles size={size} className={className} />;
    case 'MessageSquare': return <MessageSquare size={size} className={className} />;
    case 'Play': return <Play size={size} className={className} />;
    case 'CheckCircle': return <CheckCircle size={size} className={className} />;
    case 'Sun': return <Sun size={size} className={className} />;
    case 'Moon': return <Moon size={size} className={className} />;
    default: return <Code size={size} className={className} />;
  }
};