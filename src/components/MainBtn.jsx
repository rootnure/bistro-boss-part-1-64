import PropTypes from "prop-types";

const MainBtn = ({ btnText }) => {
    return (
        <>
            <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-[6px] bg-black bg-opacity-40 text-white border-black font-black">{btnText}</button>
        </>
    );
};

MainBtn.propTypes = {
    btnText: PropTypes.string.isRequired
}

export default MainBtn;