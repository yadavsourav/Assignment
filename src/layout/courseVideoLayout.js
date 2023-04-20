import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import CourseVideos from "../components/courseVideos";

function CourseVideoLayout() {
    const { resData1 } = useLoaderData();
      const { courses } = resData1;

    return (

        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 lg:gap-x-8 lg:px-4 xl:grid-cols-4">
            {courses.map((course) => {
                return (
                    <CourseVideos key={course.id} course={course} />
                )
            }
            )
            }
            {/* <Suspense>
                <Await resolve={event}>
                    {(loadedEvent) => {
                        loadedEvent.courses.map((course) => {
                            return (
                                <CourseVideos key={course.id} course={course} />
                            )
                        }
                        )
                    }}
                </Await>  
            </Suspense> */}

        </div>
    )
}

export default CourseVideoLayout;