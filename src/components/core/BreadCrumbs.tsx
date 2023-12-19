import useBreadcrumbs from "use-react-router-breadcrumbs";
import {HomeIcon} from "./icons";
import {Link} from "react-router-dom";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    console.log(breadcrumbs);

    return (
        <div className="text-xs">
            {breadcrumbs.map((breadcrumb) => (
                <span className="flex items-center gap-1.5" key={breadcrumb.key}>
                    {breadcrumb.key === '/' ? (
                        <>
                            <HomeIcon/>{' '}
                            <Link to={breadcrumb.location}>{breadcrumb.breadcrumb}</Link>
                        </>
                    ) : (
                        <Link to={breadcrumb.location}>{breadcrumb.breadcrumb}</Link>
                    )}
                </span>
            ))}
        </div>
    );
};

export default Breadcrumbs;