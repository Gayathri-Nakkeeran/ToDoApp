import Link from "next/link";
import Image from "next/image";
import './Navbar.css'

import 'tailwindcss/tailwind.css';


export default function Navbar() {
    return (

        <nav >

            <div className="flex p-3">
                {/* <Image className="brandLogo" width="50" height="50" src="/todo-logo.png" alt="logo" /> */}
                <div className="brandName">
                    <h5>TodoApp</h5>
                </div>

                <div className=" navLink flex">

                    <Link className="p-2 linkElement" href="../pages/TodayTask">Todays Task</Link>
                    <Link className="p-2 linkElement" href="../pages/CompletedTask">Completed Task</Link>
                </div>
            </div>
        </nav>

    );
}