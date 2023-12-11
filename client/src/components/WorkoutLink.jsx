// added to Workout.jsx, this is where the url will go

import { useEffect, useRef } from "react";

const linkStyle = {
  zIndex: 5,
  boxShadow: "0 0 5px var(--darker)"
};

function EditLinkModal({link, editLink, setEditLink}) {
  const textInput = useRef();
  const urlInput = useRef();

  useEffect(() => {
    textInput.current.value = link.text;
    urlInput.current.value = link.url;
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const editedLink = { text: textInput.current.value, url: urlInput.current.value };
    setEditLink(editedLink);
  }

  return (
    <div className="modal fade" id="edit-link-modal">
    <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Edit Link</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal"/>
      </div>
      <form onSubmit={onSubmit}>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="edit-link-text" className="form-label">Text</label>
            <input ref={textInput} type="text" className="form-control" id="edit-link-text" />
          </div>
          <div className="mb-3">
            <label htmlFor="edit-link-url" className="form-label">URL</label>
            <input ref={urlInput} type="url" className="form-control" id="edit-link-url" />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
        </div>
      </form> 
    </div>
    </div>
    </div>
  );
}

function WorkoutLink({inEditMode, link, editLink, setEditLink}) {

  if(!link && !inEditMode) return;

  if(inEditMode) return (
    <>
      <h4>Edit Link</h4>

      <div className="d-flex flex-column gap-2">
        <div className="input-group overflow-hidden" key={editLink.url}>
          <button className="btn btn-secondary" style={linkStyle} data-bs-toggle="modal" data-bs-target="#edit-link-modal">
            <i className="fa fa-pencil"/>
          </button>
          <button className="btn btn-primary text-start flex-grow-1" data-bs-toggle="modal" data-bs-target="#edit-link-modal">
            { editLink.text }
          </button>
        </div>
      </div>

      <EditLinkModal link={link} editLink={editLink} setEditLink={setEditLink} />
    </>
  );

  return (
    <>
      <h5>Workout Link:</h5>
      <div className="d-flex flex-column gap-2">
        <div className="input-group overflow-hidden" key={link.url}>
          <a className="btn btn-secondary" href={link.url} style={linkStyle}>
            <i className="fa fa-link"></i>
          </a>
         
        </div>
      </div>
    </>
  );
}

export default WorkoutLink;