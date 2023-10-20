import Link from "next/link";
import './Navbar.css'
import 'tailwindcss/tailwind.css';
export default function Navbar() {
    return (

        <nav >

            <div className="flex p-3">
                <div className="brandName">
                    <h5>TodoApp</h5>
                </div>
                <div className=" navLink flex">
                    <Link className="p-2 linkElement" href={{ pathname: "../pages/TaskPage", query: { page: 'pending' } }} >Home</Link>
                    <Link className="p-2 linkElement" href={{ pathname: "../pages/TodayTask", query: { page: 'today' } }}>Todays Task</Link>
                    <Link className="p-2 linkElement" href={{ pathname: "../pages/CompletedTask", query: { page: 'completed' } }}>Completed Task</Link>
                </div>
            </div>
        </nav>
    );
}