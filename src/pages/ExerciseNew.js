import React from 'react'

class ExerciseNew extends React.Component {

    handleCick = () => {
        console.log('Clicked')
    }

    render(){
        return (
            <button onClick={this.handleCick}>
                Send
            </button>
        )
    }
}

export default ExerciseNew