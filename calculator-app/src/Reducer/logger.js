function logger(reducer) {
  return (prevState, { type, payload }) => {
    console.group(type);
    console.log("PrevState: ", prevState);
    console.log("Action: ", { type, payload });
    const newState = reducer(prevState, { type, payload });
    console.log("NewState: ", newState);
    console.groupEnd();
    return newState;
  };
}

export default logger;
