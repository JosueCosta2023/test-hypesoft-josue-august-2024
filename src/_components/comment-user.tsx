import React from "react";

const CommentUser = () => {
    return ( 
        <>
            <button className="flex gap-4">
                <div className="rounded-[50%] bg-brand-gray500 h-[52px] w-[52px]">
                </div>
                <div>
                    <h3 className="text-lg">Sundar Pichai</h3>
                    <p className="text-sm">CEO & Founder of <span className="text-brand-secondary font-bold">Google</span></p>
                </div>
            </button>
        </>
     );
}
 
export default CommentUser;