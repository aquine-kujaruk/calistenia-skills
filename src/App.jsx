import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppDataProvider } from './context/AppDataContext';
import { MainLayout } from './layout/MainLayout';
import { Dashboard } from './views/Dashboard';
import { WorkoutSession } from './views/WorkoutSession';
import { HistoryView } from './views/History';

function App() {
  return (
    <DataProviderWithRouter />
  );
}

const DataProviderWithRouter = () => (
  <Router basename={import.meta.env.BASE_URL}>
    <AppDataProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="history" element={<HistoryView />} />
        </Route>
        <Route path="/workout" element={<WorkoutSession />} />
      </Routes>
    </AppDataProvider>
  </Router>
);

export default App;
