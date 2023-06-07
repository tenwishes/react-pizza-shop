import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={490}
        viewBox="0 0 280 490"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="145" r="125" />
        <rect x="1" y="282" rx="15" ry="15" width="280" height="30" />
        <rect x="0" y="335" rx="15" ry="15" width="280" height="90" />
        <rect x="0" y="435" rx="15" ry="15" width="100" height="50" />
        <rect x="140" y="435" rx="15" ry="15" width="140" height="50" />
    </ContentLoader>
)

export default Skeleton