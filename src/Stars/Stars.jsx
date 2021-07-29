import { PropTypes } from 'prop-types';

import './Stars.css';

import Star from "./Star/Star";
import { v4 as uuidv4 } from 'uuid';

export default function Stars({count}) {
    if (count < 1 || count > 5 || !Number.isInteger(count)) {
        return false;
    }
    const arr = [];
    for (let i = 0; i < count; i += 1) {
        arr.push(i);
    }
    return (
        <ul className="card-body-stars u-clearfix">
            {arr.map((el) => <Star key={uuidv4()} />)}
        </ul>
    );
}

Stars.propTypes = {
    count: PropTypes.number.isRequired,
}

Stars.defaultProps = {
    count: 0,
}