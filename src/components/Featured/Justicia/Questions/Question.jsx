import React from 'react'
import Button from '@/components/Common/Button'

const Question = ({ question, index, total }) => {
  return (
    <div>
      <div>
        <h2 className="enunciado">{question.statement}</h2>
        {question.explanation && (
          <p className="explanation">{question.explanation}</p>
        )}
        <div className="options">
          {question.alternatives.map(alternative => {
            return (
              <Alternative
                key={alternative.statement}
                action={() => alternative.action()}>
                {alternative.statement}
              </Alternative>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Alternative = ({ children, action }) => {
  return <Button onCallback={() => action()}>{children}</Button>
}

export default Question
