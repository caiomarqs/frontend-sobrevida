import React from "react";

export default function useAgentDetect() {
    
    const [isMobile, setMobile] = React.useState(false);

    React.useEffect(() => {
        const userAgent =
            typeof window.navigator === "undefined" ? "" : window.navigator.userAgent;
        const mobile = Boolean(
            userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
            )
        );
        setMobile(mobile);
    }, []);
    
    return { isMobile };
}