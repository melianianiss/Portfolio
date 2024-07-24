import React, { useEffect, useState } from 'react'
import { projectsData } from './Data'
import { projectNav } from './Data'
import WorkItems from './WorkItems'

const Works = () => {
    const [item,setItem] = useState({name:'all'})
    const [projects,setProjects] = useState([])
    const [active,setActive] = useState(0)
    useEffect(()=>{
        if(item.name === 'all') {
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter((project)=>{
                return project.category === item.name
            })
            setProjects(newProjects)
        }
    },[item])
    function handleClick(e,index) {
        setItem({name:e.target.textContent})
        setActive(index)
    }
    return (
        <div>
            <div className="work__filters">
                {projectNav.map((item,index) => (
                    <span className={active === index ? "work__item work__active":"work__item"} key={index} onClick={(e)=>{
                        handleClick(e,index)
                    }}>
                        
                        {item.name}

                    </span>
                ))}
            </div>

            <div className="work__container container grid">
            {projects.map((item) => <WorkItems item={item} key={item.id} />)}

            </div>
        </div>
    )
}

export default Works