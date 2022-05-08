import React ,{useState} from 'react'
import './Popup.css'

function Popup(props) {


  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup_inner'>
        <button
        style={{
          backgroundColor: '#f44336',
         borderRadius: '10px',
         position: 'relative',
          top: '0',
        }}
         className='clos-btn' 
        onClick={()=> props.setTrigger(false)}>close</button>
        {props.children}
      </div>
    </div>
  ) :'';
}

export default Popup


////זה ב app

{/* <main className='my-popup'>
        <h1> my popup</h1>
        <br></br>
        <button onClick={() => setOpen(true)}>
          open popup</button>

      </main>
      <Popup trigger={open} setTrigger={setOpen}>

        <h3>Popup</h3>
        <p>אני הפופאפ שלך</p>
      </Popup>

      <Popup trigger={time} setTrigger={stTime}>

        <h3>Popup</h3>
        <p>אני הפופאפ שלך</p>
      </Popup> */}


      
        // const [open, setOpen] = useState(false);
  // const [time, stTime] = useState(false);


  // useEffect(()=>{

  // setTimeout(() => {
  //   stTime(true)
  // }, 2000)
  // },[])