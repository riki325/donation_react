import { useSelector } from "react-redux"
import Donation from "./Donation"

export default function ShowAllDonation() {
    const donationsStore = useSelector(state => state.donations.donations)

    return (
    <>
        <h1>ShowAllDonation</h1>
        {donationsStore.map((d,i) => <Donation key={i} donator={d.donator} passwordItem={d.passwordItem} countTickets={d.countTickets}/>)}
    </>
    )
}