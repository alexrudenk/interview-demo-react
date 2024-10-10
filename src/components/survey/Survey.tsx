import FormField from '../form-field/FormField';
import SurveyPreferences from '../survey-preferences/SurveyPreferences';
import './Survey.scss';
import { useRef } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { firebaseDB } from '../../environment/environment';
import { SurveyAnswerModel } from '../../models/survey-answer-interface';

function Survey() {
    const formRef = useRef<HTMLFormElement>();
    const collectionRef = collection(firebaseDB, "answers");

    const submitForm = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const surveyData = Object.fromEntries(formData.entries());
        sendAnswer(surveyData);
        if (formRef.current) {
            formRef?.current.reset();
        }
    }

    const sendAnswer = async (answer) => {
        await addDoc(collectionRef, mapFormDataToSurveyAnswer(answer))
    }

    const mapFormDataToSurveyAnswer = (formData): SurveyAnswerModel => {
        return {
            name: formData.name,
            age: formData.age,
            preferences: {
                sports: !!formData.sports,
                books: !!formData.books,
                travel: !!formData.travel
            }
        }
    }

    return (<div className="main">
        <div className="header">
            <h1>
                Survey form
            </h1>
        </div>
        <div className="data">
            <form onSubmit={submitForm} ref={formRef}>
                <FormField label='Name' type='text' name='name' minLength={3} required={true}>
                </FormField>
                <FormField label='Age' type='number' name='age' min={0} max={100} required={true}>
                </FormField>
                <SurveyPreferences></SurveyPreferences>
                <div className="btn-block">
                    <button className='btn' type='submit'>Send</button>
                </div >
            </form >
        </div >
    </div >)
}

export default Survey;