import PostForm from "@/components/PostForm.tsx";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateCommunityScreen = () => {
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=> {
        if (!navigator.onLine) {
            navigate('/loss-connection');
        }
    }, [params])

    return (
        <div className="flex flex-1 md:h-auto h-[82vh]">
            <div className="common-container">
                <div className="max-w-5xl flex-start gap-3 justify-start w-full">
                    <img src="/assets/icons/group_add_fill.svg" alt="add icon" width={36} height={36}/>
                    <h2 className="h3-bold md:h2-bold text-full w-full">Create Community</h2>
                </div>
                <PostForm communityId={params["*"] ? params["*"] : ""} type="community"/>
            </div>
        </div>
    );
};

export default CreateCommunityScreen;