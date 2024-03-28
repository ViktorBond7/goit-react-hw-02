import css from "./Feedback.module.css";
const Feedback = ({ feedback, positive }) => {
  return (
    <div>
      <p className={css.title}>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p> positive: {positive}</p>
    </div>
  );
};

export default Feedback;
