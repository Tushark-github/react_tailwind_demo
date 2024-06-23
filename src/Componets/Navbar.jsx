import RevenueCard from "./RevenueCard";

function Navbar() {
  return (
    <div className="justify-between grid grid-cols-3">
      <RevenueCard title={"Amout are pending"} amount={"34568"} orderCount={1345} />
      <RevenueCard title={"Amout are pending"} amount={"34568"} orderCount={1345} />
      <RevenueCard title={"Amout are pending"} amount={"34568"} orderCount={""} />
    </div>
  )
}

export default Navbar;