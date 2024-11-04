import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <>
      <div>
        <Header />
        <MainContent />
        <UserProfile name="Mosab" age="21" bio="Loves programming" />
      </div>
      <Footer />
    </>
  )
}

export default App;
