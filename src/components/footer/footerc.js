import React from 'react';
import { useTranslation } from 'react-i18next';


const Footerc = () => {
 
    const { t } = useTranslation();

    return (
        < >
            <div className="containekr ">

                <div className="d-flex justify-content-between  flex-wrap">
                    <div className=" mx-5 ">
                       {t('© 2022 ELAbd Patisserie- All Rights Reserved')}
                    </div>



                    <div className=" mx-5 ">
                        {t('Powered By')} Link TSP

                    </div>
                </div>


            </div>
         

        </>
    );
}

export default Footerc;
