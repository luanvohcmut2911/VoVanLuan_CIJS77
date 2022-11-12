import { useParams } from "react-router-dom";

export const Invoices = ()=>{
    const data = useParams();
    return (
        <div>
            <h1>THIS IS INVOICES/{data.id} PAGE</h1>
        </div>
    )
}