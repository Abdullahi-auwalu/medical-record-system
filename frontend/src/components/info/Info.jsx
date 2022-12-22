import "./info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="info-top">
        <div>
          <span className="first-text blue-text">Patients Info</span>
          <p>Interdum et malesuada fames ac ante…</p>
          <div className="bar"></div>
        </div>
        <div>
          <span className="first-text">Medical Insurance</span>
          <p>Interdum et malesuada fames ac ante…</p>
        </div>
        <div>
          <span className="first-text">One Hospital feel</span>
          <p>Interdum et malesuada fames ac ante…</p>
        </div>
      </div>
      <div className="info-bottom">
        <div>
          <div></div>
          <span>
            Doctors will have access to just one ever updating patients record
            for safe and uniform treatment.
          </span>
        </div>
        <div>
          <div></div>
          <span>
            We have access to a good number of clinics and hospitals around.
          </span>
        </div>
        <div>
          <div></div>
          <span>Over a thousand pus patients records are stored with us.</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
