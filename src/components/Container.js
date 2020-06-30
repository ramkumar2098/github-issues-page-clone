import React, { useState } from 'react';
import Header from './header/header/Header';
import NavBar from './navbar/NavBar';
import RepoHead from './RepoHead';

export const DisplayNavBarContext = React.createContext();
export const SearchQueryContext = React.createContext();

function Container() {
  const [displayNavBar, setDisplayNavBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const mediaQ = window.matchMedia('(min-width: 1010px)');
  const [desktopView, setDesktopView] = useState(mediaQ.matches);

  mediaQ.onchange = () => setDesktopView(mediaQ.matches);

  return (
    <>
      <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
        <DisplayNavBarContext.Provider
          value={{ displayNavBar, setDisplayNavBar }}
        >
          <Header desktopView={desktopView} />
        </DisplayNavBarContext.Provider>
        {!desktopView && displayNavBar && <NavBar />}
      </SearchQueryContext.Provider>
      <RepoHead />
      <div>
        {/* adasfsdfsdadasfsdfsdadasfsdfsdadasfsdfsdadasfsdfsdadasfsdfsdadasfsdfsdadasfsdfsdadasfsdfsdadasfsdfsdadasfsdfsd */}
      </div>
    </>
  );
}

export default Container;
