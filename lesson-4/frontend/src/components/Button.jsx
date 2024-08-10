import { useState } from "react"

export default function Button({defaultStart}) {
    const [count, setCount] = useState(defaultStart)
    
    return <div>
        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)} >Click Me</button>
    </div>
}