import Author from './Author';
import Avatar from './Avatar';
import { LikeIcon, MoreOpton, ReplyIcon, RetweetIcon } from './IconButtons';
import Message from './Message';
import Time from './Time';

const Tweet = () => (
  <div className="flex items-center border border-gray-300 m-8">
    <Avatar />
    <div className=" space-y-1 text-lg font-medium leading-6">
      <Author />
      <Time />
      <Message />
      <div className="flex space-x-2">
        <ReplyIcon />
        <RetweetIcon />
        <LikeIcon />
        <MoreOpton />
      </div>
    </div>
  </div>
);

export default Tweet;
