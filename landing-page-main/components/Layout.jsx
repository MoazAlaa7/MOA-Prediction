// components/Layout.js
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    return (
        <div className="container">
            <nav className="sidebar">
                <ul>
                    <li><Link href="#section1"><a>Section 1</a></Link></li>
                    <li><Link href="#section2"><a>Section 2</a></Link></li>
                    <li><Link href="#section3"><a>Section 3</a></Link></li>
                </ul>
            </nav>
            <div className="content">
                {children}
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                }
                .sidebar {
                    width: 200px;
                    background-color: #f0f0f0;
                    padding: 20px;
                    position: fixed;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    overflow-y: auto;
                }
                .content {
                    margin-left: 220px;
                    padding: 20px;
                }
            `}</style>
        </div>
    );
};

export default Layout;
