import React, { useRef, useState } from "react";
import CustomFrameComponent from "./CustomFrameComponent"; // Assuming FrameComponent is imported from a different file
import AddSkillsToSillDataUpload from "./AddSkillsToSkillDataUpload";

const AddSkillsToSkillData = () => {
  const fileInputRef = useRef(null);
  const [showUploadPopup, setShowUploadPopup] = useState(false);

  const handleUploadClick = () => {
    setShowUploadPopup(true);
  };

  const handleCloseUploadPopup = () => {
    setShowUploadPopup(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Process the uploaded file here
  };

  return (
    <section>
      <div className="add-skills-to-skill-data-inner">
        <div className="settings-wrapper">
          <div className="settings">Settings</div>
        </div>
      </div>
      <div className="table">
        <h2 className="add-skills-to">Add Skills to Existing Skill Data</h2>
        <div className="frame-group">
          <div className="frame-container">
            <CustomFrameComponent
              topicProduct="Topic/Product"
              enterTopicProductPlacehol="Enter Topic/Product"
            />
            <div className="frame-div">
              <CustomFrameComponent
                topicProduct="Domain/Technology Area"
                enterTopicProductPlacehol="Enter Domain/Technology Area"
                propWidth="unset"
                propFlex="1"
                propPadding="0px 0px 0px"
                propMinWidth="346px"
              />
              <CustomFrameComponent
                topicProduct="Sub-Domain/Technology"
                enterTopicProductPlacehol="Enter Sub-Domain/Technology Area"
                propWidth="unset"
                propFlex="1"
                propPadding="0px 0px 0px"
                propMinWidth="346px"
              />
            </div>
          </div>
          <div className="or-wrapper">
            <div className="or">Or</div>
          </div>
          <div className="frame-parent1">
            <div className="upload-excel-sheet-wrapper">
              <div className="upload-excel-sheet">Upload Excel Sheet</div>
            </div>
            <button className="upload-parent" onClick={handleUploadClick}>
              <div className="upload">{`Upload `}</div>
              <img
                className="add-circle-icon"
                alt=""
                src="/addcircle.svg"
              />
            </button>
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="inside-wrapper">
          <button className="inside">
            <div className="button">Save</div>
            <img className="arrow-down-icon" alt="" />
          </button>
        </div>
      </div>
      {/* Conditionally render the upload popup */}
      {showUploadPopup && <AddSkillsToSillDataUpload onClose={handleCloseUploadPopup} />}
    </section>
  );
};

export default AddSkillsToSkillData;