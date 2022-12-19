import React from 'react';
import Rating from './Rating';


const AddReview = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}

      <button type="button" class="border border-0" data-bs-toggle="modal" data-bs-target="#exampleModal"  >+ Add Review </button>


      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">add coment</h1>
              <button type="button" class="button-prod border-0" data-bs-dismiss="modal" aria-label="Close">x</button>
            </div>
            <div class="modal-body">
              <Rating />
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>



            </div>
            <div class="modal-footer d-flex justify-content-center ">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn button-prod2">send</button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default AddReview;
