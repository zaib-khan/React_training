import { formatDistance } from 'date-fns';

const Time = ({ date }) => <span>{formatDistance(new Date(), date)}</span>;

export default Time;
