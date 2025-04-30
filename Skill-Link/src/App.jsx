import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SkillDetails from './components/SkillDetails';
import Login from './components/Login';
import Home from './components/Home';
import './index.css';

function App() {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:5000/skills');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('Fetch error:', error);
        // Fallback data for debugging
        setSkills([
          { id: 1, title: 'Test Electrical', description: 'Sample electrical services', reviewsCount: 5 },
          { id: 2, title: 'Test Plumbing', description: 'Sample plumbing services', reviewsCount: 3 }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const addNewSkill = () => {
    setSkills([...skills, {
      id: skills.length + 1,
      title: 'New Skill Title',
      description: 'This is a placeholder for a new skill.'
    }]);
  };

  if (loading) {
    return <div className="loading-screen">Loading skills...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/login" 
          element={!isAuthenticated ? 
            <Login onLogin={handleLogin} /> : 
            <Navigate to="/dashboard" replace />} 
        />
        
        <Route 
          path="/dashboard/*" 
          element={isAuthenticated ? (
            <div className="app-container">
              <Sidebar
                skills={skills.filter((skill) =>
                  skill.title.toLowerCase().includes(searchTerm.toLowerCase())
                )}
                onSelect={setSelectedSkill}
                searchTerm={searchTerm}
                onSearch={setSearchTerm}
                user={user}
                onLogout={handleLogout}
              />
              
              <Routes>
                <Route path="/" element={<SkillDetails skill={selectedSkill} />} />
                <Route path="/services" element={<SkillDetails skill={selectedSkill} />} />
                <Route path="/services/:id" element={<SkillDetails skill={selectedSkill} />} />
              </Routes>
              
              <button className="floating-btn" onClick={addNewSkill}>
                + New Skill
              </button>
            </div>
          ) : (
            <Navigate to="/login" replace />
          )} 
        />
      </Routes>
    </Router>
  );
}

export default App;