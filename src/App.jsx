import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import JobDetailsPage from './pages/JobDetailsPage'
import AdminPage from './pages/AdminPage'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/jobs/:id" element={<JobDetailsPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
