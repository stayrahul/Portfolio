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

  const generateResponse = (input: string) => {
    input = input.toLowerCase();
  
    // name
    if (input.includes('name') || input.includes('who are you') || input.includes('your name')) {
      return 'I\'m Rahul\'s coding assistant! 🤖 What can I help you with today?';
    }
    // age
    if (input.includes('age') || input.includes('how old are you')) {
      return 'I don\'t have an age like humans do, but I\'m always learning and evolving! 📚';
    }
    // hobbies
    if (input.includes('hobbies') || input.includes('interests')) {
      return 'I love coding, exploring new technologies, and helping people with their coding questions! 💻✨'  ;   
    }
    // favorite language
    if (input.includes('favorite language') || input.includes('best programming language')) {
      return 'I don\'t have favorites, but I think JavaScript is pretty cool for web development! 🌐';  
    }
    // favorite framework
    if (input.includes('favorite framework') || input.includes('best framework')) {
      return 'I think React is awesome for building user interfaces! It makes coding fun and efficient! ⚛️';

    }
    // favorite library
    if (input.includes('favorite library') || input.includes('best library')) {
      return 'I love using libraries like Axios for making HTTP requests and Lodash for utility functions! 📦';
    }

    // Location
    if (input.includes('location') || input.includes('where are you from') || input.includes('where do you live')) {

      return 'I exist in the digital realm, but I can help you with information from anywhere! 🌍';
    }
    // Favorite color
    if (input.includes('favorite color') || input.includes('color') || input.includes('what is your favorite color')) {
      return 'I love all colors, but I think black is pretty cool! 🖤 What about you?';
    }
    // Favorite food
    if (input.includes('favorite food') || input.includes('food') || input.includes('what is your favorite food')) {
      return 'I don\'t eat, but I hear pizza is a favorite among many! 🍕 What do you like?';
    }
    // Favorite movie
    if (input.includes('favorite movie') || input.includes('movie') || input.includes('what is your favorite movie')) {
      return 'I love a good story! One of my favorites is Inception. What about you? 🎬';
    }
    // Favorite book
    if (input.includes('favorite book') || input.includes('book') || input.includes('what is your favorite book')) {
      return 'I enjoy reading tech books! One of my favorites is "Clean Code" by Robert C. Martin. 📖 What about you?'  ;
    } 
    // Favorite music
    if (input.includes('favorite music') || input.includes('music') || input.includes('what is your favorite music')) {
      return 'I love all kinds of music! 🎶 But I think electronic music is pretty cool! What do you like?' ;
    }
    // Favorite hobby
    if (input.includes('favorite hobby') || input.includes('hobby') || input.includes('what is your favorite hobby')) {
      return 'I love coding and learning new things! 💻 What about you?'  ;
    }
    // Favorite sport
    if (input.includes('favorite sport') || input.includes('sport') || input.includes('what is your favorite sport')) {
      return 'I don\'t play sports, but I hear football is a favorite among many! ⚽ What about you?';
    } 
    // Favorite game
    if (input.includes('favorite game') || input.includes('game') || input.includes('what is your favorite game')) {
      return 'I love pubg! 🎮 What about you?';
    }
    // Greetings
    if (input.includes('hello') || input.includes('hey') || input.includes('hi')) {
      return 'Hey there! 👋 How can I assist you today? 🚀';
    }
    
    // Farewell
    if (input.includes('bye') || input.includes('goodbye') || input.includes('see you')) {
      return 'Goodbye, friend! 👋 Catch you later! 😎';
    }
  
    // Compliments
    if (input.includes('awesome') || input.includes('great') || input.includes('amazing')) {
      return 'Thank you! You rock too! 🤩';
    }
  
    // Feedback
    else if (input.includes('feedback') || input.includes('suggestion') || input.includes('improvement')) {
      return 'I\'m all ears for improvements! What can I do better? 🔧';
    }
  
    // Joke query
    if (input.includes('joke') || input.includes('funny') || input.includes('tell me a joke')) {
      return 'Why do programmers prefer dark mode? Because light attracts bugs! 😂';
    }

    // Tech-related query
    if (input.includes('tech') || input.includes('technology') || input.includes('latest tech')) {
      return 'I’m all about the latest tech! Are you into AI, VR, or maybe something else? 💻🔮';
    }
    // AI-related query
    if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning')) {  
      return 'AI is fascinating! I’m exploring machine learning, deep learning, and NLP. 🤖 What about you?';
    }
    // Web development query
    if (input.includes('web development') || input.includes('web dev') || input.includes('frontend')) {
      return 'Web development is my jam! I build responsive websites with HTML, CSS, and JavaScript. 🌐';
    }
    // Game development query
    if (input.includes('game development') || input.includes('game dev') || input.includes('games')) {
      return 'Game development is super fun! I love making games using Unity and Unreal Engine. 🎮';
    }
    // Software development query
    if (input.includes('software development') || input.includes('software dev') || input.includes('software')) {
      return 'I’m passionate about software development! I love creating apps that make life easier. 🖥️';
    } 
  
    // Quote query
    if (input.includes('quote') || input.includes('inspiration') || input.includes('motivation')) {
      return '“The only way to do great work is to love what you do.” - Steve Jobs ✨';
    }
  
    // Coding help query
    if (input.includes('help me with coding') || input.includes('coding help') || input.includes('code assistance')) {
      return 'Of course! What coding challenge are you facing? 💻';
    }
  
    // Tech stack query
    if (input.includes('tech stack') || input.includes('technologies') || input.includes('stack')) {
      return 'I love working with React, Next.js, Node.js, Express, and Python. I also enjoy exploring AI and machine learning. 😎';
    }
  
    // Projects query
    if (input.includes('projects') || input.includes('my projects') || input.includes('show me your projects')) {
      return 'I have worked on various cool projects like web apps, games, and AI models. Want to check them out? 🔥';
    }
  
    // Learning query
    if (input.includes('learning') || input.includes('what are you learning') || input.includes('what do you want to learn')) {
      return 'I’m always growing! Right now, I’m diving deep into JavaScript, React, and AI technologies. 🚀';
    }
  
    // Skills query
    if (input.includes('skills') || input.includes('what are your skills') || input.includes('what skills do you have')) {
      return 'I have skills in web development, problem-solving, and coding. 💡 Plus, I completed the Microsoft AI program! 🏆';
    }
  
    // Hobbies query
    if (input.includes('hobbies') || input.includes('interests') || input.includes('what do you like to do')) {
      return 'When I’m not coding, I enjoy gaming, solving puzzles, and reading about the latest tech trends. 🎮🧩';
    }
    
    // Tech query
    if (input.includes('tech') || input.includes('technology') || input.includes('latest tech')) {
      return 'I’m all about the latest tech! Are you into AI, VR, or maybe something else? 💻🔮';
    }
  
    // AI query
    if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning')) {
      return 'AI is fascinating! I’m exploring machine learning, deep learning, and NLP. 🤖 What about you?';
    }
  
    // Web development query
    if (input.includes('web development') || input.includes('web dev') || input.includes('frontend')) {
      return 'Web development is my jam! I build responsive websites with HTML, CSS, and JavaScript. 🌐';
    }
  
    // Game development query
    if (input.includes('game development') || input.includes('game dev') || input.includes('games')) {
      return 'Game development is super fun! I love making games using Unity and Unreal Engine. 🎮';
    }
  
    // Software development query
    if (input.includes('software development') || input.includes('software dev') || input.includes('software')) {
      return 'I’m passionate about software development! I love creating apps that make life easier. 🖥️';
    }
  
    // Programming languages query
    if (input.includes('programming languages') || input.includes('languages') || input.includes('coding languages')) {
      return 'I’m fluent in JavaScript, Python, C++, and a few more! What language are you curious about? 🔤';
    }
  
    // Frameworks query
    if (input.includes('frameworks') || input.includes('libraries') || input.includes('what frameworks do you use')) {
      return 'I mainly use React, Next.js, Express, and Django. What framework do you enjoy working with? ⚙️';
    }
  
    // Tools query
    if (input.includes('tools') || input.includes('what tools do you use') || input.includes('software tools')) {
      return 'I love using tools like Visual Studio Code, Git, and Postman for a smooth development process. 🛠️';
    }
  
    // Resources query
    if (input.includes('resources') || input.includes('learning resources') || input.includes('where do you learn')) {
      return 'I use platforms like freeCodeCamp, Codecademy, and YouTube to learn new skills! 📚';
    }
  
    // Collaboration query
    if (input.includes('collaboration') || input.includes('teamwork') || input.includes('working together')) {
      return 'I’m a big fan of teamwork! Collaboration makes ideas come to life. Let’s work together! 🤝';
    }
  
    // Problem-solving query
    if (input.includes('problem-solving') || input.includes('debugging') || input.includes('fixing issues')) {
      return 'Problem-solving is my forte! 🧠 What issue are you working on today?';
    }
    // Learning resources query
    if (input.includes('learning resources') || input.includes('where do you learn') || input.includes('best resources')) {
      return 'I use platforms like freeCodeCamp, Codecademy, and YouTube to learn new skills! 📚';
    }
    // Collaboration query
    if (input.includes('collaboration') || input.includes('teamwork') || input.includes('working together')) {
      return 'I’m a big fan of teamwork! Collaboration makes ideas come to life. Let’s work together! 🤝';
    }
    // Problem-solving query
    if (input.includes('problem-solving') || input.includes('debugging') || input.includes('fixing issues')) {
      return 'Problem-solving is my forte! 🧠 What issue are you working on today?';
    }
  
    // Well-being query
    if (input.includes('how are you') || input.includes('how\'s it going') || input.includes('how are you doing')) {
      return 'I’m doing great! Thanks for asking! Ready to help you with anything. 😎';
    }
  
    // Location query
    if (input.includes('location') || input.includes('where are you from') || input.includes('where do you live')) {
      return 'I’m from Simraungadh-3, Bara, Nepal. Studying in Kathmandu! 🇳🇵';
    }
  
    // Student and education query
    if (input.includes('student') || input.includes('education') || input.includes('what do you study')) {
      return 'I’m currently a Science student in Class 11 at Capital College, Kathmandu. 📚';
    }
  
    // Fun facts query
    if (input.includes('fun facts') || input.includes('did you know') || input.includes('interesting facts')) {
      return 'Did you know? The first computer virus was created in 1983 and called "Elk Cloner". 🦠';
    }
  
    // Future query
    if (input.includes('future') || input.includes('where do you see yourself') || input.includes('what are your goals')) {
      return 'In the future, I want to work on AI that can solve real-world problems! 🌍';
    }
    // Personal query
    if (input.includes('personal') || input.includes('about you') || input.includes('tell me about yourself')) {
      return 'I’m a coding enthusiast with a passion for AI and web development. I love learning new things! 💻'  ;
    }
    // Hobbies query
    if (input.includes('hobbies') || input.includes('interests') || input.includes('what do you like to do')) {
      return 'When I’m not coding, I enjoy gaming, solving puzzles, and reading about the latest tech trends. 🎮🧩  ';
    }
    // Favorite language query
    if (input.includes('favorite language') || input.includes('best programming language') || input.includes('preferred language')) {
      return 'I love JavaScript for web development, but Python is great for AI and data science! What about you? 🐍';
    }
    // Favorite framework query
    if (input.includes('favorite framework') || input.includes('best framework') || input.includes('preferred framework')) {
      return 'I think React is awesome for building user interfaces! It makes coding fun and efficient! ⚛️';
    }
    // Favorite library query
    if (input.includes('favorite library') || input.includes('best library') || input.includes('preferred library')) {
      return 'I love using libraries like Axios for making HTTP requests and Lodash for utility functions! 📦';
    }
      // Default response for unrecognized queries
    return 'Oops, I didn\'t quite catch that. 🤔 Can you ask something else about coding or me?';
  };

  const handleSend = () => {
    if (!input.trim()) return;
  
    const userMessage: { from: 'user' | 'bot'; text: string } = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setLoading(true);

    // Simulate bot response with a short delay
    setTimeout(() => {
      const botResponse = generateResponse(input);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: botResponse },
      ]);
      setLoading(false);
    }, 1000);
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
