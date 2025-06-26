import React from 'react';
import { useLoaderData } from 'react-router';

const DashboardHome = () => {
    const data = useLoaderData()
    return (
        <div>
            Home Dashboard {data.length}
        </div>
    );
};

export default DashboardHome;