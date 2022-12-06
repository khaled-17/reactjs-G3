import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://elabd.blob.core.windows.net/elabdcontainer/2f618df1-7e93-4a6d-a977-50f6f4c4cfd2-638011778413534846.jpg',
    caption: 'First Slide'
  },
  {
    url: 'https://elabd.blob.core.windows.net/elabdcontainer/77591084-d2bc-4386-abca-a42edbbc4122-638017010154164225.jpg',
    caption: 'Second Slide'
  },
  {
    url: 'https://elabd.blob.core.windows.net/elabdcontainer/2e4e3994-f410-41c8-ae53-0dcc0a25445c-638016983157450045.jpg',
    caption: 'Third Slide'
  },
];

const slide = {
  height: '500px'

}

const Slideshow = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://elabd.blob.core.windows.net/elabdcontainer/77591084-d2bc-4386-abca-a42edbbc4122-638017010154164225.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://elabd.blob.core.windows.net/elabdcontainer/77591084-d2bc-4386-abca-a42edbbc4122-638017010154164225.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://elabd.blob.core.windows.net/elabdcontainer/77591084-d2bc-4386-abca-a42edbbc4122-638017010154164225.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    // <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    //   <ol className="carousel-indicators">
    //     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //   </ol>
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img className="d-block w-100" src="https://elabd.blob.core.windows.net/elabdcontainer/6a6d9993-4fc7-45fa-bea9-9fed21f50027-638016983256839513.jpg" alt="Second slide" />
    //     </div>
    //     <div className="carousel-item">
    //       <img className="d-block w-100" src="https://elabd.blob.core.windows.net/elabdcontainer/6a6d9993-4fc7-45fa-bea9-9fed21f50027-638016983256839513.jpg" alt="Second slide" />
    //     </div>
    //     <div className="carousel-item">
    //       <img className="d-block w-100" src="https://elabd.blob.core.windows.net/elabdcontainer/d49b82ac-9c16-4cf2-ba41-dd26567811d9-638017009432613698.jpg" alt="Third slide" />
    //     </div>
    //   </div>
    //   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Previous</span>
    //   </a>
    //   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Next</span>
    //   </a>
    // </div>


    // <div className="slide-container" >
    //   <Fade>
    //     {fadeImages.map((fadeImage, index) => (
    //       <div className="each-fade" key={index}>
    //         <div className="image-containder"  >
    //           <img src={fadeImage.url}  style={slide}/>
    //         </div>
    //         {/* <h2>{fadeImage.caption}</h2> */}
    //       </div>
    //     ))}
    //   </Fade>
    // </div>
  )
}

export default Slideshow;
