import React from 'react';

const ProfilePart = () => {




    return (
        <>

            <form class="row g-3">


                <div class=" col-md-6">
                    <label for="validationDefault01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationDefault01" value="Mark" required />
                </div>

                <div class=" col-md-6">
                    <label for="validationDefault02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                </div>

                <div class=" col-md-6">
                    <label for="floatingInputValue">email</label>
                    <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com" />
                </div>

                <div class=" col-md-6">
                    <label for="floatingPassword">Password</label>
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                </div>
                <div class=" col-md-6">
                    <label for="floatingMobile">Mobile</label>
                    <input type="number" class="form-control" id="floatingMobile" placeholder="Mobile" />
                </div>

             

                <div class=" col-md-6 d-flex">
                </div>

                <div class=" col-md-6 d-flex">

                    <p className='mx-2'>Gender</p>


                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="mail" value="option1" />
                        <label class="form-check-label" for="mail">mail</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fmail" value="option2" />
                        <label class="form-check-label" for="fmail">fmail</label>
                    </div>



                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">subScribe to Out Newsletter</label>
                </div>


                <div class=" col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>




        </>
    );
}

export default ProfilePart;
