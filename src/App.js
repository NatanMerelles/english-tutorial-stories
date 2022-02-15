import logo from './logo.svg';
import './App.css';
import Stories from 'react-insta-stories';



const stories = [
  {
    url: '/img1.jpg',
    duration: 5000,
    header: {
      heading: 'Natan Merelles',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/img2.jpg',
    duration: 5000,
    header: {
      heading: 'Natan Merelles',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  }, {
    url: '/img3.jpg',
    duration: 5000,
    header: {
      heading: 'Natan Merelles',
      subheading: 'Posted 10 de fev 2022',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
  },
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
