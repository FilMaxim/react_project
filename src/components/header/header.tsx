import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <Link to={`/`}>
        <button>Main Page</button>
      </Link>
      <Link to={`/form`}>
        <button>FormPage</button>
      </Link>
      <Link to={`/hook-form`}>
        <button>HookFormPage</button>
      </Link>
    </>
  );
};
