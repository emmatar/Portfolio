import "./StyleProject.css";

// eslint-disable-next-line react/prop-types
const SingleProject = ({ title, picture, github, deploy }) => {
  return (
    <div className="single-project">
      <div>
        <a href={github} className="btn btn-primary">
          Github
        </a>
      </div>
      <div>
        <img src={picture} alt={title} />
      </div>
      <div>
        <h3>
          <a href={deploy} className="btn btn-primary">
            {title}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default SingleProject;
