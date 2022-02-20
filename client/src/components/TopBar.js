import React ,{useState} from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function TopBar() {
    const [progress, setProgress] = useState(100);
    return (
        <div>
            <LoadingBar
                color='#f11946'
                progress={progress}
            />
        </div>
    )
}



