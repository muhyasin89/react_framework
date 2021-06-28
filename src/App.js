import React from 'react';

import Header from './components/layouts/Header';
import LeftSlider from './components/layouts/LeftSlider';
import Footer from './components/layouts/Footer';
import PopularTopics from './components/layouts/PopularTopics';
import TopCategories from './components/layouts/TopCategories';
import PaginateSection  from './components/layouts/PaginateSection';
import MainContent from './components/layouts/MainContent';
import { Container } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="sideBar">
            <LeftSlider />
        </div>
        <Container>
          <div className="content">
            <div className="leftContent">
              <PopularTopics />
              <TopCategories />
            </div>
            <div className="rightContent">
              <MainContent />
              <PaginateSection />
            </div>
            
            
          </div>
        
        </Container>
        
        
        <Footer>

        </Footer>
    </div>
  );
}

export default App;
