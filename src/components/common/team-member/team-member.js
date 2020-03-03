import React from 'react'
import './team-member.scss'

const TeamMember = ({person: {imgUrl, name, position}}) => {
  return (
    <div className="team-member">
      <img src={imgUrl} alt="" className="img-fluid"/>
      <div>
        <h3>{name}</h3>
        <span className="text-uppercase">{position}</span>
      </div>
    </div>
  )
}

export default TeamMember
