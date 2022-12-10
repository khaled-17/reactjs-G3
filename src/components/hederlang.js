import React,{useState,useEffect} from 'react';
import { useTranslation } from 'react-i18next';

const Hederlang = () => {
    const [items, setItems] = useState('');


    
 
    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
    }, [items]);




    const { i18n } = useTranslation();
    function changeLanguage(e) {
        localStorage.setItem('items', JSON.stringify(e.target.value));

         i18n.changeLanguage(items);
        // console.log(lan);

    }
    return (
        <div>

            <div class="d-flex justify-content-between">

                <div>
                Call Us: 16437
                </div>

                <div>
                    <div className='footer'>
                        <button className='m-3' onClick={changeLanguage} value='en'>En</button>
                        <button className='m-3' onClick={changeLanguage} value='ar'>Ar</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Hederlang;
