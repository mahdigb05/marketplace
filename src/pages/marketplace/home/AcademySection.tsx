import CardContainer from "../../../components/conatiner-components/CardContainer";
import Button from "../../../components/core/Button";

const AcademySection = () => {
    return (
        <CardContainer className="p-4 md:p-5">
            <h2 className="mb-5 text-4xl font-bold ">Academy</h2>
            <div className="my-8">
                <p>Empower yourself with our Data Markeplace Academy. Dive into
                    comprehensive courses that demystify data sourcing, analytics and market trends. Elevate your skills
                    to
                    navigate the vast landscape of data offerings, ensuring you maximize the potential of our
                    marketplace
                    with guidelines.</p>
            </div>
            <Button type="link" className="m-auto">
                Go to Academy
            </Button>
        </CardContainer>
    )
}

export default AcademySection;