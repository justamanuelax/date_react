import { useState } from "react";
export default function Counter(){

    const [count, setCount] = useState(0);
    
    const [days, setDays] = useState(1);


    const date = new Date("october 5 2024");
    date.setDate(date.getDate() + count);

return(
<div>
 <div>
{/* setDays */}

<div>
<button onClick={() => setDays((c) => c - 1)}>
-
</button>
<span> Steps : {days} </span>
<button onClick={() => setDays((c) => c + 1)}>
+
</button>
</div>

 </div>
 
 
 
    <div>
        <button onClick={() => setCount((c) => c - days)}>
        -
        </button>
        <span> Count : {count} </span>
        <button onClick={() => setCount((c) => c + days)}>
        +
        </button>
    </div>
    <p>{count === 0 ? "Today is : ": count > 0 ? ` ${count} days from today is : `: ` ${Math.abs(count)} days ago was :  ` }</p>
    <p>{date.toDateString()}</p>
    
</div>
)
}

