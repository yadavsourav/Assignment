import { useLoaderData } from "react-router-dom";
import HelpfulVideos from "../components/helpfulVideo";
import LastHelpfulVideo from "../components/lastHelpfulVideo";

function HelpfulVideosLayout() {
    const { resData1 } = useLoaderData();
    const { relatedContent } = resData1;
    return (

        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 md:gap-y-4 xl:grid-cols-3 lg:gap-x-8 lg:px-4">
            {relatedContent.map((related, index) => {

                if (index < 14) {
                    return (
                        <HelpfulVideos key={related.id} related={related} />
                    )
                }
            })
            }

            <LastHelpfulVideo related={relatedContent[14]}/>
        </div>
    )
}

export default HelpfulVideosLayout;