'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  GitBranch, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  Search, 
  X, 
  Calendar, 
  ChevronRight, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  Flame,
  Zap
} from 'lucide-react';

export interface TimelineMilestone {
  id: string;
  startYear: number;
  endYear: number | string;
  yearDisplay: string;
  category: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  description: string;
  bullets?: string[];
  stackTags: string[];
  highlight?: boolean;
}

export const TimelapseSection: React.FC = () => {
  const { t } = useLanguage();
  
  // State variables
  const [filter, setFilter] = useState<'all' | 'work' | 'education' | 'highlight'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineMilestone | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'tree' | 'timeline'>('tree');

  const playbackTimerRef = useRef<NodeJS.Timeout | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Helper to extract numeric start year for sorting
  const extractStartYear = (dateStr: string): number => {
    const match = dateStr.match(/\b(20\d{2}|19\d{2})\b/);
    return match ? parseInt(match[1], 10) : 2020;
  };

  // Build unified milestones array dynamically from current language translations
  const milestones: TimelineMilestone[] = useMemo(() => {
    const list: TimelineMilestone[] = [];

    // Process Work Experiences
    if (t.experiences && Array.isArray(t.experiences)) {
      t.experiences.forEach((exp, idx) => {
        const startYr = extractStartYear(exp.date);
        const stackArr: string[] = [];
        if (exp.stack) {
          if (exp.stack.f) stackArr.push(...exp.stack.f.split(',').map(s => s.trim()));
          if (exp.stack.l) stackArr.push(...exp.stack.l.split(',').map(s => s.trim()));
          if (exp.stack.d) stackArr.push(...exp.stack.d.split(',').map(s => s.trim()));
        }

        list.push({
          id: `work-${idx}`,
          startYear: startYr,
          endYear: exp.date.includes('Actualidad') || exp.date.includes('Present') ? 'Present' : startYr,
          yearDisplay: exp.date,
          category: 'work',
          title: exp.role,
          organization: exp.company,
          description: exp.desc,
          bullets: exp.bullets,
          stackTags: Array.from(new Set(stackArr.filter(Boolean))),
          highlight: exp.highlight || false,
        });
      });
    }

    // Process Education & Certifications
    if (t.education && Array.isArray(t.education)) {
      t.education.forEach((edu, idx) => {
        const startYr = extractStartYear(edu.date);
        const isCert = edu.type === 'certification';
        const isMaster = edu.type === 'master';
        
        let tags: string[] = [];
        if (edu.title.toLowerCase().includes('react')) tags = ['React', 'Frontend', 'Architecture'];
        else if (edu.title.toLowerCase().includes('sql')) tags = ['SQL', 'PostgreSQL', 'Databases'];
        else if (edu.title.toLowerCase().includes('data science') || edu.title.toLowerCase().includes('python')) tags = ['Python', 'Data Science', 'Machine Learning'];
        else if (edu.title.toLowerCase().includes('cloud') || edu.title.toLowerCase().includes('aws')) tags = ['AWS', 'Docker', 'DevOps', 'Cloud'];
        else if (edu.title.toLowerCase().includes('dam') || edu.title.toLowerCase().includes('multiplataforma')) tags = ['Java', 'Android', 'SQL', 'DAM'];
        else if (isMaster) tags = ['Full Stack', 'Web Architecture', 'Node.js', 'React'];
        else tags = ['Software Engineering', 'Computer Science', 'Agile'];

        list.push({
          id: `edu-${idx}`,
          startYear: startYr,
          endYear: startYr,
          yearDisplay: edu.date,
          category: isCert ? 'certification' : 'education',
          title: edu.title,
          organization: edu.school,
          description: isCert ? (t.eduCertLabel || 'Certificación Oficial Regulada') : isMaster ? (t.eduMasterLabel || 'Máster de Especialización') : (t.eduDegreeLabel || 'Titulación Universitaria / Grado'),
          stackTags: tags,
          highlight: edu.type === 'degree' || isMaster || edu.title.includes('Data Science'),
        });
      });
    }

    // Sort chronologically descending (newest first: 2026 -> 2008)
    return list.sort((a, b) => b.startYear - a.startYear);
  }, [t]);

  // Filtered milestones
  const filteredMilestones = useMemo(() => {
    return milestones.filter(item => {
      // Category filter
      if (filter === 'work' && item.category !== 'work') return false;
      if (filter === 'education' && item.category !== 'education' && item.category !== 'certification') return false;
      if (filter === 'highlight' && !item.highlight) return false;

      // Query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchOrg = item.organization.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchTags = item.stackTags.some(t => t.toLowerCase().includes(q));
        const matchYear = item.yearDisplay.toLowerCase().includes(q);
        return matchTitle || matchOrg || matchDesc || matchTags || matchYear;
      }

      return true;
    });
  }, [milestones, filter, searchQuery]);

  // Handle Play / Timelapse walkthrough mode
  useEffect(() => {
    if (isPlaying) {
      // Chronological order for playback (oldest to newest: 2008 -> 2026)
      const playbackList = [...filteredMilestones].reverse();
      if (playbackList.length === 0) {
        setIsPlaying(false);
        return;
      }

      const currentIndex = activeStepIndex === null ? 0 : (activeStepIndex + 1) % playbackList.length;
      setActiveStepIndex(currentIndex);

      const currentItem = playbackList[currentIndex];
      if (currentItem && itemRefs.current[currentItem.id]) {
        itemRefs.current[currentItem.id]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }

      playbackTimerRef.current = setTimeout(() => {
        if (currentIndex === playbackList.length - 1) {
          setIsPlaying(false);
        }
      }, 3000);
    } else {
      if (playbackTimerRef.current) clearTimeout(playbackTimerRef.current);
    }

    return () => {
      if (playbackTimerRef.current) clearTimeout(playbackTimerRef.current);
    };
  }, [isPlaying, activeStepIndex, filteredMilestones]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (activeStepIndex === null || activeStepIndex >= filteredMilestones.length - 1) {
        setActiveStepIndex(0);
      }
      setIsPlaying(true);
    }
  };

  const resetPlay = () => {
    setIsPlaying(false);
    setActiveStepIndex(null);
  };

  return (
    <section id="timelapse" className="relative py-20 bg-slate-950 overflow-hidden text-slate-100">
      
      {/* Background Decorator Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/10">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>{t.timelapseBadge || 'Rama Cronológica 2008 - 2026'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {t.timelapseTitle || 'Timelapse de Vida & Career Branch'}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
            {t.timelapseSubtitle || 'Visualización interactiva y unificada de mi trayectoria académica y experiencia profesional a lo largo de +12 años.'}
          </p>

          {/* Life Summary Stat Pills Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-bold">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-blue-300">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>+12 Años de Desarrollo</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-purple-300">
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span>5+ Roles Liderados</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-emerald-300">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>7+ Titulaciones & Certificaciones</span>
            </div>
          </div>
        </div>

        {/* Interactive Controls Bar */}
        <div className="mt-12 p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => { setFilter('all'); resetPlay(); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{t.timelapseFilterAll || 'Todos los Hitos'}</span>
                <span className="ml-1 px-1.5 py-0.2 rounded-full bg-slate-950/60 text-[10px]">
                  {milestones.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => { setFilter('work'); resetPlay(); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 ${
                  filter === 'work'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-400/40'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-purple-300" />
                <span>{t.timelapseFilterWork || '💼 Experiencia Laboral'}</span>
              </button>

              <button
                type="button"
                onClick={() => { setFilter('education'); resetPlay(); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 ${
                  filter === 'education'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 border border-emerald-400/40'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-emerald-300" />
                <span>{t.timelapseFilterEdu || '🎓 Estudios & Certificaciones'}</span>
              </button>

              <button
                type="button"
                onClick={() => { setFilter('highlight'); resetPlay(); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 ${
                  filter === 'highlight'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30 font-black'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.timelapseFilterHighlight || '⭐ Destacados'}</span>
              </button>
            </div>

            {/* Playback Controls & Search Input */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-center lg:justify-end">
              
              {/* Play Timelapse Button */}
              <button
                type="button"
                onClick={togglePlay}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-xs transition-all shadow-md active:scale-95 ${
                  isPlaying
                    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 animate-pulse'
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border border-blue-400/30'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>{t.timelapsePauseBtn || 'Pausar'}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{t.timelapsePlayBtn || '▶ Reproducir Timelapse'}</span>
                  </>
                )}
              </button>

              {activeStepIndex !== null && (
                <button
                  type="button"
                  onClick={resetPlay}
                  className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title={t.timelapseResetBtn || 'Reiniciar'}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}

              {/* View Mode Toggle Button */}
              <button
                type="button"
                onClick={() => setViewMode(viewMode === 'tree' ? 'timeline' : 'tree')}
                className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
                title="Cambiar Modo de Vista"
              >
                <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">{viewMode === 'tree' ? 'Rama Dual' : 'Línea Temporal'}</span>
              </button>

              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64 max-w-xs">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.timelapseSearchPlaceholder || 'Buscar hito o tecnología...'}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-8 pr-7 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

            </div>

          </div>

          {/* Active Playback Step Indicator Banner */}
          {isPlaying && activeStepIndex !== null && (
            <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-200 text-xs flex items-center justify-between animate-fade-in">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
                <span className="font-bold">
                  Modo Recorrido Activo: Paso {activeStepIndex + 1} de {filteredMilestones.length}
                </span>
              </div>
              <span className="text-[11px] font-mono text-blue-300">
                {filteredMilestones[filteredMilestones.length - 1 - activeStepIndex]?.yearDisplay}
              </span>
            </div>
          )}
        </div>

        {/* Dynamic Branch Tree View vs Timeline View */}
        <div className="mt-16 relative">
          
          {/* Central Vertical Trunk Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-500 to-slate-800 rounded-full opacity-60 shadow-[0_0_15px_rgba(59,130,246,0.5)] pointer-events-none" />

          {/* Milestones Container */}
          <div className="space-y-12 relative">
            {filteredMilestones.map((item, index) => {
              const isWork = item.category === 'work';
              const isRightSide = !isWork; // Work on Left, Education on Right for dual branch
              const isHighlightedStep = isPlaying && activeStepIndex !== null && filteredMilestones[filteredMilestones.length - 1 - activeStepIndex]?.id === item.id;
              
              return (
                <div
                  key={item.id}
                  ref={(el) => { itemRefs.current[item.id] = el; }}
                  className={`relative flex flex-col md:flex-row items-center transition-all duration-500 ${
                    viewMode === 'tree'
                      ? isRightSide
                        ? 'md:flex-row-reverse'
                        : ''
                      : ''
                  }`}
                >
                  
                  {/* Central Node Dot / Badge */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer shadow-xl ${
                        isHighlightedStep
                          ? 'bg-amber-400 border-white scale-125 shadow-amber-500/50 ring-4 ring-amber-400/30'
                          : item.highlight
                          ? isWork 
                            ? 'bg-purple-600 border-purple-300 text-white shadow-purple-600/50'
                            : 'bg-emerald-600 border-emerald-300 text-white shadow-emerald-600/50'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:scale-110 hover:border-blue-400'
                      }`}
                      onClick={() => setSelectedMilestone(item)}
                    >
                      {isWork ? (
                        <Briefcase className="w-4 h-4" />
                      ) : item.category === 'certification' ? (
                        <Award className="w-4 h-4" />
                      ) : (
                        <GraduationCap className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Content Card Side */}
                  <div 
                    className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${
                      viewMode === 'tree'
                        ? isRightSide
                          ? 'md:pr-8 md:text-right'
                          : 'md:pl-8 md:text-left'
                        : 'md:pl-10'
                    }`}
                  >
                    <div 
                      onClick={() => setSelectedMilestone(item)}
                      className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-xl ${
                        isHighlightedStep
                          ? 'bg-slate-900/95 border-amber-400 ring-2 ring-amber-400/30 shadow-amber-500/20 scale-[1.02]'
                          : item.highlight
                          ? 'bg-slate-900/90 border-slate-700/90 hover:border-blue-500/60 hover:shadow-blue-500/10'
                          : 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90'
                      }`}
                    >
                      
                      {/* Card Header: Year & Category Tag */}
                      <div className={`flex flex-wrap items-center gap-2 mb-2 ${viewMode === 'tree' && isRightSide ? 'md:justify-end' : 'justify-start'}`}>
                        
                        {/* Year Badge */}
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 font-extrabold text-[11px] font-mono">
                          <Calendar className="w-3 h-3 text-blue-400" />
                          {item.yearDisplay}
                        </span>

                        {/* Category Pill */}
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                          isWork
                            ? 'bg-purple-500/10 text-purple-300 border border-purple-500/30'
                            : item.category === 'certification'
                            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                            : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {isWork ? 'Experiencia Laboral' : item.category === 'certification' ? 'Certificación Regulada' : 'Estudios'}
                        </span>

                        {item.highlight && (
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-amber-400/10 text-amber-400 border border-amber-400/30 text-[10px] font-bold">
                            <Flame className="w-2.5 h-2.5 fill-amber-400" />
                            Destacado
                          </span>
                        )}
                      </div>

                      {/* Role/Title */}
                      <h3 className="text-base sm:text-lg font-black text-white group-hover:text-blue-400 transition-colors leading-tight">
                        {item.title}
                      </h3>

                      {/* Company/School */}
                      <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1 flex items-center gap-1.5">
                        <span className="text-blue-400">@</span>
                        <span>{item.organization}</span>
                      </p>

                      {/* Short Description */}
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed font-medium">
                        {item.description}
                      </p>

                      {/* Stack Tags */}
                      {item.stackTags && item.stackTags.length > 0 && (
                        <div className={`mt-3.5 flex flex-wrap gap-1.5 ${viewMode === 'tree' && isRightSide ? 'md:justify-end' : 'justify-start'}`}>
                          {item.stackTags.slice(0, 4).map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-slate-300 text-[10px] font-bold"
                            >
                              {tag}
                            </span>
                          ))}
                          {item.stackTags.length > 4 && (
                            <span className="px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-400 text-[10px]">
                              +{item.stackTags.length - 4}
                            </span>
                          )}
                        </div>
                      )}

                      {/* View Details Hint */}
                      <div className={`mt-3 pt-2.5 border-t border-slate-800/60 flex items-center text-[11px] font-bold text-blue-400 group-hover:text-blue-300 ${viewMode === 'tree' && isRightSide ? 'md:justify-end' : 'justify-start'}`}>
                        <span>Ver detalles de este hito</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer Column for Tree Symmetry */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Detail Inspector Modal */}
      {selectedMilestone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setSelectedMilestone(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
                  {selectedMilestone.yearDisplay}
                </span>
                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  selectedMilestone.category === 'work'
                    ? 'bg-purple-500/10 text-purple-300 border border-purple-500/30'
                    : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {selectedMilestone.category === 'work' ? 'Experiencia Laboral' : 'Estudios & Titulaciones'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {selectedMilestone.title}
              </h3>

              <p className="text-sm font-bold text-blue-400 flex items-center gap-1.5">
                <span>@</span>
                <span>{selectedMilestone.organization}</span>
              </p>
            </div>

            {/* Description & Bullets */}
            <div className="space-y-4 pt-2 border-t border-slate-800">
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {selectedMilestone.description}
              </p>

              {selectedMilestone.bullets && selectedMilestone.bullets.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Logros & Responsabilidades Clave:
                  </h4>
                  <ul className="space-y-2">
                    {selectedMilestone.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Technologies & Skills */}
            {selectedMilestone.stackTags && selectedMilestone.stackTags.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Stack Tecnológico & Competencias:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMilestone.stackTags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-blue-300 font-bold text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Footer CTA */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedMilestone(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
              >
                Cerrar Inspector
              </button>

              <a
                href="#contact"
                onClick={() => setSelectedMilestone(null)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all"
              >
                <span>Contactar para esta experiencia</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
