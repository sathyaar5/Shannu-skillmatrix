import React, { useRef } from "react";
import './AddSkillsToSkillDataUpload.css';

const AddSkillsToSillDataUpload = ({ onClose }) => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  const handleCancelClick = () => {
    onClose();
  };

  const handleSaveClick = () => {
    // console.log("Save clicked");
  };

  return (
    <div className="add-skills-to-skill-data-upload">
      <div className="frame-parent7">
        <div className="upload-excel-wrapper">
          <b className="upload-excel" onClick={handleUploadClick}>Upload Excel</b>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </div>
        <div className="frame-parent8">
          <div className="frame-wrapper">
            <div className="cloud-upload-fill1-wght400-gra-parent">
              <img
                className="cloud-upload-fill1-wght400-gra-icon"
                alt=""
                src="/cloud-upload-fill1-wght400-grad0-opsz24-1.svg"
              />
              <div className="frame-parent9">
                <div className="choose-file-wrapper" onClick={handleChooseFileClick}>
                  <div className="choose-file">{`Choose File `}</div>

                </div>
                <div className="or-container">
                  <div className="or1">or</div>
                </div>
                <div className="drag-and-drop-to-upload-wrapper">
                  <div className="drag-and-drop">Drag and Drop to upload</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper1">
            <div className="maximum-file-size-30-mb-wrapper">
              <div className="maximum-file-size">Maximum File Size : 30 MB</div>
            </div>
          </div>
          <div className="your-file-should-container">
            <span>*Your file should be in</span>
            <span className="excel"> Excel</span>
            <span> only*</span>
          </div>
        </div>
        <div className="inside-group">
          <div className="inside3" onClick={handleCancelClick}>
            <div className="button3">Cancel</div>
            <img className="arrow-down-icon3" alt="" src="/arrowdown3.svg" />
          </div>
          <div className="inside4" onClick={handleSaveClick}>
            <div className="button4">Save</div>
            <img className="arrow-down-icon4" alt="" src="/arrowdown4.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSkillsToSillDataUpload;
