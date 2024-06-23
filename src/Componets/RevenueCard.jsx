

const RevenueCard = ({
  title, amount, orderCount
}) => {
  return (
    <div className="bg-white rounded shadow-md p-4 m-3 hover:bg-blue-500 cursor-pointer" onClick={() => {
      console.log("Finally react with tailwind")
    }}>
      <div className="text-gray-700">
        {title} ?
      </div>
      <div className="flex justify-between">
        <div>
          {amount}
        </div>
        {orderCount ? <div> <span className="text-blue-500 hover:text-black">{orderCount} order(s)</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
        </div> : null}

      </div>
    </div>
  )
}

export default RevenueCard