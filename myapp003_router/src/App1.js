//v6
//npm install react-router-dom --save

import { Route, Routes } from 'react-router-dom';
import About from './components1/About';
import Dashboard from './components1/Dashboard';
import Home from './components1/Home';
import Layout from './components1/Layout';
import NoMatch from './components1/NoMatch';

const App = () => {
    return (
        <div>
            <h1>Basic Example</h1>
            <Routes>
                {/* <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/dashboard' element={<Dashboard />} /> */}

                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} /> {/* 상위의 주소와 자신의 주소가 같으면 index를 준다 */}
                    <Route path='about' element={<About />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='*' element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;