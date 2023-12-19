import CardContainer from "../../../components/conatiner-components/CardContainer";
import {Product} from "../../../components/types";
import ProductPreview from "../../../components/conatiner-components/ProductPreview";
import Button from "../../../components/core/Button";

const products: Product[] = [
    {
        name: "WMC",
        description: "Product description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
    },
    {
        name: "Green Office",
        description: "Product description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
    }
]

const NewProductsSection = () => {
    return (
        <CardContainer>
            <div>
                <div className="flex flex-col gap-5">
                    <p className="text-4xl font-bold ">New Product</p>
                    <p className="text-2xl font-bold ">New Products</p>
                </div>
                <div className="flex flex-col gap-5 my-8">
                    {
                        products.map(product =>
                            <ProductPreview product={product}/>
                        )
                    }
                </div>
                <Button className="m-auto bg-green-300 p-4 rounded-xl flex" type="link">
                    Go to Products list
                </Button>
            </div>
        </CardContainer>
    )
}

export default NewProductsSection;