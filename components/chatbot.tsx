'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Simple Knowledge Base
const KNOWLEDGE_BASE = [
    {
        keywords: ['solar', 'panel', 'subsidy', 'surya ghar', 'pm-surya'],
        response: "We offer Mono PERC Half-Cut Solar Panels (445Wp to 590Wp). Under the PM-Surya Ghar: Muft Bijli Yojana, you can get a subsidy of up to ₹78,000 for a 3kW system. We are proud TATA POWER partners."
    },
    {
        keywords: ['transformer', 'kva', 'power transformer', 'distribution'],
        response: "Our range includes high-quality distribution transformers (10 KVA to 2500 KVA) and power transformers, engineered for efficiency and low maintenance."
    },
    {
        keywords: ['transmission', 'line', '11kv', '22kv', '33kv', 'isolator', 'switch'],
        response: "We specialize in 11kV, 22kV, and 33kV transmission line materials, including AB switches, isolators, DO fuses, and lightning arresters."
    },
    {
        keywords: ['fabrication', 'structure', 'pole', '2-pole', 'decorative'],
        response: "We do custom industrial fabrication, including 2-pole structures and decorative streetlight poles, designed from scratch based on your engineering drawings."
    },
    {
        keywords: ['contact', 'phone', 'email', 'reach', 'call', 'address', 'location', 'midc'],
        response: "You can reach us at +91 93251 47803 or info@meghaenterprises.in. Our factory is located at Plot C-26, MIDC Waluj, Chhatrapati Sambhajinagar."
    },
    {
        keywords: ['client', 'partner', 'mseb', 'tata', 'hyundai', 'toyota', 'skoda', 'bajaj'],
        response: "Our clients include MSEB, CG Power, AWADA Energy, and major industrial players like Hyundai, Toyota, Skoda, and Bajaj."
    },
    {
        keywords: ['hello', 'hi', 'hey', 'help'],
        response: "Hello! I'm the Megha Enterprises Support Bot. I can help you with information about our Solar solutions, Transformers, Transmission materials, or Custom Fabrication. What would you like to know?"
    }
];

const QUICK_ACTIONS = [
    { label: "Solar Subsidy", query: "Tell me about solar subsidies." },
    { label: "Transformer Specs", query: "What transformers do you offer?" },
    { label: "Contact Details", query: "How do I contact you?" },
    { label: "Transmission Line", query: "Tell me about 11kV/33kV materials." },
];

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 'welcome',
            role: 'assistant',
            content: "Hello! I'm Megha Bot. Established in 2011, we are experts in everything from domestic solar to industrial fabrication. How can I assist you today?"
        }
    ]);
    const [userInput, setUserInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowNotification(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    const getBotResponse = (input: string) => {
        const lowerInput = input.toLowerCase();
        const match = KNOWLEDGE_BASE.find(item =>
            item.keywords.some(keyword => lowerInput.includes(keyword))
        );
        return match ? match.response : "I'm sorry, I don't have specific information on that. Please contact our team at info@meghaenterprises.in or call +91 93251 47803 for detailed inquiries.";
    };

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const newUserMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: text
        };

        setMessages(prev => [...prev, newUserMessage]);
        setUserInput('');
        setIsTyping(true);

        // Simulate bot thinking
        setTimeout(() => {
            const botResponse = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: getBotResponse(text)
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 8000); // 0.8s
    };

    const handleQuickAction = (query: string) => {
        handleSend(query);
    };

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-chatbot', handleOpen);
        return () => window.removeEventListener('open-chatbot', handleOpen);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Notification Bubble */}
            <AnimatePresence>
                {showNotification && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        className="bg-white dark:bg-slate-900 border border-blue-500/30 p-4 rounded-2xl shadow-2xl max-w-[240px] relative cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    >
                        <div className="flex items-center gap-3 mb-1">
                            <div className="bg-blue-600 p-1.5 rounded-full">
                                <Sparkles className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">Support Bot</span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                            Have a question about our products? I'm here to help!
                        </p>
                        <button
                            className="absolute -top-2 -right-2 bg-slate-200 dark:bg-slate-700 rounded-full p-1 hover:bg-slate-300 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowNotification(false);
                            }}
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Trigger Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "rounded-full h-14 w-14 p-0 shadow-2xl transition-all duration-500 border-2",
                        isOpen ? "bg-slate-900 border-slate-700 rotate-90" : "bg-[#0056b3] border-blue-400 hover:bg-blue-700"
                    )}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
                </Button>
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        className="w-[85vw] sm:w-[360px] h-[550px] bg-white/95 dark:bg-slate-950/95 rounded-[2rem] shadow-[0_20px_50px_rgba(0,86,179,0.3)] overflow-hidden border border-white/20 flex flex-col backdrop-blur-2xl"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#0056b3] to-[#004494] p-6 text-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-xl border border-white/10">
                                        <Bot className="h-6 w-6 text-blue-100" />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-xl tracking-tight leading-none mb-1">Megha Support</h3>
                                        <span className="text-[10px] uppercase font-black tracking-widest opacity-80 decoration-yellow-400 underline decoration-2 underline-offset-4">Automated assistant</span>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-none">
                            {messages.map((message) => (
                                <div key={message.id} className={cn("flex gap-3", message.role === 'user' ? 'justify-end' : 'justify-start')}>
                                    {message.role !== 'user' && (
                                        <div className="h-8 w-8 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-blue-100 dark:border-slate-800">
                                            <Bot className="h-4 w-4 text-[#0056b3]" />
                                        </div>
                                    )}
                                    <div className={cn(
                                        "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                                        message.role === 'user' ? 'bg-[#0056b3] text-white rounded-tr-none' : 'bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none'
                                    )}>
                                        {message.id === 'welcome' && (
                                            <div className="mb-3 rounded-lg overflow-hidden border border-blue-50 dark:border-slate-800">
                                                <Image src="/megha-building.jpg" alt="Megha Engineering" width={400} height={200} className="object-cover w-full h-20 opacity-90" />
                                                <div className="p-2 bg-blue-100/30 dark:bg-slate-800/50 text-[9px] font-black uppercase text-[#0056b3] text-center">Legacy Since 2011</div>
                                            </div>
                                        )}
                                        <p>{message.content}</p>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-3 justify-start">
                                    <div className="h-8 w-8 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-blue-100 dark:border-slate-800">
                                        <Bot className="h-4 w-4 text-[#0056b3]" />
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                        <span className="h-1.5 w-1.5 bg-[#0056b3] rounded-full animate-bounce" />
                                        <span className="h-1.5 w-1.5 bg-[#0056b3] rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="h-1.5 w-1.5 bg-[#0056b3] rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Chips */}
                        {messages.length < 3 && !isTyping && (
                            <div className="px-6 pb-4 flex flex-wrap gap-2">
                                {QUICK_ACTIONS.map((action, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleQuickAction(action.query)}
                                        className="text-[10px] font-bold uppercase bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-1.5 px-3 rounded-lg hover:border-[#0056b3] hover:text-[#0056b3] transition-all"
                                    >
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-6 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
                            <form onSubmit={(e) => { e.preventDefault(); handleSend(userInput); }} className="relative flex items-center gap-2">
                                <Input
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    placeholder="Type a message..."
                                    className="bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 rounded-xl pr-12 h-12 text-sm text-slate-900 dark:text-white"
                                />
                                <Button type="submit" disabled={!userInput.trim() || isTyping} size="icon" className="absolute right-1 h-10 w-10 bg-[#0056b3] hover:bg-[#004e9c] rounded-lg transition-all">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mt-4 text-center">Megha Engineering & Enterprises</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}