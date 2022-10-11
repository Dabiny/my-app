import React, {useState, useEffect}  from "react";

export default function FunctionClock() {
    const [date, setDate] = useState(new Date());

    function tick() {
        setDate(new Date());
    }

    useEffect(() => {
        console.log("componentDidMount");
        const timerId = setInterval(tick, 1000);
        
        return () => {
            console.log("componentWillUnmount");
            clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        console.log("componentDidUpdate");
        console.log(date);
    }, [date]);

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}