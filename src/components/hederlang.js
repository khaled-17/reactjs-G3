import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
 
const Hederlang = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    let enflag = "https://elabdfoods.com/public/Content/images/usa.png"
    let arflag = "https://elabdfoods.com/public/Content/images/egypt.png"



    const [items, setItems] = useState('en');

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('items'));
        i18n.changeLanguage(item);

        if (!item) {
            localStorage.setItem('items', JSON.stringify('en'));
        }
    }, []);





    function changeLanguage(e) {
        //  i18n.changeLanguage(e.target.value);
        localStorage.setItem('items', JSON.stringify(i18n.language === "en" ? "ar" : "en"));

        i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
        // i18n.changeLanguage(items);

        // handelflag();
    }





    return (
        <div style={{ backgroundColor: "red" }} >

            <div className="d-flex justify-content-between container">

                <div className='p-0  style={{backgroundColor:"#f6b0ab"}}'>
                    {t('Call Us')} :16437
                </div>
                <div className='pb-1  style={{backgroundColor:"#f6b0ab"}}'>
                    <button style={{ backgroundColor: "#f6b0ab" }} className=' border border-0 p-0 ' onClick={changeLanguage} value='ar'><img src={i18n.language === "en" ?  arflag: enflag} /></button>
                </div>

            </div>

        </div>
    );
}

export default Hederlang;
