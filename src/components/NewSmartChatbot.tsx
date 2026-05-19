"use client";
import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, ChevronDown, User, Bot, ExternalLink, Sparkles, MinusCircle, X } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

// AI response generation function
async function generateAIResponse(query: string, structuredResults: any) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        context: structuredResults
      }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    // Check if response is actually available
    if (!response.body) {
      throw new Error('No response body received');
    }

    // Get the raw text first
    const rawText = await response.text();
    
    // Try to parse the text as JSON
    let data;
    try {
      data = rawText ? JSON.parse(rawText) : null;
    } catch (parseError) {
      console.error('Failed to parse JSON response:', parseError);
      console.error('Raw response:', rawText);
      throw new Error('Invalid JSON response from AI service');
    }
    
    if (!response.ok) {
      throw new Error(data?.error || `AI request failed with status ${response.status}`);
    }
    
    if (!data) {
      throw new Error('Empty response received from AI service');
    }
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    if (!data.response) {
      throw new Error('No response field in AI service response');
    }
    
    return data.response;
  } catch (error) {
    // Handle AbortError separately
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out. Please try again.');
      }
      console.error('AI response error:', error);
      throw error;
    }
    
    console.error('Unknown AI response error:', error);
    throw new Error('An unexpected error occurred');
  } finally {
    clearTimeout(timeoutId);
  }
}

// Content mapping with themes, links, and official sources
const PORTAL_CONTENT = {
  // Demography content
  DEMOGRAPHY: {
    keywords: ["population", "migration", "demographic", "census", "aging", "elderly"],
    articles: [
      {
        title: "Population Trends in Odisha",
        link: "/themes/demography/articles/population-trends",
        sources: [
          { name: "Census 2011", url: "https://censusindia.gov.in/census.website/data/population-finder" },
          { name: "ORGI Projections", url: "https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf" }
        ]
      },
      {
        title: "Migration Patterns Analysis",
        link: "/themes/demography/articles/migration-patterns",
        sources: [
          { name: "Census Migration Tables", url: "https://censusindia.gov.in/census.website/data/migrations" },
          { name: "NSSO Migration Survey", url: "http://mospi.nic.in/sites/default/files/publication_reports/533_final.pdf" }
        ]
      }
    ]
  },
  // Health content
  HEALTH: {
    keywords: ["health", "medical", "nfhs", "mortality", "fertility", "maternal", "child health"],
    articles: [
      {
        title: "Health Indicators Analysis",
        link: "/themes/health/articles/health-indicators",
        sources: [
          { name: "NFHS-5 Odisha", url: "http://rchiips.org/nfhs/NFHS-5_FCTS/Odisha.pdf" },
          { name: "Health Survey Data", url: "https://www.mohfw.gov.in/sites/default/files/StatisticalReport2021.pdf" }
        ]
      },
      {
        title: "Maternal and Child Health",
        link: "/themes/health/articles/maternal-child-health",
        sources: [
          { name: "NFHS-5 MCH Data", url: "http://rchiips.org/nfhs/NFHS-5_FCTS/Odisha.pdf" },
          { name: "SRS Bulletin", url: "https://censusindia.gov.in/nada/index.php/catalog/RBIRTH" }
        ]
      }
    ]
  },
  // Education content
  EDUCATION: {
    keywords: ["education", "school", "literacy", "enrollment", "dropout", "udise"],
    articles: [
      {
        title: "Education Status Report",
        link: "/themes/education/articles/education-status",
        sources: [
          { name: "UDISE+ Dashboard", url: "https://dashboard.udiseplus.gov.in/" },
          { name: "NSS Education Survey", url: "http://mospi.nic.in/sites/default/files/publication_reports/NSS75_36_1.pdf" }
        ]
      }
    ]
  },
  // Development content
  DEVELOPMENT: {
    keywords: ["infrastructure", "development", "rural", "urban", "facilities"],
    articles: [
      {
        title: "Infrastructure Gap Analysis",
        link: "/themes/development/articles/infrastructure-gap",
        sources: [
          { name: "NITI Aayog Index", url: "https://www.niti.gov.in/sdg-india-index-dashboard-2023-24" }
        ]
      },
      {
        title: "Rural Development Progress",
        link: "/themes/development/articles/rural-development",
        sources: [
          { name: "Rural Statistics", url: "https://rural.nic.in/en/statistics" },
          { name: "PMGSY Data", url: "http://omms.nic.in/" }
        ]
      }
    ]
  }
};

function findRelevantContent(query: string) {
  const results: Array<{theme: string; articles: any[]}> = [];
  const queryWords = query.toLowerCase().split(/\s+/);

  Object.entries(PORTAL_CONTENT).forEach(([theme, content]) => {
    // Check if any query word matches theme keywords
    if (content.keywords.some(keyword => 
      queryWords.some(word => 
        word.length > 2 && (keyword.includes(word) || word.includes(keyword))
      )
    )) {
      results.push({
        theme,
        articles: content.articles
      });
    }
  });

  return results;
}

function formatContentResponse(results: Array<{theme: string; articles: any[]}>) {
  if (results.length === 0) return null;

  let response = "Here's what I found:\n\n";
  
  results.forEach(({ theme, articles }) => {
    response += `📚 <strong>${theme}</strong>\n\n`;
    
    articles.forEach(article => {
      response += `<strong>${article.title}</strong>\n`;
      response += `• <a href="${article.link}" class="text-primary-600 hover:underline">Read Analysis</a>\n\n`;
      response += "Official Data Sources:\n";
      article.sources.forEach((source: any) => {
        response += `• <a href="${source.url}" class="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">${source.name} <span class="inline-block ml-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span></a>\n`;
      });
      response += "\n";
    });
  });

  return response;
}

