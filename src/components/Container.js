import React, { useState } from 'react';
import Header from './header/Header';
import NavBar from './navbar/NavBar';
import RepoHead from './repoHead/RepoHead';
import RepoInfo from './repoInfo/RepoInfo';
import RepoContent from './repoContent/RepoContent';

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
          value={() => setDisplayNavBar(!displayNavBar)}
        >
          <Header desktopView={desktopView} />
        </DisplayNavBarContext.Provider>
        {!desktopView && displayNavBar && <NavBar />}
      </SearchQueryContext.Provider>
      <RepoHead />
      <RepoInfo />
      <RepoContent />
    </>
  );
}

export default Container;
