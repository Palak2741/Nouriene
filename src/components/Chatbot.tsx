import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ExternalLink } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  links?: Array<{ text: string; url: string; section?: string }>;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Welcome to NourineInstitute - Gurgaon's #1 Educational Services Provider! 🎓 \n\nWe specialize in:\n🏆 Teacher Placements (5000+ success stories)\n📚 Home Tuition & Coaching (95%+ results)\n🎓 B.Ed./M.Ed. Admission Assistance\n\nHow can I help you achieve your educational goals today?",
      isBot: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const knowledgeBase = {
    placement: {
      keywords: ['placement', 'job', 'teacher', 'school', 'tgt', 'pgt', 'prt', 'principal', 'vice principal', 'admin', 'hr', 'lab assistant'],
      response: "We're pioneers in educational placements with 5,000+ successful placements across 100+ schools in Gurgaon. We help with all teaching positions including TGT, PGT, PRT, Principal, Vice Principal, Admin, HR, and Lab Assistant roles.",
      links: [
        { text: "View Placement Services", url: "/placement-services", section: "Complete placement details" },
        { text: "Register for Placement", url: "/placement-services", section: "Registration form" }
      ]
    },
    tuition: {
      keywords: ['tuition', 'coaching', 'home tuition', 'online', 'classes', 'maths', 'science', 'accounts', 'business studies', 'economics'],
      response: "We offer expert tuition for classes 6-12 in Mathematics, Science, Accounts, Business Studies, and Economics. Choose from Home Tuition, Coaching Classes, or Online Tuition with 20+ years of experience and 95%+ results.",
      links: [
        { text: "View Tuition Services", url: "/institute-services", section: "All tuition options" },
        { text: "Enroll Now", url: "/institute-services", section: "Inquiry form" }
      ]
    },
    admission: {
      keywords: ['admission', 'b.ed', 'm.ed', 'bachelor', 'master', 'education', 'degree'],
      response: "We provide end-to-end admission assistance for B.Ed. and M.Ed. programs with flexible classes, complete study materials, and exam preparation. Perfect for working professionals.",
      links: [
        { text: "View Admission Services", url: "/admission-assistance", section: "Program details" },
        { text: "Apply for Assistance", url: "/admission-assistance", section: "Application form" }
      ]
    },
    contact: {
      keywords: ['contact', 'phone', 'email', 'address', 'location', 'whatsapp'],
      response: "You can reach us at:\n📧 Email: info@nourineinstitute.com\n📱 Phone/WhatsApp: +91 9650304310\n📍 Location: Gurgaon, India",
      links: [
        { text: "Contact Page", url: "/contact", section: "Complete contact information" }
      ]
    },
    experience: {
      keywords: ['experience', 'years', 'established', 'history', 'track record'],
      response: "NourineInstitute has 20+ years of excellence in education with a proven track record of 5,000+ teacher placements, 95%+ academic results, and partnerships with 100+ schools.",
      links: [
        { text: "Learn More", url: "/", section: "About our experience" }
      ]
    }
  };

  const findResponse = (input: string): { response: string; links?: Array<{ text: string; url: string; section?: string }> } => {
    const lowerInput = input.toLowerCase();
    
    // Handle greetings and general queries
    if (['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'].some(greeting => lowerInput.includes(greeting))) {
      return {
        response: "Hello! Great to connect with you! 😊 I'm here to help you with:\n\n🏆 Placement Services (Our premier offering)\n📚 Academic Excellence programs\n🎓 B.Ed./M.Ed. Admission Assistance\n📞 Contact information\n\nWhat would you like to know more about?",
        links: [
          { text: "Explore Placement Services", url: "/placement-services", section: "Our flagship service" },
          { text: "View All Services", url: "/", section: "Homepage overview" }
        ]
      };
    }
    
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowerInput.includes(keyword))) {
        return { response: data.response, links: data.links };
      }
    }
    
    return {
      response: "I'd be happy to help you with that! For specific queries not covered on our website, please:\n\n📧 Email us: info@nourineinstitute.com\n📱 WhatsApp: +91 9650304310\n\nOur expert team will respond within 24 hours with personalized assistance.",
      links: [
        { text: "Contact Us", url: "/contact", section: "Get in touch" }
      ]
    };
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const { response, links } = findResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        links
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">NourineInstitute Assistant</h3>
                <p className="text-xs text-indigo-100">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[80%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                  
                  {message.links && (
                    <div className="mt-2 space-y-1">
                      {message.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          className="flex items-center space-x-1 text-xs text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-full transition-colors duration-200"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>{link.text}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isBot ? 'order-1 mr-2 bg-indigo-100' : 'order-2 ml-2 bg-indigo-600'
                }`}>
                  {message.isBot ? (
                    <Bot className="h-3 w-3 text-indigo-600" />
                  ) : (
                    <User className="h-3 w-3 text-white" />
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                  <Bot className="h-3 w-3 text-indigo-600" />
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;