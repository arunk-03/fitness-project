import Bottom from '../Components/Bottom';
import LeftNavBar from '../Components/LeftNavBar';
import NavBar from '../Components/NavBar';

export default function NutritionPlans() {
    return (
        <div className='bg-gray-100'>

            <NavBar />
            <div className="flex gap-6 p-6">
            <LeftNavBar />
            </div>
            <Bottom />
        </div>
    )
}
