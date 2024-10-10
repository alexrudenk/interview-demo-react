import { useState } from 'react';
import Checkbox from '../checkbox/Checkbox';
import './SurveyPreferences.scss';

const PreferencesList = [
    'Do sports',
    'Read books',
    'Travel',
]

function SurveyPreferences() {
    const [allSelected, setAllSelected] = useState([]);

    const handleSelect = (value, name) => {
        value ? setAllSelected([...allSelected, name]) : setAllSelected(allSelected.filter(item => item !== name))
    }

    const selectAll = (value) => {
        value ? setAllSelected(PreferencesList) : setAllSelected([]);
    }

    return <div className="checkboxes-block">
        <h2>I like:</h2>
        <div className="controls">
            <Checkbox key='Select all' label='Select all' id='Select all' value={allSelected.length === PreferencesList.length} updateValue={selectAll} ></Checkbox>
        </div>
        {PreferencesList.map((item) =>
            <Checkbox key={item} name={item} label={item} value={allSelected.includes(item)} updateValue={handleSelect} ></Checkbox>
        )}
    </div>
}

export default SurveyPreferences;