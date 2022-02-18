import './App.css';
import Stories from 'react-insta-stories';

const stories = [
  {
    url: '/step-1.webp',
    duration: 4000,
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-2.webp',
    duration: 4000,
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-3.webp',
    duration: 4000,
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-4.webp',
    duration: 4000,
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-5.webp',
    duration: 4000,
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-6.webp',
    duration: 4000,
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-7.webp',
    duration: 4000,
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-8.webp',
    duration: 4000,
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-9.webp',
    duration: 4000,
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-10.webp',
    duration: 4000,
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
          onStoryStart={(a) => console.log({ a })}
          storyContainerStyles={{ borderRadius: '6px' }}
          defaultInterval={4000}
          width='100%'
          height='100%'
          loop
        />
      </div>
    </div>
  );
}

export default App;
