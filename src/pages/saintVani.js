import Breadcrumb from "../components/breadcrumb";
import { useLoaderData } from "react-router-dom";
import Title from "../components/title";
import Detail from "../components/detail";
import Grid from "../components/grid";
import HelpfulVideosLayout from "../layout/helpfulVideosLayout";

import CourseVideoLayout from "../layout/courseVideoLayout";
import FaqLayout from "../layout/faqLayout";

function SaintVani() {

    const { resData1 } = useLoaderData();

     const { details } = resData1
     

    return (
        <>
            <Breadcrumb />
            <Title title={details} />
            <Detail detail={details} />
            <Grid title={"Video Series (8)"} />
            <CourseVideoLayout />
            <Grid title={"Other Helpful Video Series"} />
            <HelpfulVideosLayout />
            <FaqLayout />
           
        </>

    )
}

export default SaintVani;

export async function loader() {
    const response1 = await fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3");
    const response2 = await fetch("https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi");

      const resData1 = await response1.json();
      const resData2 = await response2.json();
    
    return ({
        resData2,
        resData1
    });


}

 