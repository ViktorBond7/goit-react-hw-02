import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/notification/notification";

const App = () => {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const initialState = localStorage.getItem("feedbackTypes");
    return initialState
      ? JSON.parse(initialState)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positiveFeedback =
    totalFeedback > 0 && Math.round((feedbackTypes.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedbackTypes", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const handleReset = () => {
    setFeedbackTypes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description
        title="Sip Happens Café"
        page="Please leave your feedback about our service by selecting one of the
				options below."
      />
      <Options
        onLeaveFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedbackTypes}
          totalFeedback={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
