


import React from 'react'

export const Form = () => {
  return (
    <div className=' my-5 flex justify-center '>
      {/* <div class="container">
    <h1>FormSubmit Demo</h1>
    <form target="_blank" enctype="multipart/form-data" action="https://formsubmit.co/knupadhyay784@gmail.com" method="POST">
      <div class="form-group">
        <div class="form-row">
          <div class="col">
            <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
          </div>
          <input type="hidden" name="_captcha" value="false"/>
          <div class="col">
            <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
          </div>
          <div class="col">
          <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"/>
<input name="foo" type="file" accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"/>

            <input type="file" name="file" class="form-control" placeholder=""  accept="image/png, image/jpeg .pdf .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required/>
          </div>
        </div>
      </div>
      <div class="form-group">
        <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
      </div>
      <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
    </form>
  </div> */}


      <div class="w-full max-w-sm p-1">
        <form target="_blank" enctype="multipart/form-data" action="https://formsubmit.co/knupadhyay784@gmail.com" method="POST" class="bg-gray-100 shadow-2xl rounded px-8 pt-6 pb-8 mb-4 ">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="fullname">
              Full Name
            </label>
            <input class="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" name='Full Name' type="text" placeholder="" required />
          </div>
          <input type="hidden" name="_captcha" value="false"/>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="fullname">
              Email
            </label>
            <input class="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='Email' type="email" placeholder="youremail123@gmail.com"  required/>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="fullname">
              Mobile Number
            </label>
            <input class="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobilenumber" name='Mobile Number' type="text" placeholder="" required />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="fullname">
              Upload Document
            </label>
            <input class=" w-full py-2 px-3  " id="mobilenumber" name='Mobile Number' type="file" placeholder=""  accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps" />
           
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="fullname">
              Write
            </label>
            <textarea name='Message' rows="1" cols="25" class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div class="flex items-center justify-between">
            {/* <button class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button> */}
                  <button type="submit" class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline">Submit Form</button>


          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>


          </div>
          )
}
