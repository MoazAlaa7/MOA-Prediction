// components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div>
            <h2>Documentation</h2>
            <ul>
                <li><Link href="/docs/introduction">Introduction</Link></li>
                <li><Link href="/docs/installation">Installation</Link></li>
                <li><Link href="/docs/usage">Usage</Link></li>
                {/* Add more links as needed */}
            </ul>
        </div>
    );
};

export default Sidebar;
