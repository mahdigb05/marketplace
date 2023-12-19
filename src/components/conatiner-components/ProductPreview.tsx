import {FC} from "react";
import {Product} from "../types";
import CardContainer from "./CardContainer";

interface ProductPreviewProps {
    product: Product;
}

const ProductPreview: FC<ProductPreviewProps> = ({product}) => {

    const {description, name} = product;

    return (
        <CardContainer className="px-4 py-5 hover:bg-green-100 hover:ring-sky-500 cursor-pointer">
            <div>
                <p className="text-xl font-bold">{name}</p>
                <p>{description}</p>
            </div>
        </CardContainer>
    )
}

export default ProductPreview;