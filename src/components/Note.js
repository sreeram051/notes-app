import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, Text, Date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{Text}</span>

      <div className="note-footer">
        <small>2{Date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="Delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};
export default Note;
