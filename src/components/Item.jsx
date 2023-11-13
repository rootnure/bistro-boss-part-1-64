import PropTypes from "prop-types";

const Item = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex gap-2 items-center">
            <img src={image} alt="" className="w-20 h-full rounded-[0_80px_80px_80px]" />
            <div>
                <h3 className="uppercase font-bold">{name}--------------</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired
}

export default Item;