import './App.css';
import Stories from 'react-insta-stories';
import React from 'react';
import ReactLoading from 'react-loading';

const stories = [
  {
    url: '/step.gif',
    duration: 5000,
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-1.png',
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-2.png',
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-3.png',
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-4.png',
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-5.png',
    duration: 12000,
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-6.png',
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-7.png',
    duration: 10000,
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-8.png',
    duration: 10000,
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-9.png',
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-10.png',
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }
];

function App() {
  return (
    <div className="App">
      <div className='story-wrapper'>
        <Stories
          stories={stories}
          storyContainerStyles={{ borderRadius: '6px' }}
          defaultInterval={8000}
          width='100%'
          height='100%'
          loader={<ReactLoading type='bubbles' color='#ffffff' height='60px' width='60px' />}
          loop
        />
      </div>
    </div>
  );
}

export default App;
