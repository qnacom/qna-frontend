const Options = function () {
  const options = ["ArrayList", "Object", "LinkedQueue", "Queue"];

  return (
    <div className="options">
      {options.map((option) => {
        return (
          <div className="option">
            <input type="radio" />
            <label className="option-label">{option}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Options;
