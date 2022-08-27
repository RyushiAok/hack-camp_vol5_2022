import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { SecCard } from './SecCard'


export const StepZero: FC = () => {
    const navigate = useNavigate()

    return(
    <div className="flex h-screen justify-center
                    bg-thin-purple 
                    py-10 px-2 ">
    <SecCard />
        
    </div>
    )
}