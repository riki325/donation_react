import { useEffect, useState } from "react"

export default function UpdatePersonalDetails() {
    const [cash, setCash] = useState(false)
    const [cd, setCd] = useState(false)

    useEffect(()=>{
        setCash(false);
        setCd(false);
    },[])
    return (<>
        <h1>UpdatePersonalDetails</h1>
        <form>
           options for payment:<br/>
            <select onClick={(e)=>{if(e.target.value==="a"){setCd(true); setCash(false);}else {setCash(true);setCd(false); }}}>
                <option value="a">credit card</option>
                <option value="b">cash</option>
            </select><br/>
            {cash===true && <div >cashPayment is not available now please try later</div>}

            {cd===true && <div >
                num credit card:<br/>
                <input type="password" /><br/>
                enter 3 numbers from the back:<br/>
                <input type="password" /><br/>
                date:<br/>
                <input type="date" /><br/>
                num of payments:<br/>
                <input type="number" /><br/>
              <input type="submit" value="send"/>
            </div>}

        </form>
    </>
    )
}