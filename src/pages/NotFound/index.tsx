import { Link } from "router6-preact";

const NotFoundPage = () => {
  return (
    <div>
      404, go to <Link to="home">homepage</Link>
    </div>
  );
};

export default NotFoundPage;
