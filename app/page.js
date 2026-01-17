'use client'
import { useState } from 'react'

export default function WikiNITT() {
  const [darkMode, setDarkMode] = useState(true)
  
  return (
    <div className={darkMode ? 'bg-slate-900 text-white min-h-screen' : 'bg-white text-slate-900 min-h-screen'}>
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            WikiNITT
          </h1>
          <button onClick={() => setDarkMode(!darkMode)} className="text-3xl">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-800 rounded-2xl">
            <div className="text-4xl mb-4">🏢</div>
            <h2 className="text-2xl font-bold mb-3">Agate Hostel</h2>
            <p className="text-slate-300">One of the prominent boys' hostels at NIT Trichy with modern facilities and vibrant community.</p>
          </div>
          
          <div className="p-6 bg-slate-800 rounded-2xl">
            <div className="text-4xl mb-4">💻</div>
            <h2 className="text-2xl font-bold mb-3">CSE Department</h2>
            <p className="text-slate-300">Premier CS department with excellent placements and cutting-edge research.</p>
          </div>
          
          <div className="p-6 bg-slate-800 rounded-2xl">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold mb-3">Pragyan</h2>
            <p className="text-slate-300">Annual technical festival attracting 25,000+ participants.</p>
          </div>
          
          <div className="p-6 bg-slate-800 rounded-2xl">
            <div className="text-4xl mb-4">🏛️</div>
            <h2 className="text-2xl font-bold mb-3">Campus</h2>
            <p className="text-slate-300">800-acre beautiful campus with world-class facilities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
