export function selectQuestionsList(state) {
  return Object.keys(state.questions).map(key => {
    return { ...state.questions[key], id: key };
  });
}