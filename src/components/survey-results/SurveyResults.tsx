import { useState } from 'react';
import './SurveyResults.scss';
import { collection, getDocs } from 'firebase/firestore';
import { firebaseDB } from '../../environment/environment';

function SurveyResults() {
    const collectionRef = collection(firebaseDB, "answers");
    const [answers, setAnswers] = useState([]);

    const getAnswers = async () => {
        const snapshot = await getDocs(collectionRef);
        setAnswers(snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })));
    }
    getAnswers();

    return (<div className="survey-main">
        <div className="survey-header">
            <div className="name">Name</div>
            <div className="age">Age</div>
            <div className="preferences">Preferences</div>
        </div>
        <div className="data">
            {
                answers.map(answer => {
                    return <div className="row">
                        <div className="name">{answer.name}</div>
                        <div className="age">{answer.age}</div>
                        <div className="preferences">
                            {answer.preferences.sports && <p>sports</p>}
                            {answer.preferences.books && <p>books</p>}
                            {answer.preferences.travel && <p>travel</p>}
                        </div >
                    </div >
                })
            }
        </div >
    </div >)
}

export default SurveyResults;