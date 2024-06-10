const NavbarAdmin = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{
        height: "70px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 8px 0px #0000000D",
      }}
    >
      <div
        className="mx-4"
        style={{
          width: "95px",
          height: "32px",
          backgroundColor: "#CFD4ED",
        }}
      ></div>
      <div className="mx-4 d-flex align-items-center justify-content-between">
        <div className="search d-flex mx-2" style={{ width: "fit-content" }}>
          <input
            className="px-2 py-1 input-form"
            type="text"
            placeholder="Search"
            style={{
              fontSize: "12px",
              fontWeight: "400",
              width: "70%",
              borderRadius: "0",
              border: "2px solid #A5A5A5",
            }}
          />
          <button
            className="p-0 m-0"
            style={{
              width: "30%",
              border: "2px solid #0D28A6",
              color: "#0D28A6",
              fontSize: "14px",
              fontWeight: "700",
              backgroundColor: "#fff",
            }}
          >
            Search
          </button>
        </div>
        <div className="profile mx-2 d-flex align-items-center justify-content-between">
          <img className="mx-1" src="/assets/profile.png" alt="" />
          <p
            className="m-0 p-0"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            Unis Badri
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
