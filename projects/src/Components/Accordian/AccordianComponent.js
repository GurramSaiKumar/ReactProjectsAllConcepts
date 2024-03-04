
import { useState } from 'react';
import data from './data';

export default function AccordionComponent() {
    const [selected, setSelected] = useState(null);
    const [enableMultSelection, setEnabledMultiSelection] = useState(false);
    const [multiple, selectedMultiple] = useState([]);

    function singleClick(itemId) {
        setSelected(itemId === selected ? null : itemId)
    }

    function multiClick(itemId) {
        let cpMultiple = [...multiple];
        const contains = multiple.indexOf(itemId);
        if(contains === -1){
            cpMultiple.push(itemId);
        }else{
            cpMultiple.splice(contains,1);
        }
        selectedMultiple(cpMultiple);
    }

    function enableMultiSlectionMode(mode) {
        setEnabledMultiSelection(mode)
        console.log(enableMultSelection)
    }


    return (
        <div>
            <button onClick={() => enableMultiSlectionMode(!enableMultSelection)}>Enable MultiSelection</button>
            {
                data && data.length > 0 ? (
                    <div>
                        {data.map(item => (
                            <div>
                                <h3 key={item.id} onClick={enableMultSelection ? 
                                    () => multiClick(item.id) : 
                                    () => singleClick(item.id)}>
                                    {item['question']} <span>+</span>
                                </h3>
                                {enableMultSelection ? 
                                <p>{multiple.indexOf(item.id) !== -1 && item.answer}</p> :
                                <p>{selected === item.id && item.answer}</p>}
                            </div>
                        ))}
                    </div>
                ) :
                    <div>No data found</div>
            }

        </div>

    );
}
