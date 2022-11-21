import QuestionList from './components/QuestionList'
import question from './data/question'

function App() {
  return (
    <div className="flex flex-col items-start mx-[30rem] border-black border-2 rounded-lg w-[25rem] p-7">
      {question
        ?.sort(() => Math.random() - 0.5)
        .map((item, index) => (
          <QuestionList key={index} question={item} />
        ))}
    </div>
  )
}

export default App
