import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-fit mx-auto my-12 text-center">
            <p className="text-yellow-400 mb-3">--- {subHeading} ---</p>
            <h3 className="text-4xl uppercase font-bold border-y-4 py-4 px-12">{heading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
}

export default SectionTitle;