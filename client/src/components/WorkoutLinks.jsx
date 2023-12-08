// added to Workout.jsx, this is where the url will go
import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";

const linkStyle = {
  zIndex: 15,
  boxShadow: "0 0 5px var(--darker)"
};

function AddLinkModal({setIndex, editLinks, setEditLinks}) {
  const textInput = useRef();
  const urlInput = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const editedLinks = [...editLinks];
    editedLinks.push({ text: textInput.current.value, url: urlInput.current.value });
    setEditLinks(editedLinks);
  }

  return (
    <div className="modal fade" id="add-link-modal">
    <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Add Link</h1>
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
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setIndex(-1)}>Close</button>
          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
        </div>
      </form> 
    </div>
    </div>
    </div>
  );
}

function EditLinkModal({index, setIndex, editLinks, setEditLinks}) {
  const textInput = useRef();
  const urlInput = useRef();

  useEffect(() => {
    if(index < 0) return;

    textInput.current.value = editLinks[index].text;
    urlInput.current.value = editLinks[index].url;
  }, [index]);

  function onSubmit(e) {
    e.preventDefault();
    const editedLinks = [...editLinks];
    editedLinks[index] = { text: textInput.current.value, url: urlInput.current.value };
    setEditLinks(editedLinks);
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
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setIndex(-1)}>Close</button>
          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
        </div>
      </form> 
    </div>
    </div>
    </div>
  );
}

function WorkoutLinks({inEditMode, links, editLinks, setEditLinks}) {
  const [linkIndex, setLinkIndex] = useState(-1);

  if(!links && !inEditMode) return;

  if(inEditMode) return (
    <>
      <h4>Edit Links</h4>

      <div className="d-flex flex-column gap-2">
        { editLinks.map((link, index) => (
          <div className="input-group overflow-hidden" key={link.url}>
            <button className="btn btn-secondary" style={linkStyle} onClick={() =>  setLinkIndex(index) } data-bs-toggle="modal" data-bs-target="#edit-link-modal">
              <i className="fa fa-pencil"/>
            </button>
            <button className="btn btn-primary text-start flex-grow-1" onClick={() => setLinkIndex(index)} data-bs-toggle="modal" data-bs-target="#edit-link-modal">
              { link.text }
            </button>
            <button className="btn btn-danger" style={linkStyle} onClick={() => { const editedLinks = [...editLinks]; editedLinks.splice(index, 1); setEditLinks(editedLinks); }}>
              <i className="fa fa-trash"/>
            </button>
          </div>
          ))
        }
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#add-link-modal">
            <i className="fa fa-plus"/>
          </button>
        </div>
      </div>

      <EditLinkModal index={linkIndex} setIndex={setLinkIndex} editLinks={editLinks} setEditLinks={setEditLinks} />
      <AddLinkModal setIndex={setLinkIndex} editLinks={editLinks} setEditLinks={setEditLinks} />
    </>
  );

  return (
    <>
      <h4>Links</h4>
      <div className="d-flex flex-column gap-2">
        { links.map((link) => (
            <div className="input-group overflow-hidden" key={link.url}>
              <a className="btn btn-secondary" href={link.url} style={linkStyle}>
                <i className="fa fa-paperclip"></i>
              </a>
              <a className="btn btn-primary text-start flex-grow-1" href={link.url}>
                { link.text }
              </a>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default WorkoutLinks;