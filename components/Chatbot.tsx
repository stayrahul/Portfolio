'use client';

import { useState, useRef, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { FaBots } from "react-icons/fa6";


const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Automatically scroll to the latest message when the messages array changes
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          from: 'bot',
          text: "👋 Hello! I'm Rahul's AI assistant.💻 \n\nAsk me anything 🚀"
        }
      ]);
    }
  }, [isOpen, messages.length]);


  const handleSend = async () => {
    if (!input.trim()) return;
  
    const userMessage: { from: 'user'; text: string } = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
  
    try {
      // Send user input to the backend
      const response = await fetch('https://portfolio-backend-mu-gules.vercel.app/rahulAi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch response from the server');
      }
  
      const data = await response.json();
  
      // Add the bot's response to the messages
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: data.response || 'Sorry, I could not understand that. 🤔' },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Oops! Something went wrong. Please try again later. 😔' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([
      { from: 'bot', text: "👋 Hello! I'm Rahul's AI assistant.💻 \n\nAsk me anything 🚀" },
    ]);
    setInput('');
    setLoading(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setMessages([
      { from: 'bot', text: "👋 Hello! I'm Rahul's AI assistant. Ask me anything 🚀" },
    ]);
    setInput('');
    setLoading(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      handleOpen();
    } else {
      handleClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="w-[380px] h-[500px] bg-[#0d1117] text-white border border-gray-700 rounded-xl shadow-lg flex flex-col p-4">
          <div className="text-white font-mono text-lg p-4 border-b border-gray-600 flex items-center justify-between">
            <span className="font-bold text-xl text-cyan-400">Rahul — Coder | AI Enthusiast 💻</span>

            {/* Exit button inside chatbox */}
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#2a82d7] hover:bg-[#1a5e9a] text-white rounded-full p-2 shadow-md"
            >
              <RxCross2 className="text-xl" />
            </button>
          </div>

          <div className="flex-1 p-2 overflow-y-auto space-y-2 custom-scrollbar">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[70%] p-2 text-sm break-words 
                    ${msg.from === 'bot' 
                      ? 'bg-[#161b22] text-white rounded-2xl rounded-tl-none' 
                      : 'bg-[#2a82d7] text-white rounded-2xl rounded-tr-none'
                    }`}
                  style={{
                    wordWrap: 'break-word',
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.5',
                    marginTop: msg.from === 'user' ? '10px' : '6px',
                    marginBottom: '6px',
                    boxShadow: '0 0 8px rgba(0, 255, 255, 0.7)', // Light cyberpunk glow
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Display loading indicator */}
            {loading && (
              <div className="text-gray-400 text-xs animate-pulse">Assistant is typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input and send button */}
          <div className="p-2 flex border-t border-gray-600">
            <input
              className="flex-1 rounded-lg px-2 py-1 text-sm bg-[#0d1117] text-white placeholder-gray-400 focus:outline-none"
              placeholder="Ask me something about coding or me..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="ml-2 bg-[#2a82d7] hover:bg-[#1a5e9a] text-white px-3 py-1 rounded-lg text-sm"
              onClick={handleSend}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Chatbot icon to open/close only when the box is closed */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="bg-[#2a82d7] hover:bg-[#1a5e9a] text-white rounded-full p-4 shadow-md transition-transform transform hover:scale-110 fixed bottom-6 right-6"
        >
          <FaBots className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
