import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Intro, LoginPage, HomePage, ResultsPage, VideoPage, MapPage, ProfilePage } from './Pages';
import { Modal, Modal_2 } from './Components';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/modal_2" element={<Modal_2 />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </Router>
  );
}
