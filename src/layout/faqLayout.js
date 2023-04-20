import { useLoaderData } from "react-router-dom";
import Support from "../components/support";
import Faq from "../components/faq";

function FaqLayout() {
    const { resData2 } = useLoaderData();
    // console.log(resData2)
    // console.log(question)
    return (
        <div className="bg-gradient-to-b from-slate-50 px-4 py-16 md:px-4 lg:px-20">
            <div className="md:flex">
                <Support />
                <div>
                    {
                        resData2.map((faq) => {
                            return (
                                <Faq key={faq.question} faq={faq} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FaqLayout;