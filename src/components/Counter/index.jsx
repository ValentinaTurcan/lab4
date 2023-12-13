import React from 'react';
import numbers from '../../number.json'

export default function Counter({startArray}) {
    const [number, setNumbers] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(true);
    const heading = React.useRef();

    React.useEffect(() => {
        console.log(heading)
        heading.current.addEventListener('scroll', log);
    }, []);

    const log = () => {
        console.log("hello");
    }

    const deleteEvent = () => {
       // heading.removeEventListener('scroll', log);
    }

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setNumbers([...numbers, number]);
        }, 1000)
    }, []);
    const addCount = () => {
        setCount(count + 1);
    }
    const addElement = () => {
        setNumbers([...number, Math.random()]);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 ref={heading} className="heading" style={{overflowY: "scroll", height: "150px"}}>
                {
                    number.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))
                }
            </h1>
            <h2>{count}</h2>
            <button onClick={deleteEvent}>DeleteEvent</button>
            <button onClick={addElement}>+</button>
            <button onClick={addCount}>Add Count</button>
        </div>
    )
}