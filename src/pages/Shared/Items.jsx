import PropTypes from "prop-types";
import Item from "../../components/Item";

const Items = ({ items }) => {
    return (
        <div>

            <div className="grid grid-cols-2 gap-6">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <div className="flex justify-center my-6">
                <button className="btn">View Full Menu</button>
            </div>
        </div>
    );
};

Items.propTypes = {
    items: PropTypes.array.isRequired
}

export default Items;