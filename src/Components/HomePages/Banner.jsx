import { FaPlus } from "react-icons/fa";

 
const Banner = ( ) => {
    return (
        <div className="my-8">
            <div className="text-center space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
                    Friends to keep close in your life.
                    </h2>
                <p className="text-[18px] text-zinc-700">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className="text-[22px] font-semibold text-white bg-[#244D3F] btn py-6 shadow-2xl"><FaPlus /> Add a Friend</button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
                <div className="text-center space-y-4">
                    <h2 className="text-[#244D3F] text-5xl font-semibold">10</h2>
                    <h3 className="text-[18px] font-medium text-zinc-700">Total Friends</h3>
                </div>
                <div className="text-center space-y-4">
                    <h2 className="text-[#244D3F] text-5xl font-semibold">3</h2>
                    <h3 className="text-[18px] font-medium text-zinc-700">On Track</h3>
                </div>
                <div className="text-center space-y-4">
                    <h2 className="text-[#244D3F] text-5xl font-semibold">6</h2>
                    <h3 className="text-[18px] font-medium text-zinc-700">Need Attentions</h3>
                </div>
                <div className="text-center space-y-4">
                    <h2 className="text-[#244D3F] text-5xl font-semibold">12</h2>
                    <h3 className="text-[18px] font-medium text-zinc-700">Interactions This Month</h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;