// import css from "./Feedback.module.css";
const Feedback = ({ feedback, positive, totalFeedback }) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p> positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
