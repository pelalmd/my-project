import Head from "next/head";
import React from 'react';
import { Facebook, Youtube, Instagram, Twitter } from 'lucide-react';

function App() {
  return (
<>
<Head>
  <link rel="icon" href="/favicon.ico" />
</Head>

    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-white">
              <img 
                src="https://i.imgur.com/QlOpcMI.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] opacity-20 rounded-2xl"></div>
          </div>
          
          <div className="text-center md:text-left">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                I am Pelal
              </h1>
              <p className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Website Creator
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <a 
            href="https://www.facebook.com/profile.php?id=100075415397820"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] p-4 rounded-xl transition-all duration-300"
          >
            <Facebook className="w-6 h-6" />
            <span>Facebook</span>
          </a>
          
          <a 
            href="https://youtube.com/@pe_lal?si=QKQbG-Ml98hZI_LD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] p-4 rounded-xl transition-all duration-300"
          >
            <Youtube className="w-6 h-6" />
            <span>YouTube</span>
          </a>
          
          <a 
            href="https://www.instagram.com/pelal_md_/?igsh=MTQ1ajNuYnRsc3ZkcA%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] p-4 rounded-xl transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
          
          <a 
            href="https://www.threads.net/@pelal_md_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] p-4 rounded-xl transition-all duration-300"
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6"
            >
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.186v-.007c.024-3.581 1.205-6.334 3.509-8.184C7.56 2.35 10.414 1.5 13.814 1.5h.007c3.581.024 6.334 1.205 8.184 3.509C23.65 7.56 24.5 10.414 24.5 13.814v.007c-.024 3.581-1.205 6.334-3.509 8.184C18.44 23.65 15.586 24.5 12.186 24zm7.184-14.033l-.011-.01c-1.693-1.693-4.025-1.693-5.718 0l-.458.458v7.191c0 .458-.371.829-.829.829h-.829c-.458 0-.829-.371-.829-.829v-7.191l-.458-.458c-1.693-1.693-4.025-1.693-5.718 0l-.011.01c-1.693 1.693-1.693 4.025 0 5.718l6.547 6.547c1.693 1.693 4.025 1.693 5.718 0l6.547-6.547c1.693-1.693 1.693-4.025 0-5.718z"/>
            </svg>
            <span>Threads</span>
          </a>
          
          <a 
            href="https://x.com/pelal_md?t=OlAW3YIs_iZgxPJqAKZNug&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] p-4 rounded-xl transition-all duration-300"
          >
            <Twitter className="w-6 h-6" />
            <span>X (Twitter)</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;