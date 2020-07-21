import React from 'react';
import Header from './header/Header';
import RepoHead from './repoHead/RepoHead';
import RepoInfo from './repoInfo/RepoInfo';
import RepoContent from './repoContent/RepoContent';
import Pagination from './pagination/Pagination';
import Protip from './protip/Protip';
import Footer from './footer/Footer';

function Container() {
  return (
    <>
      <Header />
      <RepoHead />
      <RepoInfo />
      <RepoContent />
      <Pagination />
      <Protip />
      <Footer />
    </>
  );
}

export default Container;
