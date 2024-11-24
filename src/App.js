import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Bundle from './components/Bundle';
// import Pagination from './components/Pagination';

function App() {
  
  React.useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  
  const [isSticky, setSticky] = React.useState(false);

  const stickyRef = React.useRef(null);

  const handleScroll = () => {
    if (!stickyRef.current) return
    if (stickyRef.current.getBoundingClientRect().y <= -100 || null) {
      console.log(stickyRef.current.getBoundingClientRect().y);
      setSticky(true);
    } else {
      setSticky(false);
    }
  };


  const debounce = (func, wait = 10, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  window.addEventListener("scroll", debounce(handleScroll));


  return (
    <>
      <div className='main'>
        <Navbar sticky={isSticky} />
        <Bundle stickyRef={stickyRef} />
      </div>
    </>
  );
}

export default App;
