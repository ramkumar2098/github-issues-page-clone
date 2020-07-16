import React from 'react';
import Header from './header/Header';
import RepoHead from './repoHead/RepoHead';
import RepoInfo from './repoInfo/RepoInfo';
import RepoContent from './repoContent/RepoContent';

function Container() {
  return (
    <>
      <Header />
      <RepoHead />
      <RepoInfo />
      <RepoContent />
    </>
  );
}

export default Container;
