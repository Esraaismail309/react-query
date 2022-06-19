import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

import { Navbar } from './components/Navbar';
import { Users } from './components/Users';


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div >
        <Navbar />
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
      <ReactQueryDevtools position='bottom-right' initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
