import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div>
            <h2>NoMatch</h2>
            <Link to='/'>go to home</Link>
        </div>
    );
};

export default NoMatch;