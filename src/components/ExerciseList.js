import React from 'react'
import Card from './Card.js'

const ExerciseList = ({exercises}) => (
    <div>
        {exercises.map((exercise) => {
            return (
                <Card
                    key={exercise.key}
                    title={exercise.title}
                    description={exercise.description}
                    img={exercise.img}
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
                />
            )
        })}
    </div>
)

export default ExerciseList