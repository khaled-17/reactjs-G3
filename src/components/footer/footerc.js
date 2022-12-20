import React from 'react';
import { useTranslation } from 'react-i18next';


const Footerc = () => {
 
    const { t } = useTranslation();

    return (
        < >
 
                <div style={{backgroundColor:'#FAF5F2'}} className="d-flex justify-content-between  flex-wrap border border-top border-start-0 border-end-0 border-dark ">
                    <div className=" m-2 ">
                       {t('© 2022 ELAbd Patisserie- All Rights Reserved')}
                    </div>



                    <div className=" m-2 ">
                        {t('Powered By')} Link TSP

                    </div>
                </div>


          

        </>
    );
}

export default Footerc;
