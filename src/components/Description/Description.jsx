import css from "./Description.module.css";

const Description = ({ title, page }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{page}</p>
    </div>
  );
};
export default Description;
