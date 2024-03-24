import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    // Тут використовуй сеттер, щоб оновити стан
  };

  return (
    <>
      <Description />;
      <Options />
      <Feedback
        good={reviews.good}
        neutral={reviews.neutral}
        bad={reviews.bad}
      />
    </>
  );
}

export default App;
