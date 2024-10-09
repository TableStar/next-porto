import React from 'react'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'


const skillIcons = [
    {icon:<FaHtml5 size={140}/>,label:"HTML"},
    {icon:<FaCss3Alt size={140}/>,label:"CSS"},
    {icon:<FaReact size={110}/>,label:"React"},
    {icon:<SiTypescript size={140}/>,label:"TypeScript"},
]
const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381A5F_80%)] py-32'>Skills</div>
  )
}

export default Skills