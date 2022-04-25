import { Component } from 'react'
import Question from '../../components/quiz/Question'
import Answer from '../../components/quiz/Answer'
import './quiz.css'

export default class Quiz extends Component {
    state = {
        quiestions: {
            1: 'What command is used to remove a directory',
            2: '127.0.0.1 is the IP address of',
            3: 'What does GNU stands for',
            4: 'What command is used to list content of directories',
            5: 'What language is the majority of Linux written in',
            6: 'Who first created the Linux kernal',
            7: 'What is the official Linux mascot?',
            8: 'Linux is open-source',
            9: 'What command is used to create a new directory',
            10: 'what does the command sudo rm -rf / do',
        },
        answers: {
            1: {
                1: 'rdir',
                2: 'remove',
                3: 'rmdir',
                4: 'rd',
            },
            2: {
                1: 'Internet Service Provider',
                2: 'Government servers',
                3: 'Own machine',
                4: 'Unused IP address'
            },
            3: {
                1: "GNU's Not Unix",
                2: 'GUI Ubuntu',
                3: 'General Unix',
                4: 'Gigabit Network User'
            },
            4: {
                1: "dir",
                2: 'ls',
                3: 'tar',
                4: 'content'
            },
            5: {
                1: "Assembly",
                2: 'C++',
                3: 'Python',
                4: 'C'
            },
            6: {
                1: "Guido van Rossum",
                2: 'Richard Stallman',
                3: 'Linus Torvalds',
                4: 'Bill Gates'
            },
            7: {
                1: "A canary",
                2: 'A penguin',
                3: 'A rabbit',
                4: 'A turtle'
            },
            8: {
                1: "True",
                2: 'False',
            },
            9: {
                1: "dir",
                2: 'newdir',
                3: 'create dir',
                4: 'mkdir'
            },
            10: {
                1: "Optimises GPU drivers",
                2: 'Updates the kernal to the latest version',
                3: 'Deletes all files from root directory recursively',
                4: 'Downloads recommended packages'
            },
        },
        correctAnswers: {
            1: '3',
            2: '3',
            3: '1',
            4: '2',
            5: '4',
            6: '3',
            7: '2',
            8: '1',
            9: '4',
            10: '3',
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
    }

    checkAnswer = (answer) => {
        const { correctAnswers, step, score } = this.state
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer,
            })
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer,
            })
        }
    }
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0,
        })
    }

    render() {
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } =
            this.state
        return (
            <div className='Content'>
                {step <= Object.keys(quiestions).length ? (
                    <>
                        <Question question={`${step}/10: ${quiestions[step]}`} />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                            className='NextStep'
                            disabled={
                                clickedAnswer &&
                                Object.keys(quiestions).length >= step
                                    ? false
                                    : true
                            }
                            onClick={() => this.nextStep(step)}
                        >
                            Next
                        </button>
                    </>
                ) : (
                    <div className='finalPage'>
                        <h1>Thanks for completing the quiz</h1>
                        <p>
                            Your score is: {score} of {Object.keys(quiestions).length} ({Math.round(score/Object.keys(quiestions).length*100)}%)
                        </p>
                    </div>
                )}
            </div>
        )
    }
}