interface SmartChatbotProps {
  onVisibilityChange?: (visible: boolean) => void;
  defaultVisible?: boolean;
}

export default function SmartChatbot({ onVisibilityChange, defaultVisible = true }: SmartChatbotProps) {
  const chatbotRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    { 
      sender: "bot", 
      text: `👋 Hi! I'm your Odisha Data Portal assistant. I can help you find:

• Portal articles and analysis
• Official data sources (Census, NFHS, NSSO)
• Latest statistics and reports

What would you like to know?` 
    }
  ]);
  const [input, setInput] = useState("");
  const [minimized, setMinimized] = useState(true); // Start minimized
  const [isVisible, setIsVisible] = useState(true); // Control overall visibility
  const [unreadCount, setUnreadCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Handle minimize/maximize state
  const handleMinimizeToggle = (shouldMinimize: boolean) => {
    setMinimized(shouldMinimize);
    if (!shouldMinimize) {
      setUnreadCount(0); // Reset unread count when maximizing
    }
  };

  // Handle close
  const handleClose = () => {
    setIsVisible(false);
    setMinimized(true);
    setUnreadCount(0);
    // Reset chat state
    setMessages([{ 
      sender: "bot", 
      text: `👋 Hi! I'm your Odisha Data Portal assistant. I can help you find:

• Portal articles and analysis
• Official data sources (Census, NFHS, NSSO)
• Latest statistics and reports

What would you like to know?` 
    }]);
    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, minimized]);

  // Handle clicks outside of chatbot
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node) && !minimized && isVisible) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [minimized, isVisible]);

  async function handleSend(suggestion?: string) {
    const text = suggestion ?? input;
    if (!text.trim()) return;

    setMessages(msgs => [...msgs, { sender: "user", text }]);
    setInput("");
    setTyping(true);
    if (minimized) {
      setUnreadCount(prev => prev + 1);
    }

    try {
      let response;
      
      if (text.toLowerCase().startsWith('/help')) {
        response = `I can help you find information about:

• Population & Demographics (Census data)
• Health Statistics (NFHS data)
• Education (UDISE+ data)
• Development Indicators

Try asking about any topic or data source!`;
      } else {
        const results = findRelevantContent(text);
        const structuredResponse = formatContentResponse(results);
        
        // Get AI-enhanced response
        const aiResponse = await generateAIResponse(text, results);
        
        if (aiResponse) {
          response = `${aiResponse}\n\n${structuredResponse ? '📚 Related Resources:\n\n' + structuredResponse : ''}`;
        } else {
          response = structuredResponse || 
            "I couldn't find exact matches. Try topics like 'population', 'health', 'education', or 'infrastructure'. You can also type /help for more options.";
        }
      }

      setMessages(msgs => [...msgs, { 
        sender: "bot", 
        text: response,
        isAI: Boolean(response.includes('📚 Related Resources')) 
      }]);
      if (minimized) {
        setUnreadCount(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error handling message:', error);
      setMessages(msgs => [...msgs, { 
        sender: "bot", 
        text: "I apologize, but I encountered an error processing your request. Please try again."
      }]);
    } finally {
      setTyping(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSend();
  }

  const suggestions = [
    "Show NFHS-5 health data",
    "Census population trends",
    "UDISE education statistics",
    "Rural development data",
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
      {!isVisible ? null : minimized ? (
        <button
          className="bg-primary-600 text-white rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-primary-700 transition-all group"
          onClick={() => handleMinimizeToggle(false)}
          aria-label="Open Chatbot"
        >
          <div className="relative">
            <Image
              src="/icons/chatbot.svg"
              alt="Chatbot"
              width={28}
              height={28}
              className="w-7 h-7 group-hover:scale-110 transition-transform"
            />
            {unreadCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">
                {unreadCount}
              </div>
            )}
          </div>
        </button>
      ) : (
        <div 
          ref={chatbotRef} 
          className="w-[calc(100vw-32px)] md:w-[400px] max-w-full bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in max-h-[80vh] md:max-h-[600px]"
        >
          <div className="bg-primary-600 text-white px-4 py-3 font-semibold text-base flex items-center justify-between shrink-0">
            <span>Portal Assistant</span>
            <div className="flex items-center gap-2">
              <button
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => handleMinimizeToggle(true)}
                aria-label="Minimize Chatbot"
              >
                <div className="flex items-center gap-1">
                  <MinusCircle className="w-4 h-4" />
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <button
                className="text-white/80 hover:text-white hover:bg-red-500/20 rounded transition-colors p-1"
                onClick={handleClose}
                aria-label="Close Chatbot"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto h-[400px]">
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm mb-1 flex items-start gap-2 ${msg.sender === "bot" ? "text-primary-700" : "text-gray-700 justify-end"}`}>
                {msg.sender === "bot" ? <Bot className="w-4 h-4 mt-1" /> : <User className="w-4 h-4 mt-1" />}
                <div 
                  className={`rounded-lg px-3 py-2 ${msg.sender === "bot" ? "bg-primary-50" : "bg-gray-100"}`}
                  dangerouslySetInnerHTML={{ 
                    __html: msg.text.replace(/\n/g, '<br/>') 
                  }} 
                />
              </div>
            ))}
            {typing && (
              <div className="text-xs text-primary-500 flex items-center gap-2 pl-6">
                <span className="animate-pulse">Typing...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="px-4 py-3 border-t bg-gray-50">
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  className="px-2 py-1 rounded bg-primary-100 text-primary-700 text-xs hover:bg-primary-200 transition-colors"
                  onClick={() => handleSend(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                placeholder="Ask about any topic or data source..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="ml-2 p-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                onClick={() => handleSend()}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
