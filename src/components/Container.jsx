import PropTypes from "prop-types";

const Container = ({ children }) => {
    return (
        <>
            <div className="max-w-[1440px] mx-auto">
                <div className='container mx-auto'>
                    {children}
                </div>
            </div>
        </>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired
}

export default Container;