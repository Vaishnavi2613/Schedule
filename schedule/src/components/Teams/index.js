import React from 'react'
import TeamItem from '../TeamsItem'
import record from './teams.json'

const index = (props) => {
  return (
   <>
        <div className='space-y-5'>
       {record.map((elem)=>{
        return <TeamItem key={elem.key} start={elem.startTime} end={elem.endTime} sessName={elem.sessionName} speakPic={elem.speakerPic} speakName={elem.speakerName} />
       })}
       </div>
   </>
  )
}

export default index