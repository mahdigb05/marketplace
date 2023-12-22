import CardContainer from "../../../components/conatiner-components/CardContainer";
import Button from "../../../components/core/Button";

const AcademySection = () => {
    return (
        <CardContainer className="p-4 md:p-5 flex flex-col gap-5">
            <div> 
                <h3>Academy</h3>
            </div>
            <div>
                <p className="text-xs md:text-base">Empower yourself with our Data Markeplace Academy. Dive into
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