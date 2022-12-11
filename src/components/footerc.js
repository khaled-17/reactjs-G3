import React from 'react';
import { useTranslation } from 'react-i18next';


const Footerc = () => {
    const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }
    return (
        < >
            <div className="containekr ">

                <div className="d-flex justify-content-between  flex-wrap">
                    <div className=" mx-5 ">
                        © 2022 ELAbd Patisserie- All Rights Reserved
                    </div>



                    <div className=" mx-5 ">
                        Powered By Link TSP

                    </div>
                </div>


            </div>
         

        </>
    );
}

export default Footerc;
