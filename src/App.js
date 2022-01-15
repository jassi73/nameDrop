import './App.css';
import UserCard from './UserCard'
function App() {
  return (
    <div>
      <h1 style={{color:'white', marginLeft:'10px', }}>NameDrop</h1>
      <div style={{ display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        }}> 
         <UserCard />
      </div>

    </div>
  );
}

export default App;
