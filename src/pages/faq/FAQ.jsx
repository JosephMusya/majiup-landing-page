import {useState} from 'react';
import './faq.css';

function FAQs(){
    const [visibility, setVisibility] = useState()

    const toggleDiv = (e) => {
        setVisibility(e);
    }

    return (
        <div className='faq'>
            <h1>Frequently Asked Questions</h1>
            <div>
                <article>What do you deal with</article>
                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolore. Veniam et ut aliquid voluptatibus molestias cupiditate vel cum atque.
                </article>
            </div>
        </div>
    )
}

export default FAQs;