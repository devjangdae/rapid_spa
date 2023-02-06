import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LogIn from './LogIn';
import Main from './Main';

function App() {
  return (
		<BrowserRouter>
			<Routes>
  			  <Route path="/" element={<LogIn />}></Route>
			  {/* <Route path="/" element={<Main />}></Route> */}
			  <Route path="/main" element={<Main />}></Route>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
