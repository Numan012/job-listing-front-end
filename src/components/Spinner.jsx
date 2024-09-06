import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  maxWidth: "500px",
  margin: "auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={70}
    />
  );
};
export default Spinner;
