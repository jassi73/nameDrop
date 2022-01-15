import React,{useState,useEffect} from 'react'
import "antd/dist/antd.css";
import "./index.css";
import { Card, Avatar, Typography } from "antd";
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Meta } = Card;
export default function UserCard() {
  const [userData,setUserData] = useState(null)
  const[isPlaying,setIsPlaying] = useState(false);
  async function fetchMovies() {
    const response = await fetch(`http://localhost:3000/users/1`)
    const newRes = await response.json()
    // waits until the request completes...
    setUserData(newRes);
  }
  useEffect(() => {
    if(userData){
      togglePlay();
    }
  }, [isPlaying])

  const togglePlay = () => {
    var x = document.getElementById("myAudio");
    if(isPlaying){
      console.log(x)
      x.play();
    }
    else{
      x.pause()
    }
  }
  useEffect(()=> {
    fetchMovies()
  },[])
  
  const url = userData? userData.audioUrl : ""

  setInterval(()=> {
    var x = document.getElementById("myAudio");
    x.onended = function() {
      setIsPlaying(false)
  };
  },1000)
  
  return (

    <Card hoverable style={{
      width: 300,
      height: '100%',
      display: "flex",
      justifyContent: "center"

    }}>

      <Avatar style={{
        marginBottom: 20,
        marginLeft: 35
      }}
        size={100}
        src="https://bit.ly/3FskdX6"
      />
      <Title
        style={{
          fontFamily: "Roboto",
          color: "@gray-11",
          fontSize: "5vh",
          fontWeight: 500
        }}
        level={3}
      >
        Jassi Parihar
      </Title>
      <Meta style={{
        display: "flex",
        justifyContent: "center",
        fontFamily: "Roboto",
        fontSize: "3vh"
      }}
        description="(Jay-ssie Pa-ree-haar)"
      />
      <Meta style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 7,
        fontFamily: "Roboto",
        fontSize: "3vh"
      }}
        description="He/Him/His"
      />
      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "center",
        }}>
        <Avatar style={{
          backgroundColor: '#DF623A',
        }} size={50} icon={isPlaying ? <PauseOutlined onClick={() => setIsPlaying(!isPlaying)} />:<CaretRightOutlined onClick={() => setIsPlaying(!isPlaying)} />} /></div>
        {
          userData ? 
          <audio id="myAudio" loop={false}>
         <source src={url} type = "audio/mp3"/>
      </audio>
          : null
        }
            
    </Card>

  )
}


