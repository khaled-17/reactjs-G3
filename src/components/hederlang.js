import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Hederlang = () => {

 

    const { i18n } = useTranslation();
 
    let enflag="https://elabdfoods.com/public/Content/images/usa.png"
    let arflag="https://elabdfoods.com/public/Content/images/egypt.png"

        function changeLanguage(e) {
        //  i18n.changeLanguage(e.target.value);
         i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
 
        // handelflag();
     }
  
    
   


    return (
        <div>

            <div class="d-flex justify-content-between">

                <div>
                    Call Us: 16437
                </div>

                <div>
                    
                    <div>                                                                             
                         <button className='m-1 border-0' onClick={changeLanguage} value='ar'><img src={i18n.language === "en" ? enflag : arflag}/></button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Hederlang;
