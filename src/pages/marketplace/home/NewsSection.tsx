import CardContainer from "../../../components/conatiner-components/CardContainer";
import Button from "../../../components/core/Button";

const NewsSection = () => {
    return (
        <CardContainer>
            <p className="mb-5 text-4xl font-bold ">News</p>
            <div className="my-8">
                <p>Stay informed with the latest updates in the data marketplace. Discover new datasets, products
                    releases, and industry insights. Our news page keeps ou in the loop, ensuring you make data-driven
                    decisions with the freshest information available.</p>
            </div>
            <Button className="m-auto bg-green-300 p-4 rounded-xl flex" type="link">
                Go to News
            </Button>
        </CardContainer>
    )
}

export default NewsSection;