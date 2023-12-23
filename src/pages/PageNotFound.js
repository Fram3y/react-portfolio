import { useLocation } from "react-router-dom";

const PageNotFound = () => {
  let location = useLocation();

  return (
    <>
      <div className="container mx-auto px-4">
        <div>
          <p className="mt-10 text-4xl font-medium">Sorry, 404! </p>
          <p className="mb-10 mt-2 text-4xl font-medium">
            The Page "{location.pathname}" was not found!
          </p>
        </div>
        <div>
          <img
            className="mb-2"
            src="https://www.shutterstock.com/image-vector/broken-robot-hand-drawn-vector-600nw-478917859.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
