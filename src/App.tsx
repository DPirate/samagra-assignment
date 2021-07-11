import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components';
import { ApiAnalytics } from './features/home/pages';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ApiAnalytics />
      </QueryClientProvider>
    </div>
  );
}

export default App;
