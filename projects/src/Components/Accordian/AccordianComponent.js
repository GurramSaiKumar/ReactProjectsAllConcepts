import data from "./data";
export default function AccordionComponent() {
    return (
        <div>
            {
                data && data.length > 0 ? (
                    <div>
                        {data.map(item => <h3>{item['question']} <span>+</span></h3>)}

                    </div>) :
                    <div>No data found</div>
            }
        </div>
    );
}