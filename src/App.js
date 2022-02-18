import './App.css';
import Stories from 'react-insta-stories';

const stories = [
  {
    url: '/step-1.jpeg',
    type: 'video',
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-2.jpeg',
    type: 'video',
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-3.jpeg',
    type: 'video',
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-4.jpeg',
    type: 'video',
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-5.jpeg',
    type: 'video',
    header: {
      heading: 'Alef',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-6.jpeg',
    type: 'video',
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-7.jpeg',
    type: 'video',
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-8.jpeg',
    type: 'video',
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-9.jpeg',
    type: 'video',
    header: {
      heading: 'Natan',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/step-10.jpeg',
    type: 'video',
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
          defaultInterval={5000}
          width='100%'
          height='100%'
          loop
        />
      </div>
    </div>
  );
}

export default App;
