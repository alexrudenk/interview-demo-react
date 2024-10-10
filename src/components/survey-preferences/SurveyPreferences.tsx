import { useState } from 'react';
import Checkbox from '../checkbox/Checkbox';
import './SurveyPreferences.scss';
import { PreferenceModel } from '../../models/preference-interface';

const PreferencesList: PreferenceModel[] = [
    { name: 'sports', label: 'Do sports' },
    { name: 'books', label: 'Read books' },
    { name: 'travel', label: 'Travel' },
]

function SurveyPreferences() {
    const [allSelected, setAllSelected] = useState([]);

    const handleSelect = (value, name) => {
        value ? setAllSelected([...allSelected, name]) : setAllSelected(allSelected.filter(item => item !== name))
    }

    const selectAll = (value) => {
        value ? setAllSelected(PreferencesList.map(item => item.name)) : setAllSelected([]);
    }

    return <div className="checkboxes-block">
        <h2>I like:</h2>
        <div className="controls">
            <Checkbox key='Select all' label='Select all' id='Select all' value={allSelected.length === PreferencesList.length} updateValue={selectAll} ></Checkbox>
        </div>
        <hr />
        {PreferencesList.map((item) =>
            <Checkbox key={item.name} name={item.name} label={item.label} value={allSelected.includes(item.name)} updateValue={handleSelect} ></Checkbox>
        )}
    </div>
}

export default SurveyPreferences;