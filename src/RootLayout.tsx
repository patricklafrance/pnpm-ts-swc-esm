import { Link, Outlet } from "react-router-dom";

import { Loading } from "@root/components/Loading.js";
import { Suspense } from "react";

export function RootLayout() {
    return (
        <div style={{ maxWidth: "fit-content" }}>
            <nav style={{ maxWidth: "fit-content" }}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </div>
    );
}
