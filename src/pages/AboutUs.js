import React from 'react';
import Footerc from '../components/footer/footerc';
import Footermain from './../components/footer/footermain';
import { useTranslation } from 'react-i18next';
import Hederlang from './../components/hederlang';
import Header from '.././components/header/header';
import { Trans, withTranslation } from 'react-i18next';


const AboutUs = () => {
    const { t } = useTranslation();

     return (

        <>
        <Hederlang/>
        <Header/>
            {/* <h1><T keyName="hello_world">Hello world!</T></h1> */}
            <p>

            {/* {t('AboutUsc')} */}
             </p>

            <div className="container">
            <p><Trans>AboutUsc</Trans></p>
                {/* The journey of El Abd Patisserie began in 1974 when the first branch was opened in downtown on Talaat Harb Street. That’s when we started writing the history of El Abd and carving a big name in the production of Eastern and Western sweets as well as bakery. Later, in 1996, another branch was opened on 26th July Street in downtown.</p>                Since the very beginning, our main goal is to share people their happiness and joy on various occasions and draw a smile on the faces of Egyptian family members by offering a variety of high-quality products.</p>
                For instance, our bakery products, such as pates, croissants and Danish are always a good choice for breakfast or a quick snack. Western and Oriental sweets as well as chocolates are gifting products that are always available in every Egyptian household. As for the ice cream, it’s characterized by its natural ingredients and doesn’t contain any additives
                When it comes to feasts and special occasions, either Eid or Mouled el Nabi, we are honored that our customers can always rely on us. Our production of Kahk and Halawet Mouled is characterized by craftsmanship which is the secret of our distinction as well as the fresh homemade savor that satisfies the Egyptian taste.
                In 2011, since our clients love our products and because of high demand, our ambition began to increase. That’s when we started our expansion plan, by distributing products such as Yameesh Ramadan, Kahk el Eid and Halawet Mouled in the largest supermarket and hyper market chains.
                In April 2019, a new branch was opened in Mall of Arabia and to complete our success story, we launched our second flagship branch in 6th of October City in Hossary Square in October 2019.
                In July 2020, we opened our third new branch in City Stars, Nasr City and in December 2020 our fourth new branch opened in Mohandessin, Gameat El Dowal El Arabia Street.
                In June 2021, to get one step closer to our beloved customers, we launched our fifth new branch in Shubra */}
            </div>
            <Footermain />
            <Footerc />
        </>
    );
}

export default withTranslation()(AboutUs);
