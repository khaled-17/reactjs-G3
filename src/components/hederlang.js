import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Hederlang = () => {

    const [items, setItems] = useState('en');


    // useEffect(() => {
    // }, [items]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (!items) {
            localStorage.setItem('items', JSON.stringify('en'));
        }
    }, []);




    const { i18n } = useTranslation();

    let enflag = "https://elabdfoods.com/public/Content/images/usa.png"
    let arflag = "https://elabdfoods.com/public/Content/images/egypt.png"

    function changeLanguage(e) {
        //  i18n.changeLanguage(e.target.value);
        localStorage.setItem('items', JSON.stringify(i18n.language === "en" ? "ar" : "en"));

        i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
        // i18n.changeLanguage(items);

        // handelflag();
    }





    return (
        <div style={{ backgroundColor: "#f6b0ab" }} >

            <div className="d-flex justify-content-between container">

                <div className='p-0  style={{backgroundColor:"#f6b0ab"}}'>
                    Call Us: 16437
                </div>
                <div className='pb-1  style={{backgroundColor:"#f6b0ab"}}'>
                    <button style={{ backgroundColor: "#f6b0ab" }} className=' border border-0 p-0 ' onClick={changeLanguage} value='ar'><img src={i18n.language === "en" ? enflag : arflag} /></button>
                </div>

            </div>

        </div>
    );
}

export default Hederlang;
