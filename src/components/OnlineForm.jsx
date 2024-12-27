import React from "react";

const OnlineForm = () => {
  return (
    <>
      <div className="container mx-auto mt-2 inq-form p-3">
        <h4 className="text-center bg-success text-white py-2  ">
          Apply Online
        </h4>
        <div className="row ">
        
          <div className="d-flex justify-content-center align-content-center flex-wrap gap-3">
            <img src="/akasharalogo.png" alt="logo" className="img-fluid" />
            <div className="mb-md-0 p-0 d-flex flex-column inquiry-text">
              <span>
                <i className="fas fa-location me-1 text-success "></i>Kageshwori
                Manohara - 9, Kathmandu, Nepal
              </span>
              <span>
                <i className="fas fa-phone me-1 text-success "></i>
                01-4993031/32/33{" "}
              </span>
              <span>
                <i className="fas fa-message me-1 text-success "></i>
                info@aksharaaschool.edu.np{" "}
              </span>
              <span>
                <i className="fas fa-globe me-1 text-success "></i>
                www.aksharaaschool.edu.np
              </span>
            </div>
            <div>
                <img src="" alt="" className="student-img" />
            </div>
          </div>
        </div>

        <form className="px-4 border">
          {/* Student Details */}
          <div className="mb-1">
            <h6 className="form-head position-relative mt-4 ">
              Student Details : <span className="paralleogram "></span>
            </h6>
            <div className="row">
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Name</span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Student Name"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Name in Nepali</span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Student Name"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Nationality</span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Student Nationality"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group d-flex align-items-center gap-3">
                  <span className="input-group-text">Gender</span>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderMale"
                      value="male"
                    />
                    <label className="form-check-label" htmlFor="genderMale">
                      <i className="fas fa-male" /> Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderFemale"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      <i className="fas fa-female" /> Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Birth Place</span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Birth Place"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text">Date of Birth</span>
                  <input
                    type="date"
                    className="form-control text-decoration-none rounded-0 ms-2"
                    id="dobNepali"
                    placeholder="in Nepali"
                  />
                  <input
                    type="date"
                    className="form-control text-decoration-none rounded-0 ms-2"
                    id="dobEnglish"
                    placeholder="in English"
                  />
                </div>
              </div>
            </div>

            {/* temporary address */}
            <div className="row mt-4">
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Residencial Address</span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Residencial Address"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Town/City</span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Town/City"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Landmark</span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Landmark"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Province </span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Province "
                  />
                </div>
              </div>
            </div>

            {/* parmanent address  */}
            <div className="row mt-4">
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Parmanent Address</span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Parmanent Address"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Town/City</span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Town/City"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Landmark</span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Landmark"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="input-group">
                  <span className="input-group-text ">Province </span>
                  <input
                    type="text"
                    className="form-control text-decoration-none rounded-0"
                    id="studentName"
                    placeholder="Province "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Parent Details */}
          <div className="mb-3">
            <h6 className="form-head position-relative mt-4">
              PARTICULARS OF PARENTS/GUARDIAN
              <span className="paralleogram"></span>
            </h6>
            {/* fathers details  */}
            <h6 className="form-head position-relative mt-4">
              Father Details :<span className="paralleogram"></span>
            </h6>
            <div className="row">
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-user me-2" />
                    <span>Father name</span>
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="parentName"
                    placeholder="Father Name"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope me-2" />
                    <span>email</span>
                  </span>
                  <input
                    type="email"
                    className="form-control rounded-0"
                    id="parentEmail"
                    placeholder="Parent Email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-phone me-2" /> <span>phone</span>
                  </span>
                  <input
                    type="number"
                    className="form-control rounded-0"
                    id="parentPhone"
                    placeholder=" Phone"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-briefcase me-2" />
                    <span>occupation</span>
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="parentOccupation"
                    placeholder="Parent Occupation"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group d-flex align-items-center gap-3">
                  <span className="input-group-text">Profession</span>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderMale"
                      value="male"
                    />
                    <label className="form-check-label" htmlFor="genderMale">
                      Bussiness
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderFemale"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      service
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderFemale"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      others
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-home me-2" />
                    <span>organization</span>
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="parentAddress"
                    placeholder="working organization"
                  />
                </div>
              </div>
            </div>
            <hr />

            {/* mothers details  */}

            <h6 className="form-head position-relative mt-4">
              Mother Details :<span className="paralleogram"></span>
            </h6>
            <div className="row">
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-user me-2" />
                    <span>Mother name</span>
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="parentName"
                    placeholder="Mother Name"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope me-2" />
                    <span>email</span>
                  </span>
                  <input
                    type="email"
                    className="form-control rounded-0"
                    id="parentEmail"
                    placeholder="Parent Email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-phone me-2" /> <span>phone</span>
                  </span>
                  <input
                    type="number"
                    className="form-control rounded-0"
                    id="parentPhone"
                    placeholder=" Phone"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-briefcase me-2" />
                    <span>occupation</span>
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="parentOccupation"
                    placeholder="Parent Occupation"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group d-flex align-items-center gap-3">
                  <span className="input-group-text">Profession</span>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderMale"
                      value="male"
                    />
                    <label className="form-check-label" htmlFor="genderMale">
                      Bussiness
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderFemale"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      service
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderFemale"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      others
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-home me-2" />
                    <span>organization</span>
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="parentAddress"
                    placeholder="working organization"
                  />
                </div>
              </div>
            </div>
            <hr />

            {/* Guardians  details  */}
            <h6 className="form-head position-relative mt-4">
              Guardian Details :<span className="paralleogram"></span>
            </h6>
            <div className="row">
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-user me-2" />
                    <span>Guardian name</span>
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="parentName"
                    placeholder="Guardian Name"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope me-2" />
                    <span>email</span>
                  </span>
                  <input
                    type="email"
                    className="form-control rounded-0"
                    id="parentEmail"
                    placeholder="Parent Email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-phone me-2" /> <span>phone</span>
                  </span>
                  <input
                    type="number"
                    className="form-control rounded-0"
                    id="parentPhone"
                    placeholder=" Phone"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-1">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-briefcase me-2" />
                    <span>occupation</span>
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="parentOccupation"
                    placeholder="Parent Occupation"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group d-flex align-items-center gap-3">
                  <span className="input-group-text">Profession</span>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderMale"
                      value="male"
                    />
                    <label className="form-check-label" htmlFor="genderMale">
                      Bussiness
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderFemale"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      service
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderFemale"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      others
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-home me-2" />
                    <span>organization</span>
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="parentAddress"
                    placeholder="working organization"
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>

          {/* family details */}
          <div className="mb-5">
            <h6 className="form-head position-relative  mt-4">
              FAMILY DETAILS
              <span className="paralleogram"></span>
            </h6>
            <div className="row ">
              <div className="col-md-12 mb-2">
                <div className="input-group d-flex align-items-center gap-3">
                  <span className="input-group-text">
                    Maritial Status for Parent
                  </span>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderMale"
                      value="male"
                    />
                    <label className="form-check-label" htmlFor="genderMale">
                      Married
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderFemale"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      seperated
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderFemale"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      Divorced
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group d-flex align-items-center gap-3">
                  <span className="input-group-text text-wrap">
                    If Seperated/Divorced child is under the custody of
                  </span>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderMale"
                      value="male"
                    />
                    <label className="form-check-label" htmlFor="genderMale">
                      Mother
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderOptions"
                      id="genderFemale"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      Father
                    </label>
                  </div>

                  <label className="form-check-label" htmlFor="genderFemale">
                    Others (Please Specify)
                    <span>
                      <input type="text" />
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* MORE ABOUT THE CHILD */}
          <div className="mb-3">
            <h6 className="form-head position-relative  mt-4">
              MORE ABOUT THE CHILD
              <span className="paralleogram"></span>
            </h6>
            <div className="col-md-12">
              <div className="input-group d-flex align-items-center gap-3">
                <span className="input-group-text">Previous Schooling </span>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    id="genderMale"
                    value="male"
                  />
                  <label className="form-check-label" htmlFor="genderMale">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    id="genderFemale"
                    value="female"
                  />
                  <label className="form-check-label" htmlFor="genderFemale">
                    No
                  </label>
                </div>

                <label className="form-check-label" htmlFor="genderFemale">
                  If yes, please specify
                  <span>
                    <input type="text" />
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* DECLERATION OF PARENT/GUARDIAN */}
          <div className="mb-3">
            <h6 className="form-head position-relative py-2  mt-4">
              DECLERATION OF PARENT/GUARDIAN
              <span className="paralleogram"></span>
            </h6>
            <p>
              I declare that the information given is correct and complete and I
              have not withheld any information
            </p>
            <p>
              I agree to entrust my child under the care of the staff at
              Aksharaa School. I shall not hold Aksharaa School responsible for
              any unavoidable mishap or accident
            </p>
            <p>
              I am aware that the fees once paid is non-refundable and
              non-transferable under any circumstances. I hhave read through the
              Aksharaa School policies and am in agreement with the said
              policies. Likewise the security deposit is non refundable if the
              child is withdrawn before the completion of the academic session
            </p>
            Parent's Name: <input type="text" />
            <br />
            Parent's Signature: ____________________
            <br />
            <br />
            <h6>Terms & condition : </h6>
            <ul>
              <li className="">
                Acceptance of the application form does not guarantee admission
              </li>
              <li>
                Confirmation of the admission is subject of payment of the
                admission fee
              </li>
              <li>
                The admission is conditional and may be withdrawn by the
                preschool if I/We are found to be in breach of any of the terms
                of our decleration in this form
              </li>
            </ul>
            <h4>WE UNDERSIGNED STATE THAT</h4>
            <hr />
            <p>
              1. The-School may collect, store, deal, handle and use any
              sensitive informarion provided by me/ us or collected by the
              School, such as personal information including medical
              information, photo, video of the child and parent (collectively
              Data). Such data has been provided by me/ us or collected by the
              School out of my/ our fee will and consent and I/ We confirm that
              the School has right to use the same/
            </p>
            <p>
              2. The Data may be shared by the School with third parties such as
              the staff and employees of the School as it may deem necessary in
              order to process the admission formalities and for record keeping.
              I/ We understand and acknowledge that the School takes due care in
              protecting the information provided by me/ us and I We have no
              objection to the use of the Data by the School.
            </p>
            <p>
              3 I/We are aware of thee safety and security measures provided by
              the School at its premises and in the vehicles operated by the
              School and are satisfied with the same. The School, its management
              and /or its staff shall not be held responsble / liable, nor shall
              I/We ralse any claim against the School, its management and/or its
              staff in the event any mishap, injury or loss is caused to the
              child while at the School premises and/or vehicles operated by the
              School
            </p>
            <p>
              4. I/We give my consent to the School to administer appropriate
              medication for common ailments. I/We also give my/our consent for
              emergency medical treatment to be administered in case of an
              emergency situation arising due to an accident/medical emergency
              with the understanding that I (father / mother) /We (parents) of
              the child shall be informed as soon as possible. The School will
              accept no responsibility for any unforeseen incident that may
              occur due to the administration of medication/ treatment or both
            </p>
            <p>
              5. The School will provide me /us with a copy of the School Policy
              Guidelines before the commencement of the acadenic session. I/We
              shall abide by all the terms and conditions mentioned therein. The
              School management reserves the right to update /modify /revise /
              amend the School 'Parent Manual' and the School Policy Guidelines
              from time to time with or without intimation to me/us. I/We shall
              abide by the terms of such updated / modified/revised/ amended
              policies, as the case may be
            </p>
            <p>
              For further details and term, please refer out website
              www.aksharaaschool.edu.np
            </p>
            <div className="d-flex gap-3 mb-2 flex-wrap">
              <p className="me-5">
                {" "}
                Parent's Name: <input type="text" className="ps-5" />{" "}
              </p>
              <p>
                Relation: <input type="text" className="ps-5" />
              </p>
            </div>
            Parent's Signature: ____________________
          </div>

          {/* DOCUMENTS REQUIRED FOR ADMISSION */}
          <div className="mb-3">
            <h6 className="form-head position-relative py-2  mt-5 mb-3">
              DOCUMENTS REQUIRED FOR ADMISSION
              <span className="paralleogram"></span>
            </h6>
            <div className="mb-3 row">
              <div className="col-md-6">
                <div className="file-input-wrapper">
                  <div>
                    <span>Photocopy of Birth Certificate</span>
                    <input
                      className="form-control d-none"
                      type="file"
                      id="formFile"
                    />
                  </div>
                  <div className="file-preview" id="formFile">
                    <label htmlFor="formFile"> file chose</label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="file-input-wrapper">
                  <div>
                    <span>Character & Transfer Certificate</span>
                    <input
                      className="form-control d-none"
                      type="file"
                      id="formFile"
                    />
                  </div>
                  <div className="file-preview" id="formFile">
                    <label htmlFor="formFile"> file chose</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-md-6">
                <div className="file-input-wrapper">
                  <div>
                    <span> Assesment Marksheet </span>
                    <input
                      className="form-control d-none"
                      type="file"
                      id="formFile"
                    />
                  </div>
                  <div className="file-preview" id="formFile">
                    <label htmlFor="formFile"> file chose</label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="file-input-wrapper">
                  <div>
                    <span>Parent's Citizenship Photocopy</span>
                    <input
                      className="form-control d-none"
                      type="file"
                      id="formFile"
                    />
                  </div>
                  <div className="file-preview" id="formFile">
                    <label htmlFor="formFile"> file chose</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-md-4">
                <div className="file-input-wrapper">
                  <div>
                    <span>Father's Photo</span>
                    <input
                      className="form-control d-none"
                      type="file"
                      id="formFile"
                    />
                  </div>
                  <div className="file-preview" id="formFile">
                    <label htmlFor="formFile"> file chose</label>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="file-input-wrapper">
                  <div>
                    <span>Mother's Photo</span>
                    <input
                      className="form-control d-none"
                      type="file"
                      id="formFile"
                    />
                  </div>
                  <div className="file-preview" id="formFile">
                    <label htmlFor="formFile"> file chose</label>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="file-input-wrapper">
                  <div>
                    <span>Guardian's Photo</span>
                    <input
                      className="form-control d-none"
                      type="file"
                      id="formFile"
                    />
                  </div>
                  <div className="file-preview" id="formFile">
                    <label htmlFor="formFile"> file chose</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-4 ">
            <input type="checkbox" />
            <span className="ps-2 text-success">
              {" "}
              By checking the checkbox you have confirmed the eligibility
              criteria to apply and you are ready for further application
              process.
            </span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="button-21 px-4">
            <i className="fas fa-paper-plane" /> Apply Now
          </button>
        </form>
      </div>
    </>
  );
};

export default OnlineForm;
