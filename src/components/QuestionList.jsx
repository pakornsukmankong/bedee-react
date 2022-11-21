import AnswerList from './AnswerList'

function QuestionList({ question }) {
  return (
    <div className="flex flex-col border-black border-2 w-[21rem] mb-4 rounded-md p-3">
      <div className="text-xl">{question.text}</div>
      {question?.options
        ?.sort(() => Math.random() - 0.5)
        ?.map((item) => (
          <AnswerList answer={item} />
        ))}
    </div>
  )
}

export default QuestionList
