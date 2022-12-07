
import Carousel from './Carousel';
import Cards from './cards';
const Carou = () => {
    return (

        
        <div style={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        
        <Carousel show={4}>
            {/* <div>
                    <div style={{ padding: 8 }}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
                    </div>
        </div> */}


<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
               

            </Carousel>
        </div>
    )
}

export default Carou