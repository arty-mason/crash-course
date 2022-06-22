import { Route, Routes } from 'react-router-dom';
// Importing routing elements from react-router-dom to use the page routing further

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from './pages/NewMeetup'
import FavouritesPage from "./pages/Favourites"

function App() {
  return (
    <div>
      <Routes>
        {/* Using the Routes component to navigate between routes */}
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
